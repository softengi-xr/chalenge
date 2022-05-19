import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '../text/text'
import { viewPresets, textButtonPresets } from './button.presets'
import { ButtonProps } from './button.props'

const DISABLED: ViewStyle = {
  opacity: 0.6
}

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    disabled,
    preset = 'primary',
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride, disabled && DISABLED]
  const textStyle = textButtonPresets[preset] || textButtonPresets.primary
  const textStyles = [textStyle, textStyleOverride]

  const content = children || <Text tx={tx} text={text} style={textStyles} />

  return (
    <TouchableOpacity style={viewStyles} disabled={disabled} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
