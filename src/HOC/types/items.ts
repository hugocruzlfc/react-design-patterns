export type Product = {
  title: string;
  id: number;
};

export type Todo = {
  title: string;
  id: number;
  completed: boolean;
};

export type Item = Product | Todo;

export type ComponentsType = {
  query: string;
  dataset: Item[];
};
