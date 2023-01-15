import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from ".";

export default {
  component: Checkbox,
  title: "Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "secondary",
  color: "secondary",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "checked",
  checked: true,
};

export const Disable = Template.bind({});
Disable.args = {
  label: "Disable",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Error",
  color: "error",
};

export const Success = Template.bind({});
Success.args = {
  label: "OK",
  color: "success",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: "",
  color: "success",
};
