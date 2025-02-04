"use client";
import { FetchEpisodes } from "@/app/api/fetchingEpisode";
import { useState } from "react";

export default function LoadMoreVids({ nextPage }) {
  const [nextPageToken, setNextPageToken] = useState(nextPage);
  const [loading, setLoading] = useState(false);

  console.log("LOOKING FOR NEXTPAGE TOKEN", nextPage);
  const loadMoreVideos = async () => {
    console.log("HELLLO WANT MORE");
    // if (!nextPageToken) return; // Prevent fetching if no nextPageToken
    // setLoading(true);
    // try {
    //   const res = await FetchEpisodes(nextPage);
    //   const data = await res.json();
    //   if (data.videos) {
    //     onVideosLoaded(data.videos, data.nextPageToken); // Pass new videos to parent
    //   }
    //   setNextPageToken(data.nextPageToken || null); // Update nextPageToken
    // } catch (error) {
    //   console.error("Error fetching videos:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      {nextPageToken && (
        <button onClick={loadMoreVideos} disabled={loading}>
          {loading ? "Loading..." : "Load More Videos"}
        </button>
      )}
    </div>
  );
}
