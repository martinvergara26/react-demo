import React from 'react';
import TopBar from "./TopBar";
import MenuList from "./MenuList";
import {withRouter} from 'react-router-dom';

function Menu(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  return [
      <TopBar key={'top-bar'}
        title={props.title}
        open={open}
        toggleDrawer={toggleDrawer}
      />,
      <MenuList key={'menu-list'}
        open={open}
        toggleDrawer={toggleDrawer}
      />
  ];
}

export default withRouter(Menu);
