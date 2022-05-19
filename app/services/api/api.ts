import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'

import * as Types from './api.types'
import {
  IS_EXISTING_USER_BY_EMAIL,
  LOGIN_WITH_EMAIL_MUTATION,
  SIGN_UP_WITH_EMAIL_MUTATION,
  UPDATE_USER_MUTATION
} from './api.graphql'
import { AuthTokens, loadString, saveString } from '../../utils/storage'

/**
 * Manages all requests to the API.
 */
export const create = (baseUrl = 'https://api-dev.foodstyles.com/graphql') => {
  const authMiddleware = new ApolloLink(async (operation, forward) => {
    // add the authorization to the headers
    const token = await loadString(AuthTokens.ACCESS)

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })

    return forward(operation)
  })

  const httpLink = createHttpLink({
    uri: baseUrl
  })

  const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
  })

  const signUpWithEmail = async (
    variables: Types.SignUpWithEmailRequest
  ): Promise<Types.SignUpWithEmailResults> => {
    try {
      const response = await client.mutate<
        Types.SignUpWithEmailMutationResponse,
        Types.SignUpWithEmailRequest
      >({
        mutation: SIGN_UP_WITH_EMAIL_MUTATION,
        variables
      })

      if (!response.data) {
        return { kind: 'error' }
      }

      const { data } = response
      const { accessToken, refreshToken } = data.signUpWithEmail
      saveString(AuthTokens.ACCESS, accessToken)
      saveString(AuthTokens.REFRESH, refreshToken)

      return { kind: 'ok', data: data.signUpWithEmail }
    } catch (err) {
      return { kind: 'error', errors: [err] }
    }
  }

  const signInWithEmail = async (
    variables: Types.SignInWithEmailRequest
  ): Promise<Types.SignInWithEmailResults> => {
    try {
      const response = await client.mutate<
        Types.SignInWithEmailMutationResponse,
        Types.SignInWithEmailRequest
      >({
        mutation: LOGIN_WITH_EMAIL_MUTATION,
        variables
      })

      if (!response.data) {
        return { kind: 'error' }
      }

      const { data } = response
      const { accessToken, refreshToken } = data.loginWithEmail
      saveString(AuthTokens.ACCESS, accessToken)
      saveString(AuthTokens.REFRESH, refreshToken)

      return { kind: 'ok', data: data.loginWithEmail }
    } catch (err) {
      return { kind: 'error', errors: [err] }
    }
  }

  const updateUser = async (
    user: Types.UpdateUserRequest
  ): Promise<Types.UpdateUserResults> => {
    try {
      const response = await client.mutate<
        Types.UpdateUserMutationResponse,
        Types.UpdateUserRequest
      >({
        mutation: UPDATE_USER_MUTATION,
        variables: user
      })
      console.log(response)

      if (!response.data) {
        return { kind: 'error' }
      }

      const { data } = response

      return { kind: 'ok', data: data.updateUser }
    } catch (err) {
      console.log(err)
      return { kind: 'error', errors: [err] }
    }
  }

  const isExistingUserByEmail = async (
    variables: Types.IsExistingUserByEmailRequest
  ): Promise<Types.IsExistingUserByEmailResults> => {
    try {
      const response = await client.query<
        Types.IsExistingUserByEmailQueryResponse,
        Types.IsExistingUserByEmailRequest
      >({
        query: IS_EXISTING_USER_BY_EMAIL,
        variables
      })

      if (!response) {
        return { kind: 'error' }
      }

      const { error, errors } = response
      if (error) {
        return { kind: 'error', errors: [new Error(error.message)] }
      }

      if (errors?.length > 0) {
        return { kind: 'error', errors }
      }

      const { data } = response

      return { kind: 'ok', data: data.isExistingUserByEmail }
    } catch (err) {
      return { kind: 'error', errors: [err] }
    }
  }

  return {
    client,
    signUpWithEmail,
    signInWithEmail,
    updateUser,
    isExistingUserByEmail
  }
}

export default { create }
