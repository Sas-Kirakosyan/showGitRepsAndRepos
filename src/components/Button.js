import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ContainedButton({ _onClick = () => {}, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={_onClick}
      >
        {text}
      </Button>
    </div>
  );
}

ContainedButton.propTypes = {
  _onClick: PropTypes.func,
  text: PropTypes.string,
};

export default React.memo(ContainedButton);
