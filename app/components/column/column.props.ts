import { ReactNode } from 'react'
import { FlexStyle, StyleProp, ViewStyle } from 'react-native'

export interface ColumnProps extends ViewStyle {
  justifyContent?: FlexStyle['justifyContent']
  alignItems?: FlexStyle['alignItems']
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}
