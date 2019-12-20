import React from 'react';
import Layout from "../Layout/index";
import {getSavedMarkers} from "../../userStorage";
import MarkerCard from "./MarkerCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {deleteMarker} from "../../userStorage";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    flexGrow: 1,
    margin: 0,
    marginLeft: - theme.spacing(2),
    marginRight: - theme.spacing(2)
  }
}));

export default function Markers () {
  const classes = useStyles();

  const [markers, setMarkers] = React.useState(getSavedMarkers());  // This should be an async call to a backend service.

  const handleOnDelete = markerID => {
    setMarkers(markers.filter(m => m !== markerID));
    deleteMarker(markerID);
  };

  return (
    <Layout title={'Markers'}>
      <Typography variant="h3">
        {
          markers.length
            ? 'This are your saved markers'
            : 'You don\'t have saved markers yet'
        }
      </Typography>

      <Grid className={classes.gridContainer} container spacing={4}>
        {markers.map(
          marker => (
            <Grid key={marker} item xs={12} sm={6} lg={3} xl={3}>
              <MarkerCard markerID={marker} handleOnDelete={handleOnDelete}/>
            </Grid>
          )
        )}
      </Grid>
    </Layout>
  )
}