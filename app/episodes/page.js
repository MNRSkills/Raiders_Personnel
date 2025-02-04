import EpisodeCard from "../Components/episodeCard";
import MediaPlayer from "../Components/MediaPlayer/mediaPlayer";
import MyPlaylist from "../api/fetchingEpisode";

import { FetchEpisodes } from "../api/fetchingEpisode";

export default async function Episodes() {
  const { vidDetail } = await FetchEpisodes();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-10 pr-10">
        {vidDetail.map((episode, index) => {
          return <EpisodeCard episode={episode} key={index} />;
        })}
      </div>
    </div>
  );
}
