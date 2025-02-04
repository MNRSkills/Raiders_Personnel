import LoadMoreVids from "../Components/MediaPlayer/loadMoreVid";
import YoutubeEmbed from "../Components/MediaPlayer/mediaPlayer";

export async function FetchEpisodes(nextPage = "") {
  const API_KEY = process.env.YOUR_API_KEY;
  const CHAN_ID = process.env.CHANNEL_ID;

  // Get the uploads playlist ID for the channel
  const channelResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHAN_ID}&key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const channelData = await channelResponse.json();
  const uploadsPlaylistId =
    channelData.items[0].contentDetails.relatedPlaylists.uploads;

  // Build the playlist API URL and include the nextPage token if provided
  let playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${API_KEY}&maxResults=4`;
  if (nextPage) {
    playlistUrl += `&pageToken=${nextPage}`;
  }

  // Fetch videos from the uploads playlist
  const playlistResponse = await fetch(playlistUrl, {
    next: { revalidate: 3600 },
  });
  const playlistData = await playlistResponse.json();

  // Extract pagination tokens and page information
  const nextPageToken = playlistData.nextPageToken || null;
  const prevPageToken = playlistData.prevPageToken || null;
  const pageInfo = playlistData.pageInfo || null;

  // Extract relevant video details from each playlist item
  const vidDetail = playlistData.items.map((item) => ({
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    description: item.snippet.description,
    videoId: item.snippet.resourceId.videoId,
  }));

  return { vidDetail, pageInfo, nextPageToken, prevPageToken };
}

export default async function MyPlaylist() {
  // Fetch the initial page of videos
  const { vidDetail, nextPageToken } = await FetchEpisodes();

  return (
    <ul className="grid grid-cols-1 justify-items-center gap-10 p-10 sm:grid-cols-2 md-20 md:grid-cols-2">
      {vidDetail.map((vid, index) => (
        <YoutubeEmbed
          key={index}
          vidID={vid.videoId}
          title={vid.title}
          // You can pass nextPageToken to individual components if needed
        />
      ))}

      {/* Optionally, pass the nextPageToken to a "Load More" button or component */}
      {nextPageToken && <LoadMoreVids nextPage={nextPageToken} />}
    </ul>
  );
}
