import { Movie } from "../../interfaces/Movie";
import { Container, Image } from "./styles";

type Props = {
    movieContent: Movie
}
export function Card({movieContent}: Props) {
    return (
        <Container>
            <Image src={"https://image.tmdb.org/t/p/original/"+movieContent.poster_path} title={movieContent.title} alt={"Poster do filme "+ movieContent.title}/>
        </Container>
    )
 }