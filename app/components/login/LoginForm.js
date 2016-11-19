import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {login} from '../../redux/auth'

const styles = {
  root: {
    paddingTop: '10%'
  },
  loginBtn: {
    marginTop: '3%'
  }
}

const Login = ({ login }) => (

  <form style={styles.root} className="col center-xs" onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.email.value, evt.target.password.value)
  }}>
    <TextField
      hintText="JohnDoe@gmail.com"
      floatingLabelText="Email"
      name="email"
      className="row center-xs"
    /><br />

    <TextField
      hintText="Enter your password"
      floatingLabelText="Password"
      type="password"
      name="password"
      className="row center-xs"
    /><br />
    <RaisedButton type="submit" label="Login" primary={true} style={styles.loginBtn} />

  </form>
)

export default Login;
