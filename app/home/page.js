import MediaPlayer from "../Components/MediaPlayer/mediaPlayer";
import MyPlaylist from "../api/fetchingEpisode";
import FetchEpisodes from "../api/fetchingEpisode";

export default async function Home() {
  const { vidDetail, nextPageToken, pageInfo } = await FetchEpisodes();

  return (
    <>
      <section className="h-[50rem] pl-5 pr-5 relative flex items-center justify-around bg-gradient-bg">
        <div className="flex justify-center items-center relative font-smooch ml-[200px]">
          <div className="absolute top-0 -left-60 bg-hero-headshot bg-cover bg-no-repeat w-[300px] h-[300px] hidden md:block">
            <h1 className="text-5xl absolute -bottom-10 -left-6">
              Raider Mack
            </h1>
          </div>
          <div className="bg-hero-headshot-ken bg-cover bg-no-repeat w-[400px] h-[400px] hidden md:block">
            <h1 className="text-5xl absolute -bottom-7 left-0">Raider Ken</h1>
          </div>
        </div>

        <div className="bg-hero-logo-mic bg-cover bg-no-repeat bg-center h-[400px] w-[400px] md:absolute top-0 right-0"></div>

        {/* header */}
        {/* shows showcase */}
      </section>
      <div className="grid grid-cols-1 justify-items-center gap-10 p-10 sm:grid-cols-2 md-20 md:grid-cols-2">
        <MyPlaylist />
      </div>
    </>
  );
}
