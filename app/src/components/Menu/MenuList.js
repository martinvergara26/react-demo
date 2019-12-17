import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles/index";
import RoomIcon from '@material-ui/icons/Room';

export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: 'none'
  },
}));

export default function MenuList(props) {
  const classes = useStyles();

  return (
    <Drawer anchor="top" open={props.open} onClose={props.toggleDrawer(false)}>
      <div
        className={classes.fullList}
        role="presentation"
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}
      >
        <List>
          <ListItem button key={'home'}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={<Link className={classes.link} to="/">Home</Link>} />
          </ListItem>
          <ListItem button key={'map'}>
            <ListItemIcon><MapIcon /></ListItemIcon>
            <ListItemText primary={<Link className={classes.link} to="/map">Map</Link>} />
          </ListItem>
          <ListItem button key={'markers'}>
            <ListItemIcon><RoomIcon /></ListItemIcon>
            <ListItemText primary={<Link className={classes.link} to="/markers">My markers</Link>} />
          </ListItem>

          <Divider/>

          <ListItem button key={'about'}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary={<Link className={classes.link} to="/about">About</Link>} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
