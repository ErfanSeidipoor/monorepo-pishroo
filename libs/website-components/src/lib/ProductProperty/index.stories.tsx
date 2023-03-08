import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ProductProperty } from ".";

export default {
  component: ProductProperty,
  title: "ProductProperty",
} as ComponentMeta<typeof ProductProperty>;

const Template: ComponentStory<typeof ProductProperty> = (args) => {
  return <ProductProperty {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: faker.commerce.department(),
  value: faker.commerce.price(),
};
