import React from "react";
import {
  makeStyles,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
} from "@material-ui/icons";
import { MyListItems } from "./ListItens";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
  },
}));

const NavDrawer = ({ open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key="key1">
          <ListItemText primary="OFFICE SPACE" />
        </ListItem>
        <ListItem button key="key2">
          <ListItemText primary="COWORKING" />
        </ListItem>
        <ListItem button key="key3">
          <ListItemText primary="VIRTUAL OFFICE" />
        </ListItem>
        <ListItem button key="key4">
          <ListItemText primary="FIND WORKSPACE" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export { NavDrawer };
