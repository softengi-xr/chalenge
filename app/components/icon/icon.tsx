import React, { FC } from 'react'

import * as Icons from './icons/export-icon-component'
import { IconProps } from './icon.props'

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const Component = Icons[name]

  return <Component {...props} />
}
