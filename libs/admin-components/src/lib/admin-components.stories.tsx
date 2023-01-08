import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AdminComponents } from "./admin-components";

export default {
  component: AdminComponents,
  title: "AdminComponents",
} as ComponentMeta<typeof AdminComponents>;

const Template: ComponentStory<typeof AdminComponents> = (args) => (
  <AdminComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
