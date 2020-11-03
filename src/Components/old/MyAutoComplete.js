import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const MyAutoComplete = ({
  type,
  setType,
  officeTypes,
  location,
  setLocation,
  locations,
}) => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", width: "100%", margin: "100px 0" }}>
        <Autocomplete
          id="office-type"
          value={type}
          onChange={(event, newValue) => {
            setType(newValue);
          }}
          options={officeTypes}
          style={{ width: "30%" }}
          renderInput={(params) => (
            <TextField {...params} label="Office Type" variant="outlined" />
          )}
        />
        <Autocomplete
          id="office-location"
          value={location}
          onChange={(event, newValue) => {
            setLocation(newValue);
          }}
          options={locations}
          style={{ width: "70%", marginLeft: 15 }}
          renderInput={(params) => (
            <TextField {...params} label="Location" variant="outlined" />
          )}
        />
        <Button variant="contained" style={{ marginLeft: 15 }}>
          Search
        </Button>
      </div>
    </div>
  );
};

export { MyAutoComplete };
