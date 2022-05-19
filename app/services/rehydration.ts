import { Store } from 'redux'
import { persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ReduxPersist from '../config/redux-persist'
import StartupActions from '../store/startup-redux'

const updateReducers = (store: Store): void => {
  const reducerVersion = ReduxPersist.reducerVersion
  const startup = () => store.dispatch(StartupActions.startup())

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        persistStore(store, null, startup).purge()
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, null, startup)
      }
    })
    .catch(() => {
      persistStore(store, null, startup)
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    })
}

export default { updateReducers }
