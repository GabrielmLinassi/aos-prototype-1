import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import { TProperties } from "../types/TProperties";

interface IPropertyProps {
  property: TProperties;
}

const OfficeTypesNames = {
  virtual: "Virtual",
  coworking: "Coworking",
  "private office": "Private Office",
  "meeting rooms": "Meeting Rooms",
};

const OfficeSizesNames = {
  individual: "Individual",
  small: "Small",
  medium: "Medium",
  large: "Large",
};

const Card = ({
  property: { address, city, state, image, dailyPrice, type, size },
}: IPropertyProps) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className="cardHeader">
        <img className="Img" src={image} alt={`Office space at ${city}`} />
      </div>
      <div className="cardContent">
        <div>
          <div className="cardDescriptionWrap">
            <div className="cardDescription">
              {state}, {city} - {address}
            </div>
            <div className="cardDescription">
              <span>
                From <strong>${dailyPrice}</strong> p/day
              </span>
              <div className="tags">
                <span className="tag">{OfficeTypesNames[type]}</span>
                <span className="tag">{OfficeSizesNames[size]}</span>
              </div>
            </div>
            <div className="cardDescription"></div>
          </div>
        </div>
        <div className="cardActions">
          <Button variant="contained">inquire</Button>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: "2px solid #e7e7e7",
    borderRadius: "4px",

    "& .Img": {
      width: "100%",
      height: "100%",
    },

    "& .cardHeader": {
      height: "350px",
    },

    "& .cardContent": {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      padding: ".5rem",
    },

    "& .cardDescription": {
      margin: 5,
      "& .tags": {
        margin: "10px 0",
      },
      "& .tag": {
        backgroundColor: "#ddd",
        margin: 2,
        padding: "3px 10px",
        borderRadius: 30,
        color: "#484848",
      },
    },

    "& .cardDescriptionWrap": {
      display: "flex",
      flexDirection: "column",
    },

    "& .cardActions": {
      alignSelf: "flex-start",
      margin: 5,
      "& button": {
        color: "#000",
      },
    },
  },
}));

export { Card };
