import { createContext, useContext, useEffect, useState } from "react";
import { Book } from "../types/data";

const data: Book[] = [
  { id: 1, title: "Learn React", reading: false },
  { id: 2, title: "Learn TypeScript", reading: false },
  { id: 3, title: "Learn GraphQL", reading: false },
  { id: 4, title: "Learn Node", reading: false },
];

export type ExampleContextType = {
  items: Book[];
  onCompleted: (id: number) => void;
};

export const ExampleContext = createContext<ExampleContextType | null>(null);

export const ExampleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setItems] = useState<Book[]>([]);

  useEffect(() => setItems(data), []);

  const onCompleted = (id: number) => {
    const newItems = items.map((item) => {
      if (item?.id === id) {
        return { ...item, reading: true };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <ExampleContext.Provider value={{ items, onCompleted }}>
      {children}
    </ExampleContext.Provider>
  );
};

export const useExampleContext = () => {
  const context = useContext(ExampleContext);
  if (!context) {
    throw new Error("useExampleContext must be used within a ExampleProvider");
  }
  return context;
};
