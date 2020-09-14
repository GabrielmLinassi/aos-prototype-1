import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Card } from "./Property";
import { TProperties } from "../types/TProperties";

interface myinterface {
  location: string;
  type: string;
  size: string;
}

interface IPropertiesProps {
  properties: TProperties[];
  filter: myinterface;
}

const Properties = ({ properties, filter }: IPropertiesProps) => {
  const classes = useStyles();
  const cards: Array<ReactElement> = [];

  properties.forEach((property) => {
    if (
      property.city.toLowerCase().indexOf(filter.location.toLowerCase()) === -1
    ) {
      return;
    }

    if (property.type.toLowerCase().indexOf(filter.type.toLowerCase()) === -1) {
      return;
    }

    if (property.size.toLowerCase().indexOf(filter.size.toLowerCase()) === -1) {
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
