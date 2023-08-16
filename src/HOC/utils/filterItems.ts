import { Item } from "../types/items";

export function filterItems(query: string, items: Item[]): Item[] {
  if (query === "") {
    return items;
  }
  return items.filter((item: Item) => {
    const { title } = item;
    return title.toLowerCase().includes(query.toLowerCase());
  });
}
