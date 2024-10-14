import { API, HEADERS, LANGUAGE } from "./api";

export function getUpcomingMovies() {
  return API.get(`/movie/upcoming?language=${LANGUAGE}`, { headers: HEADERS });
}

export function getRelatedMovies(page: number = 1) {
  return API.get(`/movie/top_rated?language=${LANGUAGE}&page=${page}`, {
    headers: HEADERS,
  });
}

export function getPopularMovies(page: number = 1) {
  return API.get(`/movie/popular?language=${LANGUAGE}&page=${page}`, {
    headers: HEADERS,
  });
}

export function getMoviesByGenre(category: string, genre: number) {
  return API.get(
    `/discover/${category}?with_genres=${genre}&language=${LANGUAGE}&limit=10`,
    { headers: HEADERS }
  );
}
