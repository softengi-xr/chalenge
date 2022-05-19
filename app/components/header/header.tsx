import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'

import { spacing } from '../../theme'
import { translate } from '../../i18n'

import { Button } from '../button'
import { Text } from '../text'
import { Icon } from '../icon'

import { HeaderProps } from './header.props'

// static styles
const ROOT: ViewStyle = {
  flexDirection: 'row',
  padding: spacing[2],
  alignItems: 'center',
  justifyContent: 'flex-start'
}
const TITLE: TextStyle = { textAlign: 'center' }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: 'center' }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ''

  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon name={leftIcon} height={55} width={55} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text preset="h3" style={[TITLE, titleStyle]} text={header} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon name={rightIcon} height={55} width={55} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
