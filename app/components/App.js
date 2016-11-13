import React from 'react';
import AppBar from './app-bar/AppBar';
import Footer from './footer/Footer';

export default ({ children, location }) => (
  <div>
    <AppBar />
    { children }
    <Footer className="app-footer"/>
  </div>
)