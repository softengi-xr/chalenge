import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import { IconImage } from './icon-image'

declare let module

storiesOf('Icon', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Names', () => (
    <Story>
      <UseCase text="back" usage="The icon for going back">
        <IconImage icon="back" />
      </UseCase>
      <UseCase text="bullet" usage="The icon for a bullet point">
        <IconImage icon="logo" />
      </UseCase>
    </Story>
  ))
