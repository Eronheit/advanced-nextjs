import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />
Basic.args = {
  title: 'Title basic',
  description: 'Description basic'
}

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />
