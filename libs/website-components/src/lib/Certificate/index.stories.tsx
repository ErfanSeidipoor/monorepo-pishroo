import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Certificate } from ".";

export default {
  component: Certificate,
  title: "Certificate",
} as ComponentMeta<typeof Certificate>;

const Template: ComponentStory<typeof Certificate> = (args) => {
  return <Certificate {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: faker.image.imageUrl(),
  title: faker.commerce.productName(),
};
