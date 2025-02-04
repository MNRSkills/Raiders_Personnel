import LoadMoreVids from "../Components/MediaPlayer/loadMoreVid";
import MediaPlayer from "../Components/MediaPlayer/mediaPlayer";
import FadeInSection from "../Components/fadeIn";
import MyPlaylist from "../api/fetchingEpisode";
import { FetchEpisodes } from "../api/fetchingEpisode";

export default async function Home() {
  // const { vidDetail, nextPageToken, pageInfo } = await FetchEpisodes();
  const { uploadPlaylistId } = FetchEpisodes();
  return (
    <>
      {/* header */}
      <section className="h-screen pl-5 pr-5 bg-gradient-bg">
        <div className="relative font-smooch">
          <div className="absolute inset-x-6 inset-y-[25rem] bg-hero-headshot bg-cover bg-no-repeat w-[300px] h-[300px] hidden md:block">
            <h1 className="text-5xl absolute -bottom-10 -left-6">
              Raider Mack
            </h1>
          </div>
          <div className="absolute inset-x-1/4 left-72 inset-y-[25rem] bg-hero-headshot-ken bg-cover bg-no-repeat w-[400px] h-[400px] hidden md:block">
            <h1 className="text-5xl absolute -bottom-7 left-0">Raider Ken</h1>
          </div>
        </div>

        <div className="bg-hero-logo-mic bg-cover sm:bg-contain bg-no-repeat bg-center h-[400px] w-full sm:h-full md:w-[50%] md:absolute top-0 right-0"></div>

        {/* shows showcase */}
      </section>
      {/* <div className="grid grid-cols-1 justify-items-center gap-10 p-10 sm:grid-cols-2 md-20 md:grid-cols-2"> */}
      <MyPlaylist />

      {/* <LoadMoreVids /> */}
      {/* </div> */}
    </>
  );
}
