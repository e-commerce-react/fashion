import React from 'react';
import AppBar from './app-bar/AppBar';

export default ({ children, location }) => (
  <div>
    <AppBar location={location}/>
    { children }
  </div>
)
