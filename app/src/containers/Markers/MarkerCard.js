import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import RoomIcon from '@material-ui/icons/Room';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none'
  },
  markerIcon: {
    marginRight: '0.5em'
  }
}));

export default function MarkerCard({markerID, handleOnDelete}) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant={"h4"}>
          <RoomIcon className={classes.markerIcon}/>
          Marker {markerID}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.link} to={`/map?markerID=${markerID}`}>
          <Button size={'small'} color={'primary'} onClick={() => true}>
            View in map
          </Button>
        </Link>
        <Button size={'small'} color={'secondary'} onClick={() => handleOnDelete(markerID)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )

}
