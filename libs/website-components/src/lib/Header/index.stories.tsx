import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from ".";
import {
  AboutUsIcon,
  CertificatesIcon,
  PartnersIcon,
  PhoneIcon,
  ProductIcon,
  ProjectIcon,
} from "./icons";

export default {
  component: Header,
  title: "Header",
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  phone: "21129",
  links: [
    {
      name: "Product",
      href: "#",
      selected: true,
      icon: <ProductIcon />,
    },
    {
      name: "Project",
      href: "#",
      icon: <ProjectIcon />,
    },
    {
      name: "Partners",
      href: "#",
      icon: <PartnersIcon />,
    },
    {
      name: "Certificates",
      href: "#",
      icon: <CertificatesIcon />,
    },
    {
      name: "About Us",
      href: "#",
      icon: <AboutUsIcon />,
    },
    {
      name: "Contact Us",
      href: "#",
      icon: <PhoneIcon />,
    },
  ],
};
