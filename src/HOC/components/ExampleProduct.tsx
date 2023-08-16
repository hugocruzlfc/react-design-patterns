import React from "react";
import { filterItems } from "../utils/filterItems";
import { ComponentsType } from "../types/items";

export function ProductList({ query, dataset }: ComponentsType) {
  const items = filterItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
        />
      ))}
    </div>
  );
}

export function ProductItem({ title }: { title: string }) {
  return <div>{title}</div>;
}
