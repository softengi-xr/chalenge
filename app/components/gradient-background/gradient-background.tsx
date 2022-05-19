import * as React from 'react'
import { ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { GradientBackgroundProps } from './gradient-background.props'

const BG_GRADIENT: ViewStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  colors
}) => {
  return (
    <LinearGradient colors={colors} style={BG_GRADIENT}>
      {children}
    </LinearGradient>
  )
}
