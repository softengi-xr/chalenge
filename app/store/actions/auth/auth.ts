import { createActions, createTypes } from 'reduxsauce'

import { AuthActions, AuthActionsTypes } from './auth.types'

export const authStringTypes = createTypes<AuthActionsTypes>(`
    SIGN_UP_WITH_EMAIL_REQUEST
    SIGN_UP_WITH_EMAIL_SUCCESS
    SIGN_UP_WITH_EMAIL_FAILURE

    SIGN_IN_WITH_EMAIL_REQUEST
    SIGN_IN_WITH_EMAIL_SUCCESS
    SIGN_IN_WITH_EMAIL_FAILURE

    UPDATE_USER_REQUEST
    UPDATE_USER_SUCCESS
    UPDATE_USER_FAILURE

    IS_EXISTING_USER_BY_EMAIL_REQUEST
    IS_EXISTING_USER_BY_EMAIL_SUCCESS
    IS_EXISTING_USER_BY_EMAIL_FAILURE

    LOGOUT
`)

const { Types: AuthActionTypes, Creators: AuthCreators } = createActions<
  AuthActionsTypes,
  AuthActions
>({
  signUpWithEmailRequest: ['payload'],
  signUpWithEmailSuccess: ['payload'],
  signUpWithEmailFailure: ['payload'],

  signInWithEmailRequest: ['payload'],
  signInWithEmailSuccess: ['payload'],
  signInWithEmailFailure: ['payload'],

  updateUserRequest: ['payload'],
  updateUserSuccess: ['payload'],
  updateUserFailure: ['payload'],

  isExistingUserByEmailRequest: ['payload'],
  isExistingUserByEmailSuccess: ['payload'],
  isExistingUserByEmailFailure: ['payload'],

  logout: ['payload']
})

export { AuthCreators, AuthActionTypes }
