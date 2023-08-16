import React from "react";
import MenuWithItem from "./components/Menu";

const CompoundComponent: React.FC = () => {
  return (
    <div>
      <h2>Compound Components - Pattern</h2>
      <MenuWithItem>
        <MenuWithItem.Item title="Item 1" />
        <MenuWithItem.Item title="Item 2" />
        <MenuWithItem.Item title="Item 3" />
      </MenuWithItem>
    </div>
  );
};

export default CompoundComponent;
