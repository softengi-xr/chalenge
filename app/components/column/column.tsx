import React, { FC } from 'react'
import { View, ViewStyle } from 'react-native'

import { ColumnProps } from './column.props'

const getColumnStyles = ({
  alignItems = 'flex-start',
  justifyContent = 'flex-start'
}: ColumnProps): ViewStyle => ({
  alignItems,
  justifyContent,
  flexDirection: 'column'
})

export const Column: FC<ColumnProps> = ({
  alignItems,
  children,
  justifyContent,
  alignSelf,
  style,
  ...props
}) => {
  const columnStyle = [style, getColumnStyles({ alignItems, justifyContent })]

  return (
    <View {...props} style={columnStyle}>
      {children}
    </View>
  )
}
