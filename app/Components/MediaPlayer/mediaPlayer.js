import FadeInSection from "../fadeIn";
export default function YoutubeEmbed({ vidID }) {
  return (
    <li className="text-center w-full h-[500px] mt-11 lg:w-[500px] list-none">
      <FadeInSection>
        <iframe
          src={`https://www.youtube.com/embed/${vidID}`}
          className="h-[330px] w-full md:h-[400px] "
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>
      </FadeInSection>
    </li>
  );
}
