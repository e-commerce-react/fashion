import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

//ui material setup
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customizedMuiTheme from './customizedMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './store'
import Routes from './routes';


render (
  <MuiThemeProvider muiTheme={customizedMuiTheme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)







// const App = (props) => {
//   return (
//     <MuiThemeProvider>
//       <div>
//         <div  className="row start-xs">
//           <AppBar
//             title="e-FASHION"
//             iconElementLeft={<span></span>}
//             iconElementRight={<Open />}
//             className="app-bar-home col-xs-6 col-xs-offset-3"
//           />

//           <video id="background-video" loop autoPlay>
//             <source className="bg-video" src="/bg-video.mp4" type="video/mp4" />
//             <source className="bg-video" src="/bg-video.mp4" type="video/ogg" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         <div className="row center-xs">
//           <div className="col-xs-6 mainpage-landing">
//             <h3>Welcome!</h3>
//             <a className="mainpage-landing-enter-btn">ENTER HERE</a>
//             <p>already a member? login</p>
//           </div>
//         </div>
//       </div>

//     </MuiThemeProvider>
//   )
// }



