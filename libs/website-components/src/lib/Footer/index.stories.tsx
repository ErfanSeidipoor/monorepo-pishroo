import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer } from ".";

export default {
  component: Footer,
  title: "Footer",
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      name: "Product",
      href: "#",
      selected: true,
    },
    {
      name: "Project",
      href: "#",
    },
    {
      name: "Partners",
      href: "#",
    },
    {
      name: "Certificates",
      href: "#",
    },
    {
      name: "About Us",
      href: "#",
    },
    {
      name: "Contact Us",
      href: "#",
    },
  ],
};
