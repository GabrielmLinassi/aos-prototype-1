import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Card } from "./Property";

const Properties = ({ properties, type, location }) => {
  const classes = useStyles();
  const cards = [];

  properties.forEach((property) => {
    if (property.city.toLowerCase().indexOf(location.toLowerCase()) === -1) {
      return;
    }

    if (property.type.toLowerCase().indexOf(type.toLowerCase()) === -1) {
      return;
    }

    cards.push(<Card property={property} key={property.id} />);
  });

  return <div className={classes.box}>{cards}</div>;
};

const useStyles = makeStyles(() => ({
  box: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "3em 1em",
  },
}));

export { Properties };
