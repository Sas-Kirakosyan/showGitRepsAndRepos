import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    marginTop: 50,
    margin: "auto",
  },
});

export default function ImgMediaCard({ data, error }) {
  const classes = useStyles();
  if (error) {
    return <h2 className="list-head">{error}</h2>;
  }

  if (!error && data && data.length === 0) {
    return <h2 className="list-head">No Data</h2>;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={data.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            Name : {data.login}
          </Typography>
          <Typography gutterBottom variant="h5" component="h4">
            Followers : {data.followers}
          </Typography>{" "}
          <Typography gutterBottom variant="h5" component="h4">
            Public repos : {data.public_repos}
          </Typography>
          <Typography gutterBottom variant="h5" component="h4">
            Type : {data.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  data: PropTypes.instanceOf(Object),
  error: PropTypes.string,
};
