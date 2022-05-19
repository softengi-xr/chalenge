/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
  NavigationProp
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import {
  AuthScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen
} from '../screens'

import { navigationRef, useBackButtonHandler } from './navigation-utilities'
import { NavigationPathNames, NavigatorParamList } from './app-navigator.types'
import { StoreState } from '../store'

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  const { loggedIn, loading } = useSelector((state: StoreState) => ({
    ...state.auth
  }))
  const screenOptions = {
    headerShown: false
  }
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>()

  useEffect(() => {
    if (!loading) {
      if (loggedIn) {
        return navigation.navigate(NavigationPathNames.PROFILE)
      }
      if (!loggedIn) {
        navigation.navigate(NavigationPathNames.AUTH)
      }
    }
  }, [loggedIn, loading])

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={NavigationPathNames.AUTH}
    >
      <Stack.Screen name={NavigationPathNames.AUTH} component={AuthScreen} />
      <Stack.Screen
        name={NavigationPathNames.SIGN_UP}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={NavigationPathNames.SIGN_IN}
        component={SignInScreen}
      />
      <Stack.Screen
        name={NavigationPathNames.PROFILE}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  )
}

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = 'AppNavigator'

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['welcome']
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
