import axios from "axios"

const API = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });
const LANGUAGE = 'pt-BR'
const HEADERS = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjBkZTgzMDU0YWJmNDZlMWQyYjYzOTU0ODdhMTNiNiIsInN1YiI6IjY2NzBhZDMyZWFjOTM3YWZjNmNmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQLlflwFa5zF8jazqM8FanRmGY7E8IRNz1YQazAqp4' }

//https://api.themoviedb.org/3/movie/latest

export function getLatestMovies() {
    return API.get(`/movie/latest?language=${LANGUAGE}`, { headers: HEADERS })
}

export function getRelatedMovies(page: number = 1) {
    return API.get(`/movie/top_rated?language=${LANGUAGE}&page=${page}`, { headers: HEADERS });
}