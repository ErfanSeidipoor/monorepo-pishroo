import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { SaleExpert } from ".";

export default {
  component: SaleExpert,
  title: "SaleExpert",
} as ComponentMeta<typeof SaleExpert>;

const Template: ComponentStory<typeof SaleExpert> = (args) => {
  return <SaleExpert {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: faker.image.avatar(),
  name: "Erfan Seidipoor",
  phone: "+989366996916",
  email: "erfan.seidipoor@gmail.com",
  provinces: [
    "Tehran",
    "Markazi",
    "iLam",
    "Kerman",
    "Qom",
    "Zanjan",
    "Ahvaz",
    "Cia",
  ],
};
