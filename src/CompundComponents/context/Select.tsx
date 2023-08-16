import { createContext, useContext, useState } from "react";
import { SelectContextType } from "../types/selectContext";

const SelectContext = createContext<SelectContextType | null>(null);

export const SelectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState("");

  const onSelect = (value: string) => {
    setSelected(value);
  };

  const showSelected = () => {
    return selected !== "" ? `Selected: ${selected}` : "Select a value";
  };

  return (
    <SelectContext.Provider
      value={{
        selected,
        onSelect,
        showSelected,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};
