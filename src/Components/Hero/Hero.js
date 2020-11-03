import React, { useEffect, useState } from "react";

import {
  makeStyles,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

import { properties, types } from "./../../assets/PropertiesList";
import imgHero from "./../../assets/hero.png";
import { SearchBar } from "./Searchbar";
import { SearchFilters } from "./SearchFilters";

const useStyles = makeStyles((theme) => ({
  wrap: {
    backgroundColor: "#f6f6f6",
  },
  root: {
    width: 1200,
    margin: "0 auto",
    paddingTop: 75,
    height: 500,
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    width: "70%",

    "& h1": {
      fontSize: 35,
      fontWeight: "bold",
    },
    "& p": {
      marginTop: 20,
      width: "80%",
      fontSize: 25,
    },
  },
  imgWrap: {
    width: "30%",

    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  box: {
    backgroundColor: "#fff",
    marginTop: "-150px",
    margin: "0 auto",
    height: 230,
    width: 1200,
    borderRadius: 8,
    boxShadow: "0 0 14px 0 rgba(222,231,231,.55)",
    padding: 30,
    "& > h5": {
      fontWeight: 700,
      marginBottom: 15,
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  const [checkList, setCheckList] = useState(() =>
    types.map((type) => ({ key: type.key, value: type.value, checked: false }))
  );

  const handleCheckList = (e) => {
    const res = [...checkList].map((item) => {
      return item.key === e.target.name
        ? { ...item, checked: e.target.checked }
        : item;
    });
    setCheckList(res);
  };

  return (
    <>
      <div className={classes.wrap}>
        <div className={classes.root}>
          <div className={classes.content}>
            <h1>
              Commercial Space for Rent all over the World | Find Top options
            </h1>
            <p>
              More than 40,801 Business centers and coworking spaces in top
              locations
            </p>
          </div>
          <div className={classes.imgWrap}>
            <img src={imgHero} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className={classes.box}>
        <h5>Find Premises</h5>
        <SearchFilters
          types={types}
          checkList={checkList}
          handleCheckList={handleCheckList}
        />
        <SearchBar properties={properties} checkList={checkList} />
      </div>
    </>
  );
};

export { Hero };
