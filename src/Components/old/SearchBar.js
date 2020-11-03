import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Button } from "@material-ui/core";

/* --- */
import { properties, officeTypes } from "../assets/PropertiesList";

const SearchBar = () => (
  <div style={{ display: "flex", margin: 15, justifyContent: "center" }}>
    <Autocomplete
      options={properties}
      getOptionLabel={(option) => option.city}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Location" variant="outlined" />
      )}
    />
    <Autocomplete
      options={officeTypes}
      style={{ width: 300, marginLeft: 3 }}
      renderInput={(params) => (
        <TextField {...params} label="Office Type" variant="outlined" />
      )}
    />
    <Button variant="contained" style={{ marginLeft: 3 }} color="primary">
      Search
    </Button>
  </div>
);

export { SearchBar };
