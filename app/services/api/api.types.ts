import { ApolloClient } from '@apollo/client'

export interface User {
  id: number
  name: string
  email: string
}

export interface SignUpWithEmailRequest extends Pick<User, 'email' | 'name'> {
  password: string
}

export interface SignInWithEmailRequest extends Pick<User, 'email'> {
  password: string
}

export interface UpdateUserRequest extends Pick<User, 'email' | 'name'> {}

export interface IsExistingUserByEmailRequest extends Pick<User, 'email'> {}

export type SignUpWithEmailResponse = {
  accessToken: string
  refreshToken: string
  user: User
}

export interface SignInWithEmailResponse extends SignUpWithEmailResponse {}

export interface UpdateUserResponse extends User {}

export type IsExistingUserByEmailResponse = boolean

export type SignUpWithEmailMutationResponse = {
  signUpWithEmail: SignUpWithEmailResponse
}

export type SignInWithEmailMutationResponse = {
  loginWithEmail: SignInWithEmailResponse
}

export type UpdateUserMutationResponse = {
  updateUser: UpdateUserResponse
}

export type IsExistingUserByEmailQueryResponse = {
  isExistingUserByEmail: IsExistingUserByEmailResponse
}

export type SignUpWithEmailResults =
  | { kind: 'ok'; data: SignUpWithEmailResponse }
  | { kind: 'error'; errors?: ReadonlyArray<any> }

export type SignInWithEmailResults =
  | { kind: 'ok'; data: SignInWithEmailResponse }
  | { kind: 'error'; errors?: ReadonlyArray<any> }

export type UpdateUserResults =
  | { kind: 'ok'; data: UpdateUserResponse }
  | { kind: 'error'; errors?: ReadonlyArray<any> }

export type IsExistingUserByEmailResults =
  | { kind: 'ok'; data: IsExistingUserByEmailResponse }
  | { kind: 'error'; errors?: ReadonlyArray<any> }

export type Api = {
  client: ApolloClient<any>
  signUpWithEmail: (
    variables: SignUpWithEmailRequest
  ) => Promise<SignUpWithEmailResults>
  signInWithEmail: (
    variables: SignInWithEmailRequest
  ) => Promise<SignInWithEmailResults>
  updateUser: (user: UpdateUserRequest) => Promise<UpdateUserResults>
  isExistingUserByEmail: (
    variables: IsExistingUserByEmailRequest
  ) => Promise<IsExistingUserByEmailResults>
}
