import axios from "axios"

export const API = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });
export const LANGUAGE = 'pt-BR'
export const HEADERS = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4' }


export function getResultById(id:string, type: string) {
    return API.get(`${type}/${id}?language=${LANGUAGE}`, { headers: HEADERS});
}

export function getMoviesByGenre(category, genre){
    return API.get(`/discover/${category}?with_genres=${genre}&language=${LANGUAGE}&limit=10`, { headers: HEADERS })

}

export async function getTrailerLink(movieTitle: string) {
    const searchQuery = `${movieTitle} trailer`;
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(searchQuery)}&key=${'AIzaSyDKLAeeSBIbJgB1rdt1rdUr9HaWBFMX1Ps'}`);
    const data = response.data;
    if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        return `https://www.youtube.com/embed/${videoId}`;
    } else {
        return null;
    }
}

export type ListTypeProps = {
    category: "movie" | "tv";
    filter: "upcoming" | "top_rated" | "popular"
}

export function getAPIList({ category, filter }) {
    return API.get(`/${category}/${filter}?language=${LANGUAGE}`, { headers: HEADERS })
}



//https://api.themoviedb.org/3/movie/latest

