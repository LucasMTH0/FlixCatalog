import { getResultById, TMDB_IMAGE_URL } from "../../services/api";
import { Calendar, Clock, Star } from "@phosphor-icons/react";
import { getMoviesByGenre } from "../../services/movies";
import { formatDate } from "../../services/formatValues";
import { Movie } from "../../interfaces/Movie";
import { useParams } from "react-router-dom";
import {  useEffect, useState, useTransition } from "react";
import {
  MovieContainerDetails,
  HeaderWrapper,
  HeaderImage,
  MovieGenre,
  Container,
  CardInfo,
  SubTitle,
  Title,
} from "./styles";
import { MovieSliderList } from "../Home/components/MovieSliderList";
import { Trailer } from "./components/Trailer";
import { Loading } from "../../components/Loading";

export function Detail() {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [movie, setMovie] = useState<Movie>();
  const { id, type } = useParams<string>();
  const [isPending, startTransition] = useTransition();

  async function loadSelected() {
    if (id && type) {
      try {
        const { data } = await getResultById(id, type);
        setMovie(data);
        await getRelatedMovies(data);
      } catch (e) {
        console.log("error: ", e);
      }
    }
  }
  async function getRelatedMovies(movieSelected: Movie) {
    const genreId =
      movieSelected.genres && movieSelected?.genres.length > 0
        ? parseInt(movieSelected?.genres[0].id)
        : movieSelected?.genre_ids[0];
    const { data } = await getMoviesByGenre(type as string, genreId);
    setRelatedMovies(data.results);
  }
  useEffect(() => {
    startTransition(() => {
      loadSelected()
    })
  }, []);

  return (
    <Container>
      { isPending ?  <Loading />  :
      <>
        <HeaderImage $imageUrl={TMDB_IMAGE_URL + movie?.backdrop_path}>
          <HeaderWrapper>
            <Title>{movie?.title ? movie?.title : movie?.name}</Title>
            <SubTitle>{movie?.tagline}</SubTitle>
            <p>{movie?.overview}</p>
            <MovieContainerDetails>
              {movie?.genres.map((genre) => {
                return <MovieGenre key={genre.id}>{genre.name}</MovieGenre>;
              })}
            </MovieContainerDetails>

            <MovieContainerDetails>
              {type == "movie" && 
                <CardInfo>
                  <Clock size={40} />
                  {movie?.runtime} min
                </CardInfo>
              }

              <CardInfo>
                <Star size={40} />
                {movie?.vote_average.toFixed(1)}
              </CardInfo>

              <CardInfo>
                <Calendar size={40} />
                {type == "movie"
                  ? `${movie?.release_date && formatDate(movie?.release_date)}`
                  : `${
                      movie?.first_air_date && formatDate(movie?.first_air_date)
                    }`}
              </CardInfo>

              {type == "tv" && 
                <CardInfo>
                  <span>Seasons</span>
                  {movie?.seasons.length}
                </CardInfo>
              }
            </MovieContainerDetails>
          </HeaderWrapper>

          { (movie?.title || movie?.name) && <Trailer movieTitle={movie.title ? movie.title : movie?.name}/> }
        
        </HeaderImage >
        {relatedMovies.length > 0 && <MovieSliderList movieList={relatedMovies} title="Veja também" type={type as string}/> }
      </>
      }
    </Container>
  );
}
