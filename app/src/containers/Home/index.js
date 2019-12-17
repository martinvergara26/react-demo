import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from "../Layout/Layout";
import Typography from "@material-ui/core/Typography";
import CityCard from "./CityCard";
import {cities} from './cities'
import Footer from '../../components/Footer'
import MainCard from "./MainCard";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    flexGrow: 1,
    margin: 0,
    marginLeft: - theme.spacing(2),
    marginRight: - theme.spacing(2)
  },
  welcomeContainer: {
    padding: theme.spacing(6),
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


export default function Home() {
  const classes = useStyles();

  return (
    <Layout title={'Home'} footer={<Footer />}>
      <MainCard />

      <Typography variant="h4">
        Coming cities
      </Typography>

      <Grid className={classes.gridContainer} container spacing={4}>
        {cities.map(
          city => (
            <Grid key={city.name} item xs={12} sm={6} lg={3} xl={3}>
              <CityCard city={city}/>
            </Grid>
          )
        )}
      </Grid>
    </Layout>
  );
}