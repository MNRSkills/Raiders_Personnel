"use client";

import FetchEpisodes from "../fetchingEpisode";

const YouTubeEmbed = ({ vidID, title }) => {
  return (
    // This component takes the videoID and adds it to the iFrame api. 
   
      <div className="text-center w-full h-[500px] mt-11 lg:w-[500px]">
        <iframe
          src={`https://www.youtube.com/embed/${vidID}`}
          className="h-3/4 w-full md:h-[350px] "
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>
        <h1 className="m-auto max-w-[310px] text-lg font-semibold mt-2 hover:text-purple-600">
          {title}
        </h1>
      </div>
 
  );
};

// This component will be placed on the Homepage
// Will look into pagination of 10 videos at a time.

export default YouTubeEmbed;
