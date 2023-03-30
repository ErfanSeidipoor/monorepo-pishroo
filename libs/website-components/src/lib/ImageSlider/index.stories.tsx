import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ImageSlider } from ".";

export default {
  component: ImageSlider,
  title: "ImageSlider",
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => {
  return <ImageSlider {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      src: faker.image.food(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.business(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.city(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.animals(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.fashion(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.food(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.business(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.city(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.animals(),
      alt: faker.commerce.productName(),
    },
    {
      src: faker.image.fashion(),
      alt: faker.commerce.productName(),
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const One = Template.bind({});
One.args = {
  items: [
    {
      src: faker.image.animals(),
      alt: faker.commerce.productName(),
    },
  ],
};
