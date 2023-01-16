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
