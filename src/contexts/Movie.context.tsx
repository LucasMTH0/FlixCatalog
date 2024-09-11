import { createContext, ReactNode, useState } from "react";
import { Movie } from "../interfaces/Movie";

type Props = { children: ReactNode }
interface MovieContextProps {
    search: Movie[];
    saveMovieSearchListResults: (movies: Movie[]) => void;
}

export const MovieContext = createContext({} as MovieContextProps)

export function MovieProvider({ children }: Props) {
    const [search, setSearch] = useState<Movie[]>([] as Movie[])

    function saveMovieSearchListResults(search: Movie[]) {
        setSearch(search)
    }

    return (
        <MovieContext.Provider value={{ search, saveMovieSearchListResults }}>
            {children}
        </MovieContext.Provider>
    )
}