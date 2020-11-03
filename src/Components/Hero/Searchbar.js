import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  makeStyles,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Divider,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    width: "100%",
    marginTop: 0,
  },
  textfield: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#77bc1f", //green
        borderWidth: 1,
      },
    },
  },
  input: {
    height: 30,
    "&::placeholder": {
      color: "#000",
    },
  },
  button: {
    width: 200,
    height: 45,
    textTransform: "none",
    backgroundColor: "#ffa300",
    color: "#fff",
    fontWeight: "900",
    "&:hover": {
      backgroundColor: "#db8c00",
    },
  },
  searchIcon: {
    fontSize: 35,
    color: "rgba(0, 0, 0, 0.23)",
  },
}));

const SearchBar = ({ properties, checkList }) => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOpen = () => {
    setOpen(inputValue.length > 0);
  };

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
    setOpen(newValue.length > 0);
  };

  const search = (inputValue) => {
    const list = checkList
      .filter((item) => item.checked === true)
      .map((item) => item.value.split(" ").join("+"))
      .join("&");

    const link = `/lease/${list ? `${list}` : "all"}/${inputValue
      .split(" ")
      .join("+")}`;

    history.push(link.toLowerCase());
  };

  const handleClick = () => {
    search(inputValue);
  };

  return (
    <Autocomplete
      disableClearable
      forcePopupIcon={false}
      open={open}
      onChange={(e, newValue, reason) => {
        if (reason === "select-option") {
          search(newValue.city);
        }
      }}
      onOpen={handleOpen}
      onClose={() => setOpen(false)}
      className={classes.autocomplete}
      id="combo-box-demo"
      freeSolo
      autoSelect
      options={properties}
      getOptionLabel={(option) => (option.city ? option.city : option)}
      onInputChange={handleInputChange}
      /*renderOption={(option, { selected }) => (
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <div style={{ fontWeight: "700" }}>Area</div>
                {option.fullAddress}
              </div>
              <div>
                <div style={{ fontWeight: "700", marginTop: 15 }}>
                  Addresses
                </div>
                <div>
                  <div>Linassi Tower Business Center, Central Park, 5th Av</div>
                  <div>Linassi Tower Business Center, Central Park, 5th Av</div>
                  <div>Linassi Tower Business Center, Central Park, 5th Av</div>
                </div>
              </div>
            </div>
            <div style={{}}>63 leasers</div>
          </div>
          <Divider />
        </div>
      )}*/
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Enter city, area, street"
          className={classes.textfield}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon className={classes.searchIcon} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ margin: 0, padding: 0 }}>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleClick}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
            classes: {
              input: classes.input,
            },
          }}
        />
      )}
    />
  );
};

export { SearchBar };
