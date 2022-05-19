/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

export enum NavigationPathNames {
  AUTH = 'auth',
  SIGN_UP = 'sign-up',
  SIGN_IN = 'sign-in',
  PROFILE = 'profile'
}

export type NavigatorParamList = {
  welcome: undefined
  demo: undefined
  demoList: undefined
  [NavigationPathNames.AUTH]: undefined
  [NavigationPathNames.SIGN_UP]: undefined
  [NavigationPathNames.SIGN_IN]: undefined
  [NavigationPathNames.PROFILE]: undefined
  // 🔥 Your screens go here
}

export type NavigatorAuthParamList = {
  [NavigationPathNames.PROFILE]: undefined
}
