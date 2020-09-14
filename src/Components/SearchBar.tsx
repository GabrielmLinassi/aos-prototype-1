import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { MyTextField } from "./MyTextField";

interface myinterface {
  location: string;
  type: string;
  size: string;
}

type SearchBarProps = {
  filter: myinterface;
  setFilter: (filter: myinterface) => void;
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 120px",

    border: "1px solid #B0B0B0",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 12px",
    borderRadius: 12,
    color: "#222222",
    margin: "50px 0",

    "& label.Mui-focused": {
      color: "#222222",
    },
  },

  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: 6,
    textTransform: "capitalize",
  },
}));

function CustomizedInputs({ filter, setFilter }: SearchBarProps) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <MyTextField filter={filter} setFilter={setFilter} />
      <Button variant="contained" color="primary" className={classes.button}>
        search
      </Button>
    </form>
  );
}

export { CustomizedInputs as SearchBar };
