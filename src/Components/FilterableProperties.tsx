import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TProperties } from "../types/TProperties";
import { SearchBar } from "./SearchBar";
import { Properties } from "./Properties";

interface FilterablePropertiesProps {
  products: TProperties[];
}

const FilterableProperties = ({ products }: FilterablePropertiesProps) => {
  const classes = useStyles();

  interface myinterface {
    location: string;
    type: string;
    size: string;
  }

  const [filter, setFilter] = useState<myinterface>({
    location: "",
    type: "",
    size: "",
  });

  return (
    <div className={classes.wrap}>
      <SearchBar filter={filter} setFilter={setFilter} />
      <Properties properties={products} filter={filter} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  wrap: {
    padding: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
}));

export { FilterableProperties };
