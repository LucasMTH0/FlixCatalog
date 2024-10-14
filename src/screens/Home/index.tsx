import { SliderContainer } from "../../components/SliderContainer";
import { useEffect, useState, useTransition } from "react";
import { Container, SliderTitle, Wrapper } from "./styles";
import { SliderCardItem } from "../../components/slider";
import { Loading } from "../../components/Loading";
import { getAPIList } from "../../services/api";
import { Movie } from "../../interfaces/Movie";
import { Card } from "../../components/Card";

export function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [ratedTVSeries, setRatedTVSerie] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [ratedMovies, setRatedMovies] = useState([]);

  async function getUpcomingMovies() {
    const { data } = await getAPIList("movie", "upcoming");
    setUpcomingMovies(data.results);
  }
  async function getRelatedMovies() {
    const { data } = await getAPIList("movie", "top_rated");
    setRatedMovies(data.results);
  }
  async function getRatedSeries() {
    const { data } = await getAPIList("tv", "top_rated");
    setRatedTVSerie(data.results);
  }

  useEffect(() => {
    startTransition(() => {
      getUpcomingMovies();
      getRelatedMovies();
      getRatedSeries();
    });
  }, []);

  return (
    <Container>
      {isPending ? (
        <Loading />
      ) : (
        <>
          <Wrapper>
            <SliderTitle>Filmes recentes</SliderTitle>
            <SliderContainer>
              {upcomingMovies.map((movie: Movie) => {
                return (
                  <SliderCardItem key={movie.id}>
                    <Card movieContent={movie} type="movie" />
                  </SliderCardItem>
                );
              })}
            </SliderContainer>
          </Wrapper>

          <Wrapper>
            <SliderTitle>Filme mais bem avaliados</SliderTitle>
            <SliderContainer>
              {ratedMovies.map((movie: Movie) => {
                return (
                  <SliderCardItem key={movie.id}>
                    <Card movieContent={movie} type="movie" />
                  </SliderCardItem>
                );
              })}
            </SliderContainer>
          </Wrapper>

          <Wrapper>
            <SliderTitle>Séries mais bem avaliadas</SliderTitle>
            <SliderContainer>
              {ratedTVSeries.map((movie: Movie) => {
                return (
                  <SliderCardItem key={movie.id}>
                    <Card movieContent={movie} type="tv" />
                  </SliderCardItem>
                );
              })}
            </SliderContainer>
          </Wrapper>
        </>
      )}
    </Container>
  );
}
