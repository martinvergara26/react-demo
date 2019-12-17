import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '20em',
      marginBottom: theme.spacing(4)
    },
    link: {
      color: 'white',
      textDecoration: 'none'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    cover: {
      flexGrow: 2,
      backgroundPosition: 'top'
    }
}));

export default function MainCard () {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent>
          <Typography component="h5" variant="h5">
            Available markers from London
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            <Link className={classes.link} to="/map">Browse now</Link>
          </Button>
        </CardActions>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://www.fodors.com/wp-content/uploads/2017/10/HERO_UltimateLondon_Hero_shutterstock412054315.jpg"
        title="Live from space album cover"
      />
    </Card>
  )
}