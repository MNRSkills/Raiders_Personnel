"use client";

import FetchEpisodes from "../../api/fetchingEpisode";

// const YouTubeEmbed = () => {

// return (
// This component takes the videoID and adds it to the iFrame api.

// <div></div>

// <div className="text-center w-full h-[500px] mt-11 lg:w-[500px]">
//   <iframe
//     src={`https://www.youtube.com/embed/${vidID}`}
//     className="h-3/4 w-full md:h-[350px] "
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//     title="Embedded YouTube Video"
//   ></iframe>
//   <h1 className="m-auto max-w-[310px] text-lg font-semibold mt-2 hover:text-purple-600">
//     {title}
//   </h1>
// </div>
// );
// };

// This component will be placed on the Homepage
// Will look into pagination of 10 videos at a time.

// export default YouTubeEmbed;

// Client component (required for useState & useEffect)

import { useState } from "react";

export default function YoutubeEmbed({ vidID, nextPage }) {
  // console.log(nextPage, "IS THIS WORKING");
  const [videos, setVideos] = useState(vidID);
  const [nextPageToken, setNextPageToken] = useState(nextPage);
  const [loading, setLoading] = useState(false);

  const loadMoreVideos = async () => {
    if (!nextPageToken) return;

    setLoading(true);
    const res = await fetch(`/api/fetchVideos?pageToken=${nextPage}`);
    const data = await res.json();

    setVideos([...videos, ...data.videos]); // Append new videos
    setNextPageToken(data.nextPageToken);
    setLoading(false);
  };

  return (
    <div>
      <ul>
        {videos.map((videoID, index) => {
          console.log(videoID, "ID ID ID");
        })}
      </ul>

      {nextPageToken && (
        <button onClick={loadMoreVideos} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
