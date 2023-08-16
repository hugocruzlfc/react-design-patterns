import React from "react";
import { SelectContextProvider, useSelectContext } from "../context/Select";

interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <SelectContextProvider>
      <MenuContainer>{children}</MenuContainer>
    </SelectContextProvider>
  );
};

interface MenuContainerProps {
  children: React.ReactNode;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ children }) => {
  const { showSelected } = useSelectContext();
  return (
    <div>
      <div>{showSelected()}</div>
      <ul>{children}</ul>
    </div>
  );
};

interface MenuItemProps {
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  const { onSelect } = useSelectContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onSelect(title);
  };
  return (
    <li>
      <a
        href="#"
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  );
};

// Creamos un nuevo componente que envuelve tanto Menu como MenuItem
const MenuWithItem: React.FC<MenuProps> & { Item: React.FC<MenuItemProps> } = ({
  children,
}) => {
  return <Menu>{children}</Menu>;
};
MenuWithItem.Item = MenuItem;

export default MenuWithItem;
