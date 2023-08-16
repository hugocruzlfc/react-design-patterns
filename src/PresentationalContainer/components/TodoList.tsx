import React from "react";

import { Data } from "../types/data";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: Data[];
  onCompleted: (id: number) => void;
  itemsCompleted: number;
  totalItems: number;
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  onCompleted,
  itemsCompleted,
  totalItems,
}) => {
  return (
    <div>
      {itemsCompleted} of {totalItems} completed
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
