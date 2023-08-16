import React, { useEffect, useMemo, useState } from "react";
import { Todo } from "../HOC/components/ExampleTodo";
import TodoList from "./components/TodoList";
import { Data } from "./types/data";

const data = [
  { id: 1, name: "Todo 1", completed: false },
  { id: 2, name: "Todo 2", completed: false },
  { id: 3, name: "Todo 3", completed: true },
];

interface TodoContainerProps {}

const TodoContainer: React.FC<TodoContainerProps> = () => {
  const [items, setItems] = useState<Data[]>([]);

  useEffect(() => {
    setItems(data);
  }, []);

  function onCompleted(id: number) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  }

  const itemsCompleted = useMemo(() => {
    return items.filter((item) => item.completed).length;
  }, [items]);

  return (
    <>
      <h2>Presentation & Container - Pattern</h2>
      <TodoList
        items={items}
        onCompleted={onCompleted}
        itemsCompleted={itemsCompleted}
        totalItems={items.length}
      />
    </>
  );
};

export default TodoContainer;
