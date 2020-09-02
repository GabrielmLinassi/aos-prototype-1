import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

type SearchBarProps = {
  filterText: string;
  setFilterText: (text: string) => void;
};

const SearchBar = ({ filterText, setFilterText }: SearchBarProps) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <form>
      <input
        className={classes.searchbar}
        type="text"
        value={filterText}
        placeholder="Search..."
        ref={inputRef}
        onChange={handleFilterTextChange}
        onMouseEnter={() => {
          inputRef.current?.focus();
        }}
      />
    </form>
  );
};

const useStyles = makeStyles(() => ({
  searchbar: {
    padding: "12px 20px",
    margin: "8px 0",
    border: "solid #ccc 1px",
    borderRadius: "4px",
  },
}));

export { SearchBar };
