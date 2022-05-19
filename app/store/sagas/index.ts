import { takeLatest, all } from 'redux-saga/effects'

import { config } from '../../config'
import { api as Api } from '../../services'

import { AuthActionTypes } from '../actions'
/* ------------- Types ------------- */

// import { StartupTypes } from '../startup-redux'

/* ------------- Sagas ------------- */

import {
  IsExistingUserByEmail,
  SignInWithEmail,
  SignUpWithEmail,
  UpdateUser
} from './auth'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

const api = Api.create(config.BASE_URL)

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // Login api request
    takeLatest(
      AuthActionTypes.SIGN_IN_WITH_EMAIL_REQUEST,
      SignInWithEmail,
      api
    ),
    takeLatest(
      AuthActionTypes.SIGN_UP_WITH_EMAIL_REQUEST,
      SignUpWithEmail,
      api
    ),
    takeLatest(AuthActionTypes.UPDATE_USER_REQUEST, UpdateUser, api),
    takeLatest(
      AuthActionTypes.IS_EXISTING_USER_BY_EMAIL_REQUEST,
      IsExistingUserByEmail,
      api
    )
  ])
}

export type RootSaga = typeof root
