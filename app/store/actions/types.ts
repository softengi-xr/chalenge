import { Action } from 'redux'

export interface ParamAction<T> extends Action<string> {
  payload: T
}

export type ActionFailurePayload = {
  errors: ReadonlyArray<any>
}
