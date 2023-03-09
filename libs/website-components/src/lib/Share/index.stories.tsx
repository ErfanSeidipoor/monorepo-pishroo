import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Share } from ".";

export default {
  component: Share,
  title: "Share",
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => {
  return <Share {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  url: faker.image.imageUrl(),
};
