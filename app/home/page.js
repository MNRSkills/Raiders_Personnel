import MediaPlayer from "../Components/MediaPlayer/mediaPlayer";
import FetchEpisodes from "../Components/fetchingEpisode";

export default async function Home() {
  const data = await FetchEpisodes();
  
  return (
    <>
      <section className=" h-screen pl-5 pr-5 ">
        <div className=" bg-hero-section bg-contain bg-no-repeat h-full relative">
          <h1 className="text-5xl ">Raiders Personnel</h1>
          <h2>Raiders Podcast Latest News and Rumors</h2>
        </div>

        {/* header */}
        {/* shows showcase */}
      </section>
      {data.map((vidID, index) => {
        return <MediaPlayer vidID={vidID.videoId} key={index} />;
      })}
    </>
  );
}
