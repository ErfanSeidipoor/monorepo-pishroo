import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Map } from ".";

export default {
  component: Map,
  title: "Map",
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => {
  return <Map {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
