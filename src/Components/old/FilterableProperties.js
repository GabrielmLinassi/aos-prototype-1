import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TProperties } from "../types/TProperties";
import { SearchBar } from "./SearchBar";
import { Properties } from "./Properties2";

import { MyAutoComplete } from "./MyAutoComplete";

const FilterableProperties = ({
  type,
  setType,
  officeTypes,
  location,
  setLocation,
  locations,
}) => {
  // const classes = useStyles();

  // const [filter, setFilter] = useState<myinterface>({
  //   location: "",
  //   type: "",
  //   size: "",
  // });

  // const officeTypes = [
  //   "Office Space",
  //   "Coworking",
  //   "Virtual Office",
  //   "Meeting Rooms",
  // ];

  // const locations = ["new york", "boston"];

  // const [type, setType] = useState(officeTypes[0]);
  // const [location, setLocation] = useState("");

  return (
    <>
      <MyAutoComplete
        type={type}
        setType={setType}
        officeTypes={officeTypes}
        location={location}
        setLocation={setLocation}
        locations={locations}
      />
      {/* <Properties properties={products} type={type} location={location} /> */}
    </>
    /*<div className={classes.wrap}>
      <SearchBar filter={filter} setFilter={setFilter} />
      <Properties properties={products} filter={filter} />
    </div>*/
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
