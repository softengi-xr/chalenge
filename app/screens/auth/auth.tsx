import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ImageStyle, TextStyle, View, ViewStyle } from 'react-native'

import { NavigatorParamList, NavigationPathNames } from '../../navigators'
import { color, spacing, width } from '../../theme'
import {
  BetaVersion,
  Button,
  Column,
  GradientBackground,
  Row,
  Screen,
  Text,
  IconImage
} from '../../components'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'

const FULL: ViewStyle = { flex: 1 }

const BETA_LABEL: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: -40,
  transform: [{ rotate: '-30deg' }]
}

const containerStyle = (insets: EdgeInsets): ViewStyle => ({
  backgroundColor: color.transparent,
  paddingTop: insets.top || 0,
  paddingBottom: insets.bottom || 0
})

const CONTENT: ViewStyle = {
  flex: 1
}

const DESCRIPTION: TextStyle = {
  marginTop: spacing[5],
  width: 300,
  textAlign: 'center'
}

const LOGO: ImageStyle = {
  marginTop: spacing[8],
  height: width / 2,
  width: width / 2
}

const BUTTON_CONTAINER: ViewStyle = {
  marginTop: spacing[4]
}

const BUTTON: ViewStyle = {
  marginTop: spacing[4]
}

const LOGIN_BUTTON: ViewStyle = {
  marginTop: 20
}

const TEXT: ViewStyle = {
  marginLeft: 4
}

export const AuthScreen: FC<
  StackScreenProps<NavigatorParamList, NavigationPathNames.AUTH>
> = ({ navigation }) => {
  const insets = useSafeAreaInsets()

  const handleOnNavigate = (path: keyof NavigatorParamList) => () => {
    navigation.push(path)
  }

  return (
    <View style={FULL} testID={NavigationPathNames.AUTH}>
      <Screen
        preset="fixed"
        style={containerStyle(insets)}
        backgroundColor={color.background}
      >
        <GradientBackground colors={color.authGradient} />
        <Column
          alignItems="center"
          justifyContent="space-between"
          style={CONTENT}
        >
          <BetaVersion style={BETA_LABEL} />
          <Column />
          <Column alignItems="center">
            <IconImage icon="logo" style={LOGO} />
            <Text
              preset="h6"
              text="Sign in to be able to save your preferences and settings."
              style={DESCRIPTION}
            />
            <Column style={BUTTON_CONTAINER}>
              <Button
                preset="default"
                text="Sign up with Email"
                style={BUTTON}
                onPress={handleOnNavigate(NavigationPathNames.SIGN_UP)}
              />
            </Column>
            <Button
              preset="transparent"
              text="Log in with Email"
              style={LOGIN_BUTTON}
              onPress={handleOnNavigate(NavigationPathNames.SIGN_IN)}
            />
          </Column>
          <Column alignItems="center">
            <Text preset="description" text="By signing in you accept the" />
            <Row justifyContent="center">
              <Button preset="transparent">
                <Text
                  text="General Terms"
                  preset="descriptionLink"
                  style={TEXT}
                />
              </Button>
              <Text preset="description" text="and" style={TEXT} />
              <Button preset="transparent">
                <Text
                  text="Privacy Policy"
                  preset="descriptionLink"
                  style={TEXT}
                />
              </Button>
            </Row>
          </Column>
        </Column>
      </Screen>
    </View>
  )
}
