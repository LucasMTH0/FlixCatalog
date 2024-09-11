import {API, HEADERS} from "./api"

export function Search(query: string) {
    return API.get(`search/movie?query=${query}&api_key=720de83054abf46e1d2b6395487a13b6`,{ headers: HEADERS })
}