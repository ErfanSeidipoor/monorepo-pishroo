import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo } from ".";

export default {
  component: Logo,
  title: "Logo",
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  width: "200px",
};
