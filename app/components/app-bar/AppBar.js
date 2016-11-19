import React from 'react';
import AppBar from 'material-ui/AppBar';

import SearchIcon from 'material-ui/svg-icons/action/search';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';


export default ({location}) => (
  <AppBar
    iconElementLeft={<span className="row">BRAND</span>}
    iconElementRight={
      <span className="row">
        <SearchIcon viewBox={styles.appBarIcon.viewBox} style={ location.pathname == '/landing' ? styles.appBarIconLanding : styles.appBarIcon }/>
        <MenuIcon viewBox={styles.appBarIcon.viewBox} style={ location.pathname == '/landing' ? styles.appBarIconLanding : styles.appBarIcon }/>
      </span>}
    style={ location.pathname == '/landing' ? styles.appBarLanding : styles.appBar }
  />
)


const styles = {
  appBar: {
    height: '10%',
    color: '#000',
    fontSize: '1.6em',
    position: 'fixed',
    background: 'transparent',
    boxShadow: 'none',
    paddingLeft: '3%',
    paddingRight: '4%'
  },
  appBarLanding: {
    height: '10%',
    color: '#fff',
    fontSize: '1.6em',
    position: 'fixed',
    background: 'transparent',
    boxShadow: 'none',
    paddingLeft: '25%',
    paddingRight: '25%'
  },
  appBarIcon: {
    height: '30px',
    width: '30px',
    viewBox: '0 0 24 24'
  },
  appBarIconLanding: {
    height: '30px',
    width: '30px',
    color: '#fff'
  }
};