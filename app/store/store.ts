import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Rehydration from '../services/rehydration'
import { config } from '../config'
import { Store } from './index'
import { RootSaga } from './sagas'

// creates the store
export default (rootReducer: Store, rootSaga: RootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = createStore

  // @ts-ignore
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    // @ts-ignore
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (config.REDUX_PERSIST.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
