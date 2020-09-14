import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

interface myinterface {
  location: string;
  type: string;
  size: string;
}

type MyTextFieldProps = {
  filter: myinterface;
  setFilter: (filter: myinterface) => void;
};

const TextFieldUseStyles = makeStyles(() => ({
  root: {
    borderRadius: 12,
    backgroundColor: "#fff",
  },

  input: {
    fontSize: 16,
    fontWeight: 600,

    "&::placeholder": {
      fontWeight: 300,
    },

    "&:hover, &:focus": {
      borderRadius: "12px",
      boxShadow: "inset 0 0 0 1px",
      backgroundColor: "#fff",
    },
  },

  textfield: {
    borderLeft: "solid 1px",

    "&:first-child": {
      borderLeft: "none",
    },

    "&:hover + &, & + &:hover": {
      borderLeft: "none",
    },

    "&:focus + &, & + &:focus": {
      borderLeft: "none",
    },

    "&:visited + &, & + &:visited": {
      borderLeft: "none",
    },

    "&:active + &, & + &:active": {
      borderLeft: "none",
    },
  },
}));

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

  label: {
    color: "#222222",
    fontSize: 12,
    fontWeight: 800,
    lineHeight: 1.5,
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

const MyTextField = ({ filter, setFilter }: MyTextFieldProps) => {
  const textfieldStyles = TextFieldUseStyles();
  const classes = useStyles();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <>
      <TextField
        label="LOCATION"
        placeholder="Where are you going?"
        name="location"
        InputLabelProps={{
          shrink: true,
          className: classes.label,
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: textfieldStyles.root,
            input: textfieldStyles.input,
          },
        }}
        className={textfieldStyles.textfield}
        variant="filled"
        value={filter.location}
        onChange={handleFilterChange}
      />

      <TextField
        label="TYPE"
        placeholder="Which type of office?"
        name="type"
        InputLabelProps={{
          shrink: true,
          className: classes.label,
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: textfieldStyles.root,
            input: textfieldStyles.input,
          },
        }}
        className={textfieldStyles.textfield}
        variant="filled"
        value={filter.type}
        onChange={handleFilterChange}
      />

      <TextField
        label="SIZE"
        placeholder="What is the team size?"
        name="size"
        InputLabelProps={{
          shrink: true,
          className: classes.label,
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: textfieldStyles.root,
            input: textfieldStyles.input,
          },
        }}
        className={textfieldStyles.textfield}
        variant="filled"
        value={filter.size}
        onChange={handleFilterChange}
      />
    </>
  );
};

export { MyTextField };
