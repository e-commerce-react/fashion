import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500, darkBlack} from 'material-ui/styles/colors';

const customizedMuiTheme = getMuiTheme({
  palette: {
    textColor: darkBlack,
    alternateTextColor: darkBlack,
    canvasColor: darkBlack,
  },
  gridTile: {
    textColor: darkBlack
  }
});


export default customizedMuiTheme;