import React from "react";
import { Book } from "../types/data";
import BookItem from "./BookItem";

interface BooksListProps {
  books: Book[];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <BookItem
          key={book.id}
          {...book}
        />
      ))}
    </div>
  );
};

export default BooksList;
