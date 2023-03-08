import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ContactCard } from ".";

export default {
  component: ContactCard,
  title: "ContactCard",
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = (args) => {
  return <ContactCard {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: faker.image.food(),
  description: faker.commerce.productName() + faker.commerce.productName(),
  phone: faker.phone.number(),
};
