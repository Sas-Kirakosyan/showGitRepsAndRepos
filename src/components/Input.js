import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      marginTop: "30px",
      marginBottom: "30px",
    },
  },
}));

export default function BasicTextFields({ _onChange = () => {}, value }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="user name"
        variant="outlined"
        onChange={_onChange}
        value={value}
      />
    </form>
  );
}

BasicTextFields.propTypes = {
  _onChange: PropTypes.func,
  value: PropTypes.string,
};
