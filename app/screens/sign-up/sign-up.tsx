import React, { FC, useState } from 'react'
import { View, ViewStyle } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackScreenProps } from '@react-navigation/stack'

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
import { SignUpWithEmailRequest } from '../../services'
import { useDispatch, useSelector } from 'react-redux'
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

const ERROR: ViewStyle = {
  marginTop: spacing[3]
}

const BUTTON: ViewStyle = {
  marginTop: spacing[5]
}

export const SignUpScreen: FC<
  StackScreenProps<NavigatorParamList, NavigationPathNames.SIGN_UP>
> = ({ navigation }) => {
  const { isExist, hasError } = useSelector((state: StoreState) => ({
    ...state.auth
  }))
  const dispatch = useDispatch()
  const [state, changeState] = useState<SignUpWithEmailRequest>({
    email: '',
    name: '',
    password: ''
  })
  const insets = useSafeAreaInsets()

  const emailAvaliable = IS_EMAIL_REGEX.test(state.email)
  const passwordAvaliable = IS_PASSWORD_REGEX.test(state.password)
  const isDisabled = !emailAvaliable || !passwordAvaliable || !state.name

  const handleOnChange =
    (prop: keyof SignUpWithEmailRequest) => (value: string) => {
      changeState({
        ...state,
        [prop]: value
      })
    }

  const handleOnChangeEmail = (value: string) => {
    const change = handleOnChange('email')

    change(value)

    if (emailAvaliable) {
      dispatch(AuthCreators.isExistingUserByEmailRequest({ email: value }))
    }
  }

  const handleOnSubmit = () => {
    dispatch(AuthCreators.signUpWithEmailRequest(state))
  }

  const handleOnBack = () => navigation.goBack()

  return (
    <View style={FULL} testID={NavigationPathNames.SIGN_UP}>
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
          <TextField label="Your name" onChangeText={handleOnChange('name')} />
          <TextField label="Email" onChangeText={handleOnChangeEmail} />
          <TextField
            secureTextEntry
            label="Password"
            labelDescription=" (min 6 characters)"
            onChangeText={handleOnChange('password')}
          />
          {isExist && (
            <Error text="Current user with that email is exist" style={ERROR} />
          )}
          {hasError && <Error text="Something went wrong" style={ERROR} />}

          <Button
            disabled={isDisabled}
            text="Sign up"
            style={BUTTON}
            onPress={handleOnSubmit}
          />
        </Column>
      </Screen>
    </View>
  )
}
