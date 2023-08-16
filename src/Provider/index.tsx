import React from "react";
import BooksView from "./components/BooksView";
import { ExampleContextProvider } from "./context/ExampleContext";

const Provider: React.FC = () => {
  return (
    <div>
      <ExampleContextProvider>
        <h2>Provider - Pattern</h2>
        <BooksView />
      </ExampleContextProvider>
    </div>
  );
};

export default Provider;
