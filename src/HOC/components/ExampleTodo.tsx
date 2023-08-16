import React from "react";
import { filterItems } from "../utils/filterItems";
import { ComponentsType, Todo as TodoType } from "../types/items";

export function TodoList({ query, dataset }: ComponentsType) {
  const items = filterItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <Todo
          key={product.id}
          title={product.title}
          completed={isTodo(product) ? product.completed : false}
        />
      ))}
    </div>
  );
}

export function Todo({
  title,
  completed,
}: {
  title: string;
  completed: boolean;
}) {
  function handleChange() {
    // ...
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleChange}
      />
      {title}
    </div>
  );
}

function isTodo(item: any): item is TodoType {
  return "completed" in item;
}
