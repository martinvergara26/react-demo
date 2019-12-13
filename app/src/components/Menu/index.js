import React from 'react';
import TopBar from "./TopBar";
import MenuList from "./MenuList";
import {withRouter} from 'react-router-dom';

function Menu(props) {
  const [state, setState] = React.useState({
    open: false
  });

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ['open']: open });
  };

  return [
      <TopBar key={'top-bar'}
        title={props.title}
        open={state.open}
        toggleDrawer={toggleDrawer}
      />,
      <MenuList key={'menu-list'}
        open={state.open}
        toggleDrawer={toggleDrawer}
      />
  ];
}

export default withRouter(Menu);
