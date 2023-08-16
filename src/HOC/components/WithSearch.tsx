import React, { useState } from "react";
import { ComponentsType, Item } from "../types/items";

interface WithSearchProps {
  WrappedComponent: React.FC<ComponentsType>;
  dataset: Item[];
}

const WithSearch: React.FC<WithSearchProps> = ({
  WrappedComponent,
  dataset,
}) => {
  const [query, setQuery] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
      />
      <WrappedComponent
        query={query}
        dataset={dataset}
      />
    </div>
  );
};

export default WithSearch;
