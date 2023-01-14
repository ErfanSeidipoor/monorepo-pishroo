import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table, ITableColumn } from ".";

type Item = { name: string; id: string; lastname: string };

export default {
  component: Table,
  title: "Table",
} as ComponentMeta<typeof Table<Item>>;

const Template: ComponentStory<typeof Table<Item>> = (args) => (
  <Table {...args} />
);

export const Primary = Template.bind({});

const rows: Item[] = [
  { id: "123", name: "Erfan", lastname: "seidipoor" },
  { id: "456", name: "Amin", lastname: "seidipoor" },
  { id: "678", name: "Alireza", lastname: "seidipoor" },
  { id: "911", name: "Saman", lastname: "seidipoor" },
];

const columns: ITableColumn<Item>[] = [
  { name: "id", cell: (item) => <p>{item.id}</p>, label: "id" },
  { name: "name", cell: (item) => <p>{item.name}</p>, label: "name" },
  {
    name: "lastname",
    cell: (item) => <p>{item.lastname}</p>,
    label: "lastname",
  },
];

Primary.args = {
  rows,
  columns,
};
