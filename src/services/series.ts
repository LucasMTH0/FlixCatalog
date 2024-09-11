import { API, HEADERS, LANGUAGE } from "./api"

export function getRelatedSeries(page: number = 1){
    return API.get(`/tv/top_rated?language=${LANGUAGE}&page=${page}`, { headers: HEADERS})
}

export function getPopularSeries(page: number = 1){
    return API.get(`/tv/popular?language=${LANGUAGE}&page=${page}`, { headers: HEADERS})
}

export function getRatedSeries(page: number = 1){
    return API.get(`/tv/top_rated?language=${LANGUAGE}&page=${page}`, { headers: HEADERS})
}