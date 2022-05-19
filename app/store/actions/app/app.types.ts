import { ApolloClient } from '@apollo/client'
import { AnyAction } from 'redux'
import { ParamAction } from '../types'

export interface LoadAction extends AnyAction {
  isLoaded: boolean
}

export type InitApolloAction = ParamAction<ApolloClient<any>>

export type AppActionsTypes = {
  IS_LOADED: string
  INIT_APOLLO: string
}

export type AppActions = {
  isLoaded(): LoadAction
  initApollo(client: ApolloClient<any>): InitApolloAction
}
