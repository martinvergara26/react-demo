import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles/index";

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: '10vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    padding: 0,
    width: theme.spacing(6),
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    minHeight: '10vh',
    height: '10vh'
  }
}));


export default function TopBar(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="relative"
        className={classes.appBar}
      >
        <Toolbar
          className={classes.toolbar}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.toggleDrawer(true)}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
