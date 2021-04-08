import React from 'react';

import { RadioButtons } from './index';

const options = [
  { name: 'blue', value: 'blue' },
  { name: 'green', value: 'green' },
  { name: 'red', value: 'red' },
  { name: 'yellow', value: 'yellow' },
];

export default {
  title: 'Input Components/RadioButtons',
  component: RadioButtons,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <RadioButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Radio Buttons Title',
  options,
};

export const Selected = Template.bind({});
Selected.args = {
  title: 'Radio Buttons Title',
  options,
  selected: options[1].value,
};
