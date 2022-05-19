import { gql } from '@apollo/client'

import { USER_FRAGMENT } from './fragments'

export const SIGN_UP_WITH_EMAIL_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation SignUpWithEmail(
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        ...UserFragment
      }
      accessToken
      refreshToken
    }
  }
`

export const LOGIN_WITH_EMAIL_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation LoginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        ...UserFragment
      }
      accessToken
      refreshToken
    }
  }
`

export const UPDATE_USER_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation UpdateUser($name: NonEmptyString!, $email: EmailAddress!) {
    updateUser(name: $name, email: $email) {
      ...UserFragment
    }
  }
`

export const IS_EXISTING_USER_BY_EMAIL = gql`
  query IsExistingUserByEmail($email: EmailAddress!) {
    isExistingUserByEmail(email: $email)
  }
`
