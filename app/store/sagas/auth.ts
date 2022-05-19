import { call, put } from 'redux-saga/effects'

import {
  SignInWithEmailResults,
  SignUpWithEmailResults,
  UpdateUserResults,
  IsExistingUserByEmailResults,
  Api
} from '../../services'

import { AppTypes, AuthCreators, AuthTypes } from '../actions'

export function* SignInWithEmail(
  api: Api,
  action: AuthTypes.SignInWithEmailActionRequest
) {
  const response: SignInWithEmailResults = yield call(
    api.signInWithEmail,
    action.payload
  )

  if (response.kind !== 'ok') {
    yield put(
      AuthCreators.signInWithEmailFailure({
        errors: response.errors
      })
    )
  } else {
    yield put(AuthCreators.signInWithEmailSuccess(response.data))
  }
}

export function* SignUpWithEmail(
  api: Api,
  action: AuthTypes.SignUpWithEmailActionRequest
) {
  const response: SignUpWithEmailResults = yield call(
    api.signUpWithEmail,
    action.payload
  )

  if (response.kind !== 'ok') {
    yield put(
      AuthCreators.signUpWithEmailFailure({
        errors: response.errors
      })
    )
  } else {
    yield put(AuthCreators.signUpWithEmailSuccess(response.data))
  }
}

export function* UpdateUser(
  api: Api,
  action: AuthTypes.UpdateUserActionRequest
) {
  const response: UpdateUserResults = yield call(api.updateUser, action.payload)

  if (response.kind !== 'ok') {
    yield put(
      AuthCreators.updateUserFailure({
        errors: response.errors
      })
    )
  } else {
    yield put(AuthCreators.updateUserSuccess(response.data))
  }
}

export function* IsExistingUserByEmail(
  api: Api,
  action: AuthTypes.IsExistingUserByEmailActionRequest
) {
  const response: IsExistingUserByEmailResults = yield call(
    api.isExistingUserByEmail,
    action.payload
  )

  if (response.kind !== 'ok') {
    yield put(
      AuthCreators.isExistingUserByEmailFailure({
        errors: response.errors
      })
    )
  } else {
    yield put(AuthCreators.isExistingUserByEmailSuccess(response.data))
  }
}
