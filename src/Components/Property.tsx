import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import { Props } from "./Props";

interface IPropertyProps {
  property: Props;
}

const Card = ({
  property: { address, city, state, image, dailyPrice },
}: IPropertyProps) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.ImgWrap}>
        <img
          className={classes.Img}
          src={image}
          alt={`Office space at ${city}`}
        />
      </div>
      <div className={classes.Details}>
        <p>
          {state}, {city} - {address}
          From <strong>${dailyPrice}</strong> p/day
        </p>
        <Button variant="contained">inquire</Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  ImgWrap: {
    height: "350px",
  },

  Img: {
    width: "100%",
    height: "100%",
  },

  Details: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
}));

export { Card };
