import { ComponentMeta, ComponentStory } from "@storybook/react";
import WebsiteComponents from "./website-components";

export default {
  component: WebsiteComponents,
  title: "WebsiteComponents",
} as ComponentMeta<typeof WebsiteComponents>;

const Template: ComponentStory<typeof WebsiteComponents> = (args) => {
  return <WebsiteComponents {...args} />;
};

export const Loading = Template.bind({});
Loading.args = {};
