import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Contact } from ".";

export default {
  component: Contact,
  title: "Contact",
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => {
  return <Contact {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: "title",
  value: "description",
};
