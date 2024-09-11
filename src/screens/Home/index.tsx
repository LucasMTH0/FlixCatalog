import { useEffect, useState, useTransition } from "react"
import { Movie } from "../../interfaces/Movie"
import { Card } from "../../components/Card"
import { Container,  Wrapper } from "./styles"
import { Loading } from "../../components/Loading"
import { getAPIList } from "../../services/api"
import { SliderContainer } from "../../components/SliderContainer"
import { SliderCardItem } from "../../components/slider"

export function Home() {
    const [ratedMovies, setRatedMovies] = useState([])
    const [ratedTVSeries, setRatedTVSerie] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [ isPending, startTransition] = useTransition()

    async function getUpcomingMovies(){
        const {data} = await getAPIList({ category: "movie", filter: "upcoming"})
        setUpcomingMovies(data.results)
    }
    async function getRelatedMovies() {
        const {data} = await getAPIList({ category: "movie", filter: "top_rated"})
        setRatedMovies(data.results)
    }
    async function getRatedSeries() {
        const {data} = await getAPIList({ category: "tv", filter: "top_rated"})
        setRatedTVSerie(data.results)
    }

    useEffect(() => {
        startTransition(() => {
            getUpcomingMovies()
            getRelatedMovies()
            getRatedSeries()
        })
    }, [])

    return (
        <Container>
            {
                isPending ?
                <Loading/>
                :
                <>
                    <Wrapper>
                        <h1>Filmes recentes</h1>
                        <SliderContainer>
                            {
                                upcomingMovies.map((movie: Movie) => {
                                    return (
                                        <SliderCardItem>
                                            <Card movieContent={movie} type="movie"/>
                                        </SliderCardItem>
                                    )
                                })
                            }
                        </SliderContainer >
                    </Wrapper>

                    <Wrapper>
                        <h1>Filme mais bem avaliados</h1>
                        <SliderContainer>
                            {
                                ratedMovies.map((movie: Movie) => {
                                    return (
                                        <SliderCardItem>
                                            <Card movieContent={movie} type="movie"/>
                                        </SliderCardItem>
                                    )
                                })
                            }
                        </SliderContainer >
                    </Wrapper>

                    <Wrapper>
                        <h1>Séries mais bem avaliadas</h1>
                        <SliderContainer>
                            {
                                ratedTVSeries.map((movie: Movie) => {
                                    return (
                                        <SliderCardItem>
                                            <Card movieContent={movie} type="tv"/>
                                        </SliderCardItem>
                                    )
                                })
                            }
                        </SliderContainer>
                    </Wrapper>
                </>

            }

        </Container>
    )
}