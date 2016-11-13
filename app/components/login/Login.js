import React from 'react';

export default () => (
  <video id="background-video" loop autoPlay>
    <source src="/bg-video.mp4" type="video/mp4" />
    <source src="/bg-video.mp4" type="video/ogg" />
    Your browser does not support the video tag.
  </video>
)