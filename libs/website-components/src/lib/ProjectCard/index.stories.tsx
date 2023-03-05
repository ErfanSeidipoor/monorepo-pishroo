import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { ProjectCard } from ".";

export default {
  component: ProjectCard,
  title: "ProjectCard",
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => {
  return <ProjectCard {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: faker.image.food(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
};
