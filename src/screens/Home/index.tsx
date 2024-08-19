import { useEffect, useState } from "react"
import { Movie } from "../../interfaces/Movie"
import { Card } from "../../components/Card"
import { Container, MovieWrapper } from "./styles"
import { getLatestMovies, getRelatedMovies } from "../../services/api"

export function Home() {
    const [relatedMovies, setRelatedMovies] = useState([])
    const [latestMovies, setLatestMovies] = useState([])

    async function loadRelatedMovies() {
        const {data} = await getRelatedMovies()
        setRelatedMovies(data.results)
    }

    async function loadLatestMovies() {
        const {data} = await getLatestMovies()
        setLatestMovies(data.results)
    }


    useEffect(() => {
        loadRelatedMovies()
        loadLatestMovies()
    }, [])

    return (
        <Container>
            <MovieWrapper>
                {
                    relatedMovies.map((movie: Movie) => {
                        return (
                            <Card movieContent={movie} key={movie.id}/>
                        )
                    })
                }
            </MovieWrapper>
            {/* <MovieWrapper>
                {
                    latestMovies.map((movie: Movie) => {
                        return (
                            <Card movieContent={movie} key={movie.id}/>
                        )
                    })
                }
            </MovieWrapper> */}
        </Container>
    )
}