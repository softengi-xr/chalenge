import { AnyAction } from 'redux'
import * as Types from '../../../services'

import { ActionFailurePayload, ParamAction } from '../types'

export type SignUpWithEmailActionRequest =
  ParamAction<Types.SignUpWithEmailRequest>
export type SignUpWithEmailActionSuccess =
  ParamAction<Types.SignUpWithEmailResponse>
export type SignUpWithEmailActionFailure = ParamAction<ActionFailurePayload>

export type SignInWithEmailActionRequest =
  ParamAction<Types.SignInWithEmailRequest>
export type SignInWithEmailActionSuccess = SignUpWithEmailActionSuccess
export type SignInWithEmailActionFailure = SignUpWithEmailActionFailure

export type UpdateUserActionRequest = ParamAction<Types.UpdateUserRequest>
export type UpdateUserActionSuccess = ParamAction<Types.UpdateUserResponse>
export type UpdateUserActionFailure = ParamAction<ActionFailurePayload>

export type IsExistingUserByEmailActionRequest =
  ParamAction<Types.IsExistingUserByEmailRequest>
export type IsExistingUserByEmailActionSuccess =
  ParamAction<Types.IsExistingUserByEmailResponse>
export type IsExistingUserByEmailActionFailure =
  ParamAction<ActionFailurePayload>

export type AuthActionsTypes = {
  SIGN_UP_WITH_EMAIL_REQUEST: string
  SIGN_UP_WITH_EMAIL_SUCCESS: string
  SIGN_UP_WITH_EMAIL_FAILURE: string

  SIGN_IN_WITH_EMAIL_REQUEST: string
  SIGN_IN_WITH_EMAIL_SUCCESS: string
  SIGN_IN_WITH_EMAIL_FAILURE: string

  UPDATE_USER_REQUEST: string
  UPDATE_USER_SUCCESS: string
  UPDATE_USER_FAILURE: string

  IS_EXISTING_USER_BY_EMAIL_REQUEST: string
  IS_EXISTING_USER_BY_EMAIL_SUCCESS: string
  IS_EXISTING_USER_BY_EMAIL_FAILURE: string

  LOGOUT: string
}

export type AuthActions = {
  signUpWithEmailRequest(
    user: Types.SignUpWithEmailRequest
  ): SignUpWithEmailActionRequest
  signUpWithEmailSuccess(
    data: Types.SignUpWithEmailResponse
  ): SignUpWithEmailActionRequest
  signUpWithEmailFailure(
    errors: ActionFailurePayload
  ): SignUpWithEmailActionRequest

  signInWithEmailRequest(
    user: Types.SignInWithEmailRequest
  ): SignInWithEmailActionRequest
  signInWithEmailSuccess(
    data: Types.SignInWithEmailResponse
  ): SignInWithEmailActionSuccess
  signInWithEmailFailure(
    errors: ActionFailurePayload
  ): SignInWithEmailActionFailure

  updateUserRequest(user: Types.UpdateUserRequest): UpdateUserActionRequest
  updateUserSuccess(data: Types.UpdateUserResponse): UpdateUserActionSuccess
  updateUserFailure(errors: ActionFailurePayload): UpdateUserActionFailure

  isExistingUserByEmailRequest(
    user: Types.IsExistingUserByEmailRequest
  ): IsExistingUserByEmailActionRequest
  isExistingUserByEmailSuccess(
    data: Types.IsExistingUserByEmailResponse
  ): IsExistingUserByEmailActionSuccess
  isExistingUserByEmailFailure(
    errors: ActionFailurePayload
  ): IsExistingUserByEmailActionFailure
  logout(): AnyAction
}
