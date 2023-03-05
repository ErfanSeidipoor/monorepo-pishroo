import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ProductCard } from ".";

export default {
  component: ProductCard,
  title: "ProductCard",
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => {
  return <ProductCard {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: faker.image.food(),
  name: faker.commerce.productName(),
};
