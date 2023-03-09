import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Color } from ".";

export default {
  component: Color,
  title: "Color",
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = (args) => {
  return <Color {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  value: faker.color.rgb({ format: "hex" }),
};
