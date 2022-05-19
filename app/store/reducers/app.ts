import { createReducer } from 'reduxsauce'

import { AppTypes, AppActionTypes } from '../actions'

/* ------------- Reducers ------------- */

const INITIAL_STATE = {
  isLoaded: false
}

const initApp = (state = INITIAL_STATE, action: AppTypes.LoadAction) => {
  const { isLoaded } = action
  return {
    ...state,
    isLoaded
  }
}

export type AppState = typeof INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const appReducer = createReducer<AppState>(INITIAL_STATE, {
  [AppActionTypes.IS_LOADED]: initApp
})
