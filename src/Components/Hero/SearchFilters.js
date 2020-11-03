import React, { useState } from "react";
import {
  makeStyles,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checked: {
    color: "#77bc1f",
  },
}));

const SearchFilters = ({ types, checkList, handleCheckList }) => {
  const classes = useStyles();

  return (
    <FormGroup row>
      {types.map((type) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                key={type.key}
                checked={
                  checkList.find((item) => item.key === type.key).checked
                }
                onChange={handleCheckList}
                classes={{ checked: classes.checked }}
                name={type.key}
                color="default"
              />
            }
            label={type.value}
          />
        );
      })}
    </FormGroup>
  );
};

export { SearchFilters };
