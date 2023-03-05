import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pagination } from ".";

export default {
  component: Pagination,
  title: "Pagination",
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  page: 1,
  count: 10,
};

export const LastPage = Template.bind({});
LastPage.args = {
  page: 10,
  count: 10,
};

export const Disabled_ = Template.bind({});
Disabled_.args = {
  page: 1,
  count: 10,
  disabled: true,
};
