import MediaPlayer from "../Components/MediaPlayer/mediaPlayer";
import FetchEpisodes from "../Components/fetchingEpisode";

export default async function Home() {
  const data = await FetchEpisodes();
  console.log(data, "THE FULL PIC");
  return (
    <>
      <section className="h-[50rem] pl-5 pr-5 relative flex items-center justify-center bg-gradient-bg">
        <div className="bg-hero-headshot bg-contain bg-no-repeat w-80 h-40 hidden md:block"></div>
        <div className="bg-hero-headshot-ken bg-cover bg-no-repeat w-[400px] h-[400px] hidden md:block"></div>
        <div className=" ">
          <h1 className="text-5xl ">Raiders Personnel</h1>
          <h2>Raiders Podcast Latest News and Rumors</h2>
        </div>

        {/* header */}
        {/* shows showcase */}
      </section>
      <div className="grid grid-cols-1 justify-items-center gap-10 p-10 sm:grid-cols-2 md-20 md:grid-cols-2">
        {data.map((vidID, index) => {
          return (
            <MediaPlayer
              vidID={vidID.videoId}
              key={index}
              title={vidID.title}
            />
          );
        })}
      </div>
    </>
  );
}
