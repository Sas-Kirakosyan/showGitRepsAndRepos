import React, { useState, useEffect } from "react";

import Button from "../components/Button";
import BasicTextFields from "../components/Input";
import { useHistory } from "react-router-dom";
import {
  reposActionCreator,
  userDataActionCreator,
} from "../store/actions/actions";
import { useDispatch } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btnWrap: {
    display: "flex",
    flexWrap: "wrap",
    width: "35%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 2,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(() => e.target.value);
  };

  const handleSubmit = (e, query) => {
    if (query === "repositories") {
      dispatch(reposActionCreator(userName));
    }
    if (query === "user") {
      dispatch(userDataActionCreator(userName));
    }
    e.preventDefault();
    history.push(`/${query}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Enter user name of user and see github Repositories and
            Organizations
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.btnWrap}>
        <BasicTextFields _onChange={handleChange} value={userName} />
        <Button
          _onClick={(e) => handleSubmit(e, "repositories")}
          text={"search repo"}
        />
        <Button
          _onClick={(e) => handleSubmit(e, "user")}
          text={"search user"}
        />
      </div>
    </div>
  );
}

export default Navbar;
