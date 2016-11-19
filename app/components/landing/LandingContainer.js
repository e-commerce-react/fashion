import React from 'react';
import Landing from './Landing';

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

}

export default () => (
  <div style={styles.root} className="row center-xs">

    <Landing />

    <video style={styles.video} loop autoPlay>
      <source src="/bg-video.mp4" type="video/mp4" />
      <source src="/bg-video.mp4" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
)