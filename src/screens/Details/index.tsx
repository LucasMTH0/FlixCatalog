import { getResultById, TMDB_IMAGE_URL } from "../../services/api";
import { SliderContainer } from "../../components/SliderContainer";
import { Calendar, Clock, Star } from "@phosphor-icons/react";
import { getMoviesByGenre } from "../../services/movies";
import { SliderCardItem } from "../../components/slider";
import { formatDate } from "../../services/formatValues";
import { getTrailerLink } from "../../services/trailer";
import { Movie } from "../../interfaces/Movie";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import {
  MovieContainerDetails,
  ContainerRelated,
  HeaderWrapper,
  HeaderImage,
  SliderTitle,
  MovieGenre,
  Container,
  CardInfo,
  SubTitle,
  Content,
  Title,
  Video,
} from "./styles";

export function Detail() {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [movie, setMovie] = useState<Movie>();
  const [trailer, setTrailer] = useState("");
  const { id, type } = useParams<string>();

  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  async function loadSelected() {
    if (id && type) {
      try {
        const { data } = await getResultById(id, type);
        setMovie(data);
        const title: string = data.title ? data.title : data.name;
        await getTrailer(title);
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

  async function getTrailer(movieTitle: string) {
    const data = await getTrailerLink(movieTitle);
    if (data) {
      setTrailer(data);
    }
  }

  useEffect(() => {
    loadSelected();
  }, []);

  return (
    <Container>
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
            {type == "movie" && (
              <CardInfo>
                <Clock size={40} />
                {movie?.runtime} min
              </CardInfo>
            )}

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

            {type == "tv" && (
              <CardInfo>
                <span>Temp</span>
                {movie?.seasons.length}
              </CardInfo>
            )}
          </MovieContainerDetails>
        </HeaderWrapper>

        {trailer && (
          <HeaderWrapper>
            <Video src={trailer}></Video>
          </HeaderWrapper>
        )}
      </HeaderImage>

      {relatedMovies.length > 0 && (
        <ContainerRelated>
          <Content>
            <SliderTitle>Veja também</SliderTitle>
            <SliderContainer>
              {relatedMovies.map((movie: Movie) => {
                return (
                  <SliderCardItem key={movie.id} {...settings}>
                    <Card movieContent={movie} type={String(type)} />
                  </SliderCardItem>
                );
              })}
            </SliderContainer>
          </Content>
        </ContainerRelated>
      )}
    </Container>
  );
}
