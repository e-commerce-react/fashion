import React from 'react';
import AppBar from 'material-ui/AppBar';

import SearchIcon from 'material-ui/svg-icons/action/search';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const style = {
  appBar: {
    color: '#fff',
    fontSize: '1.7em',
    paddingLeft: '3%',
    paddingRight: '3%'
  },
  appBarMenu: {
    color: '#fff'
  }

};

export default () => (
  <AppBar
    iconElementLeft={<span>BRAND_NAME</span>}
    iconElementRight={<span>MENU<MenuIcon style={style.appBarMenu} /></span>}
    style={style.appBar}
    className="app-bar-landing"
  />
)

