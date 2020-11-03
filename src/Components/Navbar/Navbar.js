import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Link,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

/*-----*/
import logo from "../../assets/aos-logo-dark.png";
import { NavDrawer } from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  appBar: {
    position: "relative",
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
    paddingTop: 10,
  },
  toolbar: {
    [theme.breakpoints.up("sm")]: {
      width: 1200,
      padding: 0,
      margin: "0 auto",
    },
  },
  wrapLeft: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
    "& img": {
      width: 70,
    },
  },
  title: {
    fontWeight: 600,
  },
  searchButton: {
    color: "#fff",
    backgroundColor: "#e52500",
    fontWeight: 600,
    padding: "10px 25px",
    marginLeft: 30,
    "&:hover": {
      backgroundColor: "#d92704",
    },
    "& .MuiSvgIcon-root": {
      marginLeft: 5,
    },
  },
  menu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  myList: {
    marginLeft: 30,
    marginTop: 5,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.wrapLeft}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={logo} alt="Logo" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link component={RouterLink} to="/">
                AllOffice.Space
              </Link>
            </Typography>
            <Typography variant="body2" className={classes.myList}>
              <Link component={RouterLink} to="/">
                Office Space
              </Link>
              <Link component={RouterLink} to="/">
                Coworking
              </Link>
              <Link component={RouterLink} to="/">
                Virtual Office
              </Link>
            </Typography>
          </div>
          <IconButton
            color="inherit"
            className={classes.menu}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <NavDrawer open={open} setOpen={setOpen} />
      </Hidden>
    </div>
  );
}

export { Navbar };
