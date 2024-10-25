import { Container } from "./styles";
import { Loading } from "../../components/Loading";
import { useEffect, useState, useTransition } from "react";
import { getFilteredResultsList } from "../../services/api";
import { MovieSliderList } from "./components/MovieSliderList";

export function Home() {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
  const [ratedTVSeriesList, setRatedTVSeriesList] = useState([]);
  const [ratedMoviesList, setRatedMoviesList] = useState([]);
  const [isPending, startTransition] = useTransition();

  async function getSlideContentList(){
    setUpcomingMoviesList(await getFilteredResultsList("movie", "upcoming"));
    setRatedMoviesList(await getFilteredResultsList("movie", "top_rated"));
    setRatedTVSeriesList(await getFilteredResultsList("tv", "top_rated"));
  }

  useEffect(() => {
    startTransition(() => { getSlideContentList() });
  }, []);

  return (
    <Container>
      { isPending ? ( <Loading /> ) 
      : (
        <>
          <MovieSliderList movieList={upcomingMoviesList} type="movie" title="Filmes recentes"/>
          <MovieSliderList movieList={ratedMoviesList} type="movie" title="Filme mais bem avaliados"/>
          <MovieSliderList movieList={ratedTVSeriesList} type="tv" title="Séries mais bem avaliadas"/>
        </>
      )}
    </Container>
  );
}
