import { createActions, createTypes } from 'reduxsauce'

import { AppActions, AppActionsTypes } from './app.types'

export const appStringTypes = createTypes(`
  IS_LOADED
  INIT_APOLLO
`)

const { Types: AppActionTypes, Creators: AppCreators } = createActions<
  AppActionsTypes,
  AppActions
>({
  isLoaded: ['isLoaded'],
  initApollo: ['payload']
})

export { AppCreators, AppActionTypes }
