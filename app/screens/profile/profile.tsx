import React, { FC, useEffect, useState } from 'react'
import { TextStyle, View, ViewStyle } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackScreenProps } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

import { NavigationPathNames, NavigatorParamList } from '../../navigators'
import {
  Button,
  Column,
  Error,
  Screen,
  Text,
  TextField
} from '../../components'
import { color, spacing } from '../../theme'
import { UpdateUserRequest } from '../../services'
import { AuthCreators } from '../../store/actions'
import { StoreState } from '../../store'

import { IS_EMAIL_REGEX } from '../helpers'

const FULL: ViewStyle = { flex: 1 }

const containerStyle = (insets: EdgeInsets): ViewStyle => ({
  backgroundColor: color.palette.whiteTwo,
  paddingTop: insets.top || 0,
  paddingBottom: insets.bottom || 0,
  justifyContent: 'space-between'
})

const CONTENT: ViewStyle = {
  paddingHorizontal: spacing[4]
}

const BUTTON: ViewStyle = {
  marginTop: spacing[5]
}

const ERROR: ViewStyle = {
  marginTop: spacing[3]
}

const INPUT_STYLE: ViewStyle = {
  backgroundColor: color.palette.secondaryButtonBackground
}

const INPUT_LABEL: TextStyle = {
  color: color.buttonText
}

const INPUT: ViewStyle = {
  marginTop: spacing[5]
}

export const ProfileScreen: FC<
  StackScreenProps<NavigatorParamList, NavigationPathNames.PROFILE>
> = ({ navigation }) => {
  const { user } = useSelector((state: StoreState) => ({
    ...state.auth
  }))
  const dispatch = useDispatch()
  const [state, changeState] = useState<UpdateUserRequest>({
    email: user.email,
    name: user.name
  })

  const insets = useSafeAreaInsets()

  const emailAvaliable = IS_EMAIL_REGEX.test(state.email)
  const isDisabled = !emailAvaliable || !state.name

  const handleOnChange = (prop: keyof UpdateUserRequest) => (value: string) => {
    changeState({
      ...state,
      [prop]: value
    })
  }

  const handleOnSubmit = () => {
    dispatch(AuthCreators.updateUserRequest(state))
  }

  const handleOnLogout = () => {
    navigation.push(NavigationPathNames.AUTH)
    dispatch(AuthCreators.logout())
  }

  return (
    <View style={FULL} testID={NavigationPathNames.PROFILE}>
      <Screen
        preset="fixed"
        style={containerStyle(insets)}
        backgroundColor={color.background}
      >
        <Column justifyContent="space-between" style={CONTENT}>
          <Text preset="miniTitle" text="Profile" />
          <TextField
            defaultValue={state.name}
            label="Name shown on your shared cards"
            labelStyle={INPUT_LABEL}
            inputStyle={INPUT_STYLE}
            style={INPUT}
            onChangeText={handleOnChange('name')}
          />
          <TextField
            defaultValue={state.email}
            label="Email"
            labelStyle={INPUT_LABEL}
            inputStyle={INPUT_STYLE}
            onChangeText={handleOnChange('email')}
          />
          {!emailAvaliable && (
            <Error text="Email not correctly" style={ERROR} />
          )}
        </Column>
        <Column alignItems="center">
          <Button
            text="Log out"
            preset="secondary"
            style={BUTTON}
            onPress={handleOnLogout}
          />
          <Button
            disabled={isDisabled}
            text="Done"
            preset="primary"
            style={BUTTON}
            onPress={handleOnSubmit}
          />
        </Column>
      </Screen>
    </View>
  )
}
