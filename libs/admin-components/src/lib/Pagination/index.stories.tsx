import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from ".";

export default {
  component: Pagination,
  title: "Pagination",
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  count: 12,
  page: 10,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  count: 12,
  page: 6,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  count: 12,
  page: 6,
};
