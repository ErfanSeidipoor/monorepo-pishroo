import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { EmailInput } from ".";

export default {
  component: EmailInput,
  title: "EmailInput",
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => {
  const [email, setEmail] = useState("");
  return <EmailInput value={email} onChange={setEmail} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
