import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { SocialMedia } from ".";

export default {
  component: SocialMedia,
  title: "SocialMedia",
} as ComponentMeta<typeof SocialMedia>;

const Template: ComponentStory<typeof SocialMedia> = (args) => {
  return <SocialMedia {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  email: faker.image.imageUrl(),
  instagram: faker.image.imageUrl(),
  telegram: "test",
  whatsapp: faker.image.imageUrl(),
};
