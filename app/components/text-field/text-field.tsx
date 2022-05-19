import React from 'react'
import { TextInput, TextStyle, View, ViewStyle } from 'react-native'

import { color, shadow, spacing, typography } from '../../theme'
import { translate } from '../../i18n'

import { Text } from '../text/text'
import { Row } from '../row'
import { textPresets } from '../text/text.presets'

import { TextFieldProps } from './text-field.props'
import { PRESETS } from './text-field.presets'

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
  alignSelf: 'stretch',
  ...shadow.base
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  minHeight: 35,
  backgroundColor: color.background,
  borderRadius: spacing[1],
  marginTop: 8,
  paddingHorizontal: spacing[3],
  paddingVertical: spacing[2],
  ...textPresets.textField
}

const LABEL_DESCRIPTION: TextStyle = {
  marginLeft: 4
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    labelStyle,
    labelDescription,
    labelDescriptionTx,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride]
  const inputStyles = [INPUT, inputStyleOverride]
  const actualPlaceholder = placeholderTx
    ? translate(placeholderTx)
    : placeholder

  return (
    <View style={containerStyles}>
      <Row>
        <Text preset="bold" tx={labelTx} text={label} style={labelStyle} />
        <Text
          style={LABEL_DESCRIPTION}
          tx={labelDescriptionTx}
          text={labelDescription}
        />
      </Row>
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.lighterGrey}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyles}
        ref={forwardedRef}
      />
    </View>
  )
}
