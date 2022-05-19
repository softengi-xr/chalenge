import { createReducer } from 'reduxsauce'

import { AuthTypes, AuthActionTypes } from '../actions'

/* ------------- Reducers ------------- */

const INITIAL_STATE = {
  loggedIn: false,
  hasError: false,
  user: {
    email: '',
    name: ''
  },
  isExist: false,
  loading: false
}

const authWithEmailSuccess = (
  state = INITIAL_STATE,
  action: AuthTypes.SignUpWithEmailActionSuccess
) => {
  const { user } = action.payload
  return {
    ...state,
    user: {
      ...state.user,
      ...user
    },
    loading: false,
    loggedIn: true,
    hasError: false
  }
}

const authWithEmailFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    ...INITIAL_STATE,
    hasError: true
  }
}

const updateUserSuccess = (
  state = INITIAL_STATE,
  action: AuthTypes.SignUpWithEmailActionSuccess
) => {
  const { user } = action.payload
  return {
    ...state,
    user: {
      ...state.user,
      ...user
    },
    hasError: false
  }
}

const updateUserFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    hasError: true
  }
}

const isExistSuccess = (
  state = INITIAL_STATE,
  action: AuthTypes.IsExistingUserByEmailActionSuccess
) => {
  return {
    ...state,
    isExist: action.payload
  }
}

const isExistFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isExist: true,
    hasError: true
  }
}

const logout = (state = INITIAL_STATE) => {
  return {
    ...state,
    ...INITIAL_STATE
  }
}

const load = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: true
  }
}

export type AuthState = typeof INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const authReducer = createReducer<AuthState>(INITIAL_STATE, {
  [AuthActionTypes.SIGN_UP_WITH_EMAIL_SUCCESS]: authWithEmailSuccess,
  [AuthActionTypes.SIGN_UP_WITH_EMAIL_FAILURE]: authWithEmailFailure,

  [AuthActionTypes.SIGN_IN_WITH_EMAIL_SUCCESS]: authWithEmailSuccess,
  [AuthActionTypes.SIGN_IN_WITH_EMAIL_FAILURE]: authWithEmailFailure,

  [AuthActionTypes.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [AuthActionTypes.UPDATE_USER_FAILURE]: updateUserFailure,

  [AuthActionTypes.IS_EXISTING_USER_BY_EMAIL_SUCCESS]: isExistSuccess,
  [AuthActionTypes.IS_EXISTING_USER_BY_EMAIL_FAILURE]: isExistFailure,

  [AuthActionTypes.SIGN_UP_WITH_EMAIL_REQUEST]: load,
  [AuthActionTypes.SIGN_IN_WITH_EMAIL_REQUEST]: load,

  [AuthActionTypes.LOGOUT]: logout
})
