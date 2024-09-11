import { Popcorn } from "@phosphor-icons/react";
import { Container, Link, NavContainer } from "./styles";
export function Header() {
 
    return (
        <Container>
            <Link to="/">
                <Popcorn size={32} />
            </Link>

            <NavContainer>
                <Link to="/list/movie">Filmes</Link>
                <Link to="/list/tv">Séries</Link>
            </NavContainer>

        </Container>

    )
}