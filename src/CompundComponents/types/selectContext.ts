export type SelectContextType = {
  selected: string;
  onSelect: (value: string) => void;
  showSelected: () => string;
};
