import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { MultipleSelect } from ".";

export default {
  component: MultipleSelect,
  title: "MultipleSelect",
} as ComponentMeta<typeof MultipleSelect>;

type Item = { value: number; label: string };
const getLabel = (item: Item) => item.label;
const getValue = (item: Item) => item.value;

const items: Item[] = [
  { value: 1, label: "one" },
  { value: 2, label: "two" },
  { value: 3, label: "three" },
  { value: 4, label: "four" },
  { value: 5, label: "five" },
];

const Template: ComponentStory<typeof MultipleSelect<Item>> = (args) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  return (
    <MultipleSelect
      selectedItems={selectedItems}
      {...args}
      onSelectItems={(items) => {
        setSelectedItems(items);
      }}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "primary",
  labelId: "demo-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "secondary",
  labelId: "demo-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "full-width",
  labelId: "full-width-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "disabled",
  labelId: "disabled-simple-select-readonly-label",
  items,
  getLabel,
  getValue,
  disabled: true,
  selectedItems: [
    { value: 1, label: "one" },
    { value: 2, label: "two" },
  ],
};

/* ---------------------------------- enum ---------------------------------- */

export enum OptionsEnum {
  option1 = "option1",
  option2 = "option2",
  option3 = "option3",
  option4 = "option4",
  option5 = "option5",
  option6 = "option6",
  option7 = "option7",
}

const TemplateEnum: ComponentStory<typeof MultipleSelect<OptionsEnum>> = (
  args
) => {
  const [selectedItems, setSelectedItems] = useState<OptionsEnum[]>([]);

  return (
    <MultipleSelect
      selectedItems={selectedItems}
      {...args}
      onSelectItems={(items) => {
        setSelectedItems(items);
      }}
    />
  );
};

export const Enum = TemplateEnum.bind({});
Enum.args = {
  label: "disabled",
  labelId: "disabled-simple-select-readonly-label",
  getLabel: (item) => item.toString(),
  getValue: (item) =>
    Object.values(OptionsEnum).findIndex((item_) => item === item_),
  items: Object.values(OptionsEnum),
};
