import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumbs } from ".";

export default {
  component: Breadcrumbs,
  title: "Breadcrumbs",
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      label: "MUI",
    },
    {
      label: "Core",
    },
    {
      label: "Breadcrumbs",
      color: "primary",
    },
  ],
};
