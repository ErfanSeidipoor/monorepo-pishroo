import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Filter } from ".";

export default {
  component: Filter,
  title: "Filter",
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => {
  return <Filter {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      label: faker.commerce.product(),
      onClick: () => ({}),
      selected: false,
    },
    {
      label: faker.commerce.product(),
      onClick: () => ({}),
      selected: true,
    },
    {
      label: faker.commerce.product(),
      onClick: () => ({}),
      selected: false,
    },
    {
      label: faker.commerce.product(),
      onClick: () => ({}),
      selected: false,
    },
  ],
};
