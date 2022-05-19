import React, { FC } from 'react'
import { ViewStyle } from 'react-native'

import { color, spacing } from '../../theme'

import { Row } from '../row'
import { Text } from '../text'

import { ErrorProps } from './error.types'

export const CONTAINER: ViewStyle = {
  backgroundColor: color.error,
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[2]
}

export const Error: FC<ErrorProps> = ({ style: overrideStyle, text, tx }) => {
  const style = [CONTAINER, overrideStyle]

  return (
    <Row style={style}>
      <Text text={text} tx={tx} />
    </Row>
  )
}
