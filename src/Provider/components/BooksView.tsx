import React from "react";
import { useExampleContext } from "../context/ExampleContext";
import BooksList from "./BooksList";

const BooksView: React.FC = () => {
  const { items } = useExampleContext();

  return (
    <div>
      <BooksList books={items} />
    </div>
  );
};

export default BooksView;
