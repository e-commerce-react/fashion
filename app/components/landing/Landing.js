import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    paddingTop: '15%',
    color: '#fff',
    fontSize: '1.5em'
  },
  flatButton: {
    color: '#fff',
    marginTop: '15%'
  },
  btnLabelSize: {
    fontSize: '1.0em',
    fontWeight: '400'
  },
  member: {
    fontSize: '0.6em'
  }

}


export default () => (
  <div style={styles.root}>
    <p>welcome to BRAND!</p>
    <Link to="/products"><FlatButton label="enter" labelStyle={styles.btnLabelSize} style={styles.flatButton}/></Link>
    <p style={styles.member}>or</p>
    <Link to="/login" style={{textDecoration: "none", color: "#fff"}}><p style={styles.member}>already a member? login</p></Link>
  </div>
)