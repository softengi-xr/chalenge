import * as React from 'react'
import { View, ImageStyle } from 'react-native'

import { AutoImage as Image } from '../auto-image/auto-image'
import { IconImageProps } from './icon-image.props'
import { icons } from './icons'

const ROOT: ImageStyle = {
  resizeMode: 'contain'
}

export function IconImage(props: IconImageProps) {
  const { style: styleOverride, icon, containerStyle } = props

  return (
    <View style={containerStyle}>
      <Image style={[ROOT, styleOverride]} source={icons[icon]} />
    </View>
  )
}
