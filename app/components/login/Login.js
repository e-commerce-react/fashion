import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {},
  video: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    top: '0',
    padding: 'none',
    zIndex: '-1',
    position: 'absolute'
  },
  flatButton: {
    position: 'absolute',
    top: '50%',
    left: '45%',
    color: '#fff'
  },
  btnLabelSize: {
    fontSize: '40px'
  }
}

export default () => (
  <div style={styles.root}>

    <Link to="/products"><FlatButton label="Enter" labelStyle={styles.btnLabelSize} style={styles.flatButton}/></Link>

    <video style={styles.video} loop autoPlay>
      <source src="/bg-video.mp4" type="video/mp4" />
      <source src="/bg-video.mp4" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
)