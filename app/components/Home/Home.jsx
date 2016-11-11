import React, { Component } from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
      <video id="background-video" loop autoPlay>
        <source src="/bg-video.mp4" type="video/mp4" />
        <source src="/bg-video.mp4" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    )
}

export default Home;