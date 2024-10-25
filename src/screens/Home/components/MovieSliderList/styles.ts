import styled from "styled-components";

export const ContainerMovieList = styled.div`
    max-width: 1650px;
    width: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin-block: 1rem;
`

export const SliderTitle = styled.h1`
    @media screen and (width <= 768px){
        &{
            text-align: center;
        }
    }
`