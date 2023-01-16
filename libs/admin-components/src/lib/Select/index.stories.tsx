import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from ".";

export default {
  component: Select,
  title: "Select",
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select<Item>> = (args) => (
  <Select {...args} />
);

type Item = { value: number; label: string };
const getLabel = (item: Item) => item.label;
const getValue = (item: Item) => item.value;

const items: Item[] = [
  { value: 1, label: "one" },
  { value: 2, label: "two" },
  { value: 3, label: "three" },
  { value: 4, label: "four" },
  { value: 5, label: "five" },
];

export const Primary = Template.bind({});
Primary.args = {
  label: "primary",
  labelId: "demo-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
  withNone: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "secondary",
  labelId: "secondary-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
  withNone: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "full-width",
  labelId: "full-width-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
  withNone: true,
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "disabled",
  labelId: "disabled-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
  withNone: true,
  disabled: true,
};

export const Selected = Template.bind({});
Selected.args = {
  label: "selected",
  labelId: "disabled-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
  value: 3,
};
