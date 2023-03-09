import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Review } from ".";

export default {
  component: Review,
  title: "Review",
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => {
  return <Review {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: faker.image.avatar(),
  reviewer: faker.name.fullName(),
  text: faker.commerce.productDescription(),
};
