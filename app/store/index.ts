import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import configureStore from './store'
import rootSaga from './sagas'
import { config } from '../config'

import * as reducers from './reducers'

export const reducersBeforeCombine = {
  app: reducers.appReducer,
  auth: reducers.authReducer
}

/* ------------- Assemble The Reducers ------------- */
export const storeReducers = combineReducers(reducersBeforeCombine)

export type Store = typeof storeReducers
export type StoreState = {
  app: reducers.AppState
  auth: reducers.AuthState
}

export default () => {
  let finalReducers: Store = storeReducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (config.REDUX_PERSIST.active) {
    const persistConfig = config.REDUX_PERSIST.storeConfig
    // @ts-ignore
    finalReducers = persistReducer(persistConfig, storeReducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  )

  if (module.hot) {
    // @ts-ignore
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('./sagas').default
      sagasManager.cancel()
      // @ts-ignore
      sagasManager.done.then(() => {
        // @ts-ignore
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}
