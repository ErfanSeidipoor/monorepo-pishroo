import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { AutoComplete } from ".";

export default {
  component: AutoComplete,
  title: "AutoComplete",
} as ComponentMeta<typeof AutoComplete>;

type Item = { title: string; year: number };
const getLabel = (item: Item) => item.title;
const getValue = (item: Item) => item.title;

const items: Item[] = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

const Template: ComponentStory<typeof AutoComplete<Item>> = (args) => {
  const [filteredItem, setFilteredItem] = useState<Item[]>(items);
  const [selectedItem, setSelectedItem] = useState<Item>();

  return (
    <div style={{ padding: "30px" }}>
      <AutoComplete
        {...args}
        onChangeInput={async (inputvalue) => {
          return new Promise((resolve) =>
            setTimeout(() => {
              setFilteredItem(
                items.filter(
                  (item) =>
                    getValue(item)
                      .toLowerCase()
                      .indexOf(inputvalue.toLowerCase()) !== -1
                )
              );
              resolve();
            }, 500)
          );
        }}
        selectedItem={selectedItem}
        onSelectItem={(selectedItem) => setSelectedItem(selectedItem)}
        items={filteredItem}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  items,
  getLabel,
  getValue,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items,
  getLabel,
  getValue,
  disabled: true,
};
export const OnClick = Template.bind({});
OnClick.args = {
  items,
  getLabel,
  getValue,
  onClick: () => "",
};
