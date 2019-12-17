import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
    height: '90vh',
    width: '100%',
    padding:0,
    margin: 0,
    backgroundColor: theme.palette.primary.main,
  }
}));

export default function Footer () {
  const classes = useStyles();

  return <footer>
    <Grid className={classes.root} direction={'column'} container alignItems={'center'} justify={'space-around'} spacing={4}>
      <Grid item>
        <Typography variant={'h3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
      </Grid>
      <Grid item>
        <Typography variant={'h5'}>This would be some nice footer content</Typography>
      </Grid>
      <Grid item>
        <Typography>Qui dolorem ipsum quia dolor sit amet</Typography>
      </Grid>
    </Grid>
  </footer>
};