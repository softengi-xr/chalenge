import { SvgProps } from 'react-native-svg'

import * as Icons from './icons/export-icon-component'

export type IconName = keyof typeof Icons

export interface IconProps extends SvgProps {
  name: IconName
}
