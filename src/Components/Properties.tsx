import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Card } from "./Property";
import { Props } from "./Props";

interface IPropertiesProps {
  properties: Props[];
  filterText: string;
}

const Properties = ({ properties, filterText }: IPropertiesProps) => {
  const classes = useStyles();
  const cards: Array<ReactElement> = [];

  properties.forEach((property) => {
    if (property.city.indexOf(filterText) === -1) {
      return;
    }

    cards.push(<Card property={property} key={property.id} />);
  });

  return <div className={classes.box}>{cards}</div>;
};

const useStyles = makeStyles(() => ({
  box: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "3em 1em",
  },
}));

export { Properties };
