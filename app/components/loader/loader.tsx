import React, { FC } from 'react'
import { ActivityIndicator, View, ViewStyle } from 'react-native'

import { color, height, width } from '../../theme'

import { LoaderProps } from './loader.props'

const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
  opacity: 0.6,
  position: 'absolute',
  top: 0,
  left: 0,
  width,
  height,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2
}

export const Loader: FC<LoaderProps> = ({
  children,
  loading,
  style: overrideStyle
}) => {
  const style = [CONTAINER, overrideStyle]
  if (!loading) {
    return <>{children}</>
  }

  return (
    <>
      <View style={style}>
        <ActivityIndicator size="small" color={color.palette.aquaGreen} />
      </View>
    </>
  )
}
