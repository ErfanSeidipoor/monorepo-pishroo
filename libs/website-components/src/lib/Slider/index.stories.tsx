import { ComponentMeta, ComponentStory } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { Slider } from ".";

export default {
  component: Slider,
  title: "Slider",
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  return <Slider {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      key: "1",
      width: 100,
      node: <h1>1</h1>,
    },
    {
      key: "2",
      width: 200,
      node: <h1>2</h1>,
    },
    {
      key: "3",
      width: 50,
      node: <h1>3</h1>,
    },
    {
      key: "4",
      width: 350,
      node: <h1>4</h1>,
    },
    {
      key: "5",
      width: 100,
      node: <h1>5</h1>,
    },
    {
      key: "6",
      width: 190,
      node: <h1>6</h1>,
    },
    {
      key: "7",
      width: 100,
      node: <h1>7</h1>,
    },
    {
      key: "8",
      width: 130,
      node: <h1>8</h1>,
    },
  ],
};
