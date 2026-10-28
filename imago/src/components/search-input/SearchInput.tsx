import type { ChangeEvent } from "react";
import styles from "./SearchInput.module.css";

export const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  value,
}) => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      id="avatar"
      name="avatar"
      accept="image/*"
      onChange={onChange}
      value={value}
      placeholder="Search Images..."
    />
  );
};

interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  value: string;
}
