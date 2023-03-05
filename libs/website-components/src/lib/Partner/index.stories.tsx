import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Partner } from ".";

export default {
  component: Partner,
  title: "Partner",
} as ComponentMeta<typeof Partner>;

const Template: ComponentStory<typeof Partner> = (args) => {
  return <Partner {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: faker.image.imageUrl(),
  title: faker.commerce.productName(),
};
