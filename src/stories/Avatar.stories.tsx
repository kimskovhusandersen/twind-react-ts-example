import * as React from 'react';
import type { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from '../components/Avatar.styled';

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://i.pravatar.cc/100',
  round: false,
  size: 'md',
};
