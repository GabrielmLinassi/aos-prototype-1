import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Props } from "./Props";
import { SearchBar } from "./SearchBar";
import { Properties } from "./Properties";

interface FilterablePropertiesProps {
  products: Props[];
}

const FilterableProperties = ({ products }: FilterablePropertiesProps) => {
  const classes = useStyles();
  const [filterText, setFilterText] = useState("");

  return (
    <div className={classes.wrap}>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <Properties properties={products} filterText={filterText} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  wrap: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
  },
}));

export { FilterableProperties };
