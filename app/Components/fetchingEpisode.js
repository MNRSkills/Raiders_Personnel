export default async function FetchEpisodes() {
    const API_KEY = process.env.YOUR_API_KEY;
    const CHAN_ID = process.env.CHANNEL_ID;
  
    // Step 1: Get the uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHAN_ID}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const channelData = await channelResponse.json();
    
    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;
  
    // Step 2: Fetch videos from the playlist
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const playlistData = await playlistResponse.json();
    
  
    // Extracting relevant video details
    const vidDetail = playlistData.items.map((item, index) => {
      return {
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        description: item.snippet.description,
        videoId: item.snippet.resourceId.videoId,
      };
    });
  
    return vidDetail;
  }