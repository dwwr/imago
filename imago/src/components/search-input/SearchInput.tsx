import type { ChangeEvent } from "react";

export const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  value,
}) => {
  return (
    <input
      type="text"
      id="avatar"
      name="avatar"
      accept="image/*"
      onChange={onChange}
      value={value}
    />
  );
};

interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  value: string;
}
