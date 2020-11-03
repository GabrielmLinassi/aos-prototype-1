import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  myList: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  searchButton: {
    backgroundColor: "#e52500",
    fontWeight: 600,
    padding: "10px 25px",
    marginLeft: 30,
    "& .MuiSvgIcon-root": {
      marginLeft: 5,
    },
  },
}));

const ListItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.myList}>
      <Button color="inherit">Office Space</Button>
      <Button color="inherit">Coworking</Button>
      <Button color="inherit">Virtual Office</Button>
      <Button color="inherit" className={classes.searchButton}>
        FIND WORKSPACE
        <SearchIcon />
      </Button>
    </div>
  );
};

export { ListItems as MyListItems };
