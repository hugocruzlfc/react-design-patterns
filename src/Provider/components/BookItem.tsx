import React from "react";
import { useExampleContext } from "../context/ExampleContext";

interface BookItemProps {
  id: number;
  title: string;
  reading: boolean;
}

const BookItem: React.FC<BookItemProps> = ({ id, title, reading }) => {
  const { onCompleted } = useExampleContext();
  return (
    <div>
      <input
        type="checkbox"
        checked={reading}
        onChange={() => onCompleted(id)}
      />
      {title}
    </div>
  );
};

export default BookItem;
