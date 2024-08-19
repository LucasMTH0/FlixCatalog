import { MagnifyingGlass, Popcorn } from "@phosphor-icons/react";
import { ButtonSearch, Container, InputSearch, NavContainer } from "./styles";
import { useState } from "react";
export function Header() {
    const [isSearchEnabled, setIsSearchEnabled] = useState(false);
    const [searchText, setSearchText] = useState('');

    function handleSearch(){
        if(isSearchEnabled == false){
            setIsSearchEnabled(true);
        } else if(searchText.length == 0){
            setIsSearchEnabled(false);
        }
        console.log(searchText);
    }

    return (
        <Container>
            <Popcorn size={32} />
            <NavContainer>
                <span>Filmes</span>
                <span>Séries</span>
            </NavContainer>
            { isSearchEnabled && <InputSearch onChange={({target}) => setSearchText(target.value)} placeholder="Buscar por..." /> }
            <ButtonSearch onClick={handleSearch}>
                <MagnifyingGlass  size={32} />
            </ButtonSearch>
        </Container>

    )
}