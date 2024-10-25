import axios from "axios";

export const API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });
export const TMDB_IMAGE_URL: string = "https://image.tmdb.org/t/p/original/";
export const LANGUAGE = "pt-BR";
export const HEADERS = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4",
};

export function getResultById(id: string, type: string) {
  return API.get(`${type}/${id}?language=${LANGUAGE}`, { headers: HEADERS });
}

export function getAPIList(category: string, filter: string) {
  return API.get(`/${category}/${filter}?language=${LANGUAGE}`, {
    headers: HEADERS,
  })
}

export async function getFilteredResultsList(type, filter){
  const { data } = await getAPIList(type, filter);
  return data.results
}

//https://api.themoviedb.org/3/movie/latest
