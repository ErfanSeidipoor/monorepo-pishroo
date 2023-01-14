import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from ".";

export default {
  component: TextField,
  title: "TextField",
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "First Name",
  type: "text",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Last Name",
  type: "text",
  color: "secondary",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  type: "password",
};

export const Disable = Template.bind({});
Disable.args = {
  label: "Disable",
  type: "text",
  value: "Hi, there",
};

export const Error = Template.bind({});
Error.args = {
  label: "Your Name",
  type: "text",
  helperText: "this is an error!",
  error: true,
};

export const Success = Template.bind({});
Success.args = {
  label: "OK",
  color: "success",
  type: "text",
  helperText: "Thanks",
};
