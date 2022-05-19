import { ViewStyle } from 'react-native'

import { TxKeyPath } from '../../i18n'

export type ErrorProps = {
  style?: ViewStyle
  text: string
  tx?: TxKeyPath
}
