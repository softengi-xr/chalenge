import React, { forwardRef } from 'react'
import { View, ViewStyle } from 'react-native'

import { RowProps } from './row.props'

const getRowStyles = ({
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexWrap = 'nowrap'
}: RowProps): ViewStyle => ({
  alignItems,
  justifyContent,
  flexDirection: 'row',
  flexWrap
})

export const Row = forwardRef<View, RowProps>(
  (
    { alignItems, children, justifyContent, flexWrap, style, ...props },
    ref
  ) => {
    const rowStyle = [
      getRowStyles({ alignItems, justifyContent, flexWrap, ...props }),
      style
    ]

    return (
      <View style={rowStyle} ref={ref} {...props}>
        {children}
      </View>
    )
  }
)

Row.displayName = 'Row'
