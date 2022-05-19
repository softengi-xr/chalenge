import { TextStyle } from 'react-native'
import { color, typography } from '../../theme'

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 16,
  lineHeight: 19
}

const DECORATION: TextStyle = {
  textDecorationStyle: 'solid',
  textDecorationColor: color.text,
  textDecorationLine: 'underline'
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const textPresets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * The default link styles.
   */
  defaultLink: {
    ...BASE,
    ...DECORATION
  } as TextStyle,

  description: {
    ...BASE,
    fontSize: 13,
    lineHeight: 16,
    opacity: 0.8,
    fontWeight: '600'
  } as TextStyle,

  descriptionLink: {
    ...BASE,
    ...DECORATION,
    fontSize: 13,
    lineHeight: 16,
    opacity: 0.8,
    fontWeight: '600'
  } as TextStyle,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: 'bold' } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: 'bold' } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  h3: { ...BASE, fontSize: 20, lineHeight: 22, color: color.text } as TextStyle,

  h5: {
    ...BASE,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: color.text
  } as TextStyle,

  h6: { ...BASE, fontSize: 18, lineHeight: 22, color: color.text } as TextStyle,

  miniTitle: {
    opacity: 0.9,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.75,
    color: color.buttonText
  },

  /**
   * A smaller piece of secondary information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,

  button: {
    ...BASE,
    lineHeight: 18,
    color: color.buttonText,
    fontWeight: '600'
  } as TextStyle,

  buttonWhite: {
    ...BASE,
    lineHeight: 18,
    color: color.text,
    fontWeight: '600'
  } as TextStyle,

  textField: {
    ...BASE,
    color: color.buttonText,
    fontWeight: '600'
  } as TextStyle
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof textPresets
