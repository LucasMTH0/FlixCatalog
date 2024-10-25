import { Card } from "../../../../components/Card";
import { Movie } from "../../../../interfaces/Movie";
import { ContainerMovieList, SliderTitle } from "./styles";
import { SliderCardItem } from "../../../../components/slider";
import { SliderContainer } from "../../../../components/SliderContainer";
type Props = {
  movieList: Movie[];
  title: string;
  type: string;
}
export function MovieSliderList({ movieList, title, type }: Props){
  return (
    <ContainerMovieList>
      <SliderTitle>{title}</SliderTitle>
      <SliderContainer>
        {
          movieList.map((movie: Movie) => {
            return (
              <SliderCardItem key={movie.id}>
                <Card movieContent={movie} type={type} />
              </SliderCardItem>
            );
          })
        }
      </SliderContainer>
    </ContainerMovieList>
  )
}