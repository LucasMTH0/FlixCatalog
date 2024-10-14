export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    genres: GenreType[];
    seasons: [];
    id: number;
    original_language: string;
    original_title: string;
    tagline: string;
    created_by: [];
    first_air_date:  string;
    overview: string;
    popularity: number;
    poster_path: string; 
    runtime: number;
    release_date?: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

interface GenreType {
    id: string;
    name: string;
}