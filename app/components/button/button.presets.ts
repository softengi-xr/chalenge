import { ViewStyle, TextStyle } from 'react-native'
import { color, shadow, spacing } from '../../theme'
import { textPresets } from '../text'

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[5],
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center'
}

const BASE_TEXT: TextStyle = {
  ...textPresets.default,
  paddingHorizontal: spacing[3]
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.aquaGreen,
    ...shadow.base
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'flex-start'
  } as ViewStyle,

  secondary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.whiteThree,
    width: 162
  } as ViewStyle,

  default: {
    ...BASE_VIEW,
    backgroundColor: color.background,
    width: 240,
    ...shadow.base
  } as ViewStyle,

  transparent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.transparent
  }
}

export const textButtonPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, ...textPresets.buttonWhite } as TextStyle,

  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0
  } as TextStyle,

  secondary: {
    ...BASE_TEXT,
    ...textPresets.button
  } as TextStyle,

  default: {
    ...BASE_TEXT,
    ...textPresets.button
  } as TextStyle,

  transparent: {
    ...textPresets.buttonWhite
  }
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
