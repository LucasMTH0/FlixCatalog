import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1.5rem;
    margin-block: 1rem;
    @media screen and (width <= 768){
        gap: .3125rem !important;
    }
`
export const Select = styled.select`
    border-radius: 7px;
    padding: .625rem;
    background-color: black;
    color: white;
    option {
        background: transparent;
    }
`


export const InputSearch = styled.input`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.gray_300 };
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 10px;
    
    &:placeholder {
        color: ${({ theme }) => theme.COLORS.gray_300 };
    }

    &:focus {
        outline: none;
    }
    @media screen and (width <= 768px){
        width: 8rem;
    }
`

export const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: .625rem
    
`

