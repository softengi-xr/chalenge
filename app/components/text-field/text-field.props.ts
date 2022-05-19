import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native'

import { TxKeyPath } from '../../i18n'

import { PRESETS } from './text-field.presets'

export interface TextFieldProps extends TextInputProps {
  labelStyle?: TextStyle
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * The label i18n key for description.
   */
  labelDescriptionTx?: TxKeyPath

  /**
   * The label text, how description if no labelTx is provided.
   */
  labelDescription?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS

  forwardedRef?: any
}
