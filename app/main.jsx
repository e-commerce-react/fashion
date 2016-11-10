'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'


//Material-UI set-up
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

injectTapEventPlugin();



import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'



import Home from './components/Home'

const Open = (props) => {
  return(
    <IconMenu
      iconButtonElement={<IconButton><Menu className="app-bar-menu"/></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Sign In" />
        <MenuItem primaryText="Shop" />
        <MenuItem primaryText="About" />
    </IconMenu>
  )
}


const App = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <div  className="row start-xs">
          <AppBar
            title="e-FASHION"
            iconElementLeft={<span></span>}
            iconElementRight={<Open />}
            className="app-bar-home col-xs-6 col-xs-offset-3"
          />

          <video id="background-video" loop autoPlay>
            <source className="bg-video" src="/bg-video.mp4" type="video/mp4" />
            <source className="bg-video" src="/bg-video.mp4" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="row center-xs">
          <div className="col-xs-6 mainpage-landing">
            <h3>Welcome!</h3>
            <a className="mainpage-landing-enter-btn">ENTER HERE</a>
            <p>already a member? login</p>
          </div>
        </div>
      </div>

    </MuiThemeProvider>
  )
}


render (
  <App />,
  document.getElementById('main')
)




// iconClassNameRight="muidocs-icon-navigation-expand-more"







// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav>
//       {children}
//     </div>
// )

// render (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={ExampleApp}>
//        <IndexRedirect to="/jokes" />
//        <Route path="/jokes" component={Jokes} />
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('main')
// )



