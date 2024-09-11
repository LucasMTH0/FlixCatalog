import { Link } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { AvaliableNote, Container, Image, Overview } from "./styles";
import './styles.css'
import { useEffect, useState } from "react";
type Props = {
    movieContent: Movie,
    type: string
}
export function Card({movieContent, type = "movie" }: Props) {
    const [ variant, setVariant ] = useState('')

    useEffect(() => {generateVariantVote()}, [])

    function generateVariantVote(): void{
        console.log(movieContent)
        const vote = Number(movieContent?.vote_average.toFixed(1))
        if( vote >= 4 && vote <= 6.9){ setVariant("medium_note") }
        
        if( vote >= 7) { setVariant("hight_note")}

        if( vote < 4 ) { setVariant("low_note")}
    }

    return (
        <Container className="movie">
            <Link to={`/details/${movieContent.id}/${type}`}>
                <Image src={"https://image.tmdb.org/t/p/original/"+movieContent.poster_path} title={movieContent.title ? movieContent.title : movieContent.name} alt={"Poster do filme "+ movieContent.title}/>
                <AvaliableNote className={variant}>{movieContent?.vote_average.toFixed(1)}</AvaliableNote>
                <Overview className="overview">
                    <h1>{movieContent.title ? movieContent.title : movieContent.name}</h1>
                    <span> { movieContent.overview.length > 0 && movieContent?.overview.substring(0, 100) + "..."}</span>
                </Overview>
            </Link>
        </Container>
        
    )
 }