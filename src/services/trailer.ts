import axios from "axios";

export async function getTrailerLink(movieTitle: string) {
  try {
    const BASE_YOUTUBE_URL = "https://www.youtube.com/embed/";
    const searchQuery = `${movieTitle} trailer`;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
        searchQuery
      )}&key=${"AIzaSyDKLAeeSBIbJgB1rdt1rdUr9HaWBFMX1Ps"}`
    );
    const { data } = response;
    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      return `${BASE_YOUTUBE_URL}${videoId}` as string;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
