"use client";

import React from 'react';

import FetchEpisodes from '../fetchingEpisode';

const YouTubeEmbed = ({ vidID }) => {
  
  
  // console.log("VIDPLAYER", vidID)
  return (
   
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        // src={`https://www.youtube.com/embed/${vidID}`}
        // style={{
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   width: width,
        //   height: height,
        // }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
