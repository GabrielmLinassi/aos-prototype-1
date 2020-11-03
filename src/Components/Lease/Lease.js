import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";

import {
  Box,
  Breadcrumbs,
  ButtonBase,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";

/* ---- */
import hero from "src/assets/property.jpg";
import { properties as propertyList } from "./../../assets/PropertiesList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    flexGrow: 1,
  },
  paper: {
    // paddingRight: theme.spacing(2),
    // maxWidth: 800,
  },
  image: {
    width: 350,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Lease = () => {
  const classes = useStyles();

  let { type, city } = useParams();
  const [properties, setProperties] = useState([]);

  // replace + with space and capitalize it
  type = type
    .split("+")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  // replace + with space and capitalize it
  city = city
    .split("+")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  useEffect(() => {
    const result = propertyList.filter((property) => {
      console.log(Array.from(type.split("&")));
      return (
        property.city.toLowerCase() === city.toLowerCase() &&
        (Array.from(type.toLowerCase().split("&")).indexOf(
          property.officeType.toLowerCase()
        ) > -1 ||
          type.toLowerCase() === "all")
      );
    });
    setProperties(result);
  }, [type, city]);

  useEffect(() => {}, [properties]);

  return (
    <Box
      width={1}
      height="100vh"
      paddingTop={5}
      style={{ backgroundColor: "rgb(244, 245, 245)" }}
    >
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} to="/">
            Home
          </Link>
          <Link component={RouterLink} to="/">
            {city}
          </Link>
        </Breadcrumbs>
        {properties.map((property) => (
          <Box marginTop={2}>
            <Paper elevation={1} className={classes.paper}>
              <Grid container>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="leasing" src={hero} />
                  </ButtonBase>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm
                  container
                  style={{
                    margin: 15,
                  }}
                >
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {property.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {property.fullAddress}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {property.officeType}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        GET INFO AND PRICES
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      borderLeft: "solid 1px rgba(0, 0, 0, 0.23)",
                      padding: "0 75px",
                    }}
                  >
                    <Typography variant="subtitle1">From $200/month</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export { Lease };
