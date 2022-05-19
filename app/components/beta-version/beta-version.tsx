import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'

import { color, shadow, spacing, width } from '../../theme'

import { Row } from '../row'
import { Text } from '../text'

const CONTAINER: ViewStyle = {
  width: width / 1.75,
  backgroundColor: color.error,
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[4],
  ...shadow.base
}

const TEXT: TextStyle = {
  color: color.text,
  textTransform: 'uppercase'
}

export const BetaVersion = ({ style: styleOverride }) => {
  const style = [styleOverride, CONTAINER]

  return (
    <Row style={style} justifyContent="center">
      <Text preset="bold" text="Beta Version" style={TEXT} />
    </Row>
  )
}
