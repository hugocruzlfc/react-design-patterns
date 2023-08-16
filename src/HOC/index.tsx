import { ProductList } from "./components/ExampleProduct";
import { TodoList } from "./components/ExampleTodo";
import WithSearch from "./components/WithSearch";

const products = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

const todos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: false },
  { id: 3, title: "Todo 3", completed: true },
];

export default function HOC() {
  const ProductListWithFilter = WithSearch({
    WrappedComponent: ProductList,
    dataset: products,
  });
  const TodoListWithFilter = WithSearch({
    WrappedComponent: TodoList,
    dataset: todos,
  });

  return (
    <div>
      <h2>HOC - Pattern</h2>
      {ProductListWithFilter}
      {TodoListWithFilter}
    </div>
  );
}
