import React from "react";

interface TodoItemProps {
  id: number;
  completed: boolean;
  name: string;
  onCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  completed,
  name,
  onCompleted,
}) => {
  return (
    <div>
      {name}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onCompleted(id)}
      />
    </div>
  );
};

export default TodoItem;
