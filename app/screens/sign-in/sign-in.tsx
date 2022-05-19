import React, { FC, useState } from 'react'
import { View, ViewStyle } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackScreenProps } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

import { NavigationPathNames, NavigatorParamList } from '../../navigators'
import {
  Button,
  Column,
  Error,
  GradientBackground,
  Header,
  Screen,
  TextField
} from '../../components'
import { color, spacing } from '../../theme'
import { SignInWithEmailRequest } from '../../services'
import { AuthCreators } from '../../store/actions'

import { IS_EMAIL_REGEX, IS_PASSWORD_REGEX } from '../helpers'
import { StoreState } from '../../store'

const FULL: ViewStyle = { flex: 1 }

const containerStyle = (insets: EdgeInsets): ViewStyle => ({
  backgroundColor: color.transparent,
  paddingTop: insets.top || 0,
  paddingBottom: insets.bottom || 0
})

const CONTENT: ViewStyle = {
  paddingHorizontal: spacing[6]
}

const BUTTON: ViewStyle = {
  marginTop: spacing[5]
}

const ERROR: ViewStyle = {
  marginTop: spacing[3]
}

export const SignInScreen: FC<
  StackScreenProps<NavigatorParamList, NavigationPathNames.SIGN_UP>
> = ({ navigation }) => {
  const { hasError } = useSelector((state: StoreState) => ({ ...state.auth }))
  const dispatch = useDispatch()
  const [state, changeState] = useState<SignInWithEmailRequest>({
    email: '',
    password: ''
  })
  const insets = useSafeAreaInsets()

  const emailAvaliable = IS_EMAIL_REGEX.test(state.email)
  const passwordAvaliable = IS_PASSWORD_REGEX.test(state.password)
  const isDisabled = !emailAvaliable || !passwordAvaliable

  const handleOnChange = (prop: keyof SignInWithEmailRequest) => (
    value: string
  ) => {
    changeState({
      ...state,
      [prop]: value
    })
  }

  const handleOnSubmit = () => {
    dispatch(AuthCreators.signInWithEmailRequest(state))
  }

  const handleOnBack = () => navigation.goBack()

  return (
    <View style={FULL} testID={NavigationPathNames.SIGN_IN}>
      <Screen
        preset="fixed"
        style={containerStyle(insets)}
        backgroundColor={color.background}
      >
        <GradientBackground colors={color.authGradient} />
        <Header
          leftIcon="BackArrow"
          onLeftPress={handleOnBack}
          headerText="Sign up with Email"
        />
        <Column alignItems="center" style={CONTENT}>
          <TextField label="Email" onChangeText={handleOnChange('email')} />
          <TextField
            secureTextEntry
            label="Password"
            onChangeText={handleOnChange('password')}
          />
          {hasError && (
            <Error text="Email or password is not correct" style={ERROR} />
          )}

          <Button
            disabled={isDisabled}
            text="Log in"
            style={BUTTON}
            onPress={handleOnSubmit}
          />
        </Column>
      </Screen>
    </View>
  )
}
