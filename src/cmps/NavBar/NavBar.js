import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink, Link } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";
import FavoriteIcon from "@material-ui/icons/Favorite";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  right: {
    minWidth: "150px",
    display: "flex",
    justifyContent: "space-between",
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "column",
    color: "inherit",
    textDecoration: "unset",
    alignItems: "center",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.linkWrapper}>
              Weather
            </Link>
          </Typography>

          <Typography className={classes.right}>
            <NavLink to="/favorites" className={classes.linkWrapper}>
              <FavoriteIcon />
              Favorites
            </NavLink>
            <NavLink to="/" className={classes.linkWrapper}>
              <CloudIcon />
              Weather
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
