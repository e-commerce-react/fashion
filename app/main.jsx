import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store'
import Routes from './routes';

/* ui-material setup */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customizedMuiTheme from './customizedMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render (
  <MuiThemeProvider muiTheme={customizedMuiTheme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
