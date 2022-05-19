import { ReactNode } from 'react'
import { FlexStyle, StyleProp, ViewProps, ViewStyle } from 'react-native'

export interface RowProps extends ViewProps {
  justifyContent?: FlexStyle['justifyContent']
  alignItems?: FlexStyle['alignItems']
  flexWrap?: FlexStyle['flexWrap']
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}
