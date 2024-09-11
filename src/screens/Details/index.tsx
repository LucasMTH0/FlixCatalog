import { useParams } from "react-router-dom";
import { CardInfo, Container, ContainerRelated, Content, HeaderImage, HeaderWrapper, MovieContainerDetails, MovieContentContainer, MovieGenre, SubTitle, Title, Video, WrapperImage } from "./styles";
import { getMoviesByGenre, getResultById, getTrailerLink } from "../../services/api";
import { useEffect, useState } from "react";
import { Movie } from "../../interfaces/Movie";
import { Calendar, Clock, Star } from "@phosphor-icons/react";
import { Card } from "../../components/Card";
import Slider from "react-slick";
import { SliderCardItem } from "../../components/slider";
import { SliderContainer } from "../../components/SliderContainer";

export function Detail() {
    const { id, type } = useParams()
    const [movie, setMovie] = useState<Movie>()
    const [trailer, setTrailer] = useState('')
    const [ relatedMovies, setRelatedMovies] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    async function loadSelected(){
        const { data } = await getResultById(id, type)
        setMovie(data)
        await getMovies()
        await getTrailer(data.name)

    }
    async function getMovies(){
        let genre = 0
        if(movie.genres){
            genre = movie?.genres[0].id
        } else {
            genre = movie?.genre_ids[0]
        }
        const {data} = await getMoviesByGenre(type, genre)
        console.log("relacionados: ", data.results)
        setRelatedMovies(data.results)
    }
    async function getTrailer(movieTitle: string){
        const data = await getTrailerLink(movieTitle)
        setTrailer(String(data))
    }

    useEffect(() => {
        loadSelected()
    }, [])
    return (
        <Container>
            <HeaderImage $imageUrl={"https://image.tmdb.org/t/p/original/"+movie?.backdrop_path} >
                <HeaderWrapper>
                    <Title>{movie?.title ? movie?.title : movie?.name}</Title>
                    <SubTitle>{movie?.tagline}</SubTitle>
                    <p>{movie?.overview}</p>
                    <MovieContainerDetails>
                        { movie?.genres.map(genre => <MovieGenre>{genre.name}</MovieGenre>) }
                    </MovieContainerDetails>
                    <MovieContainerDetails>
                        {   type == "movie" && 
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
                            <Calendar size={40}/>
                            {
                                type == "movie" ? `${new Date(movie?.release_date).getDay()}/${new Date(movie?.release_date).getMonth()}/${new Date(movie?.release_date).getFullYear()}`
                                                : `${new Date(movie?.first_air_date).getDay()}/${new Date(movie?.first_air_date).getMonth()}/${new Date(movie?.first_air_date).getFullYear()}`
                            }
                            { }
                        </CardInfo>

                        {
                            type == "tv" && 
                            <CardInfo>
                                <span>Temp</span>
                                {movie?.seasons.length}
                            </CardInfo>
                        }


                    </MovieContainerDetails>
                </HeaderWrapper>

                {
                    trailer && (
                        <HeaderWrapper>
                            <Video src={trailer}></Video>
                        </HeaderWrapper>
                    )
                }
                
            </HeaderImage>
            
            
            {
                relatedMovies && (
                    <ContainerRelated>
                        <Content>
                                <h1>Relacionados</h1>
                            <SliderContainer >
                                {
                                    relatedMovies.map(movie => {
                                        return(
                                            <SliderCardItem {...settings}>
                                                <Card movieContent={movie} type={String(type)}/>
                                            </SliderCardItem>
                                        )
                                    })
                                }
                            </SliderContainer >
                        </Content> 
                    </ContainerRelated>
                )
            }

        </Container>
    )
}