import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    height: 100vh;
    max-width: 100%;

`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-block: 1rem;
`
export const Select = styled.select`
    padding: 1rem;
    border-radius: 7px;
    background: transparent;
`

export const InputSearch = styled.input`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.gray_300 };
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    padding: .5rem 1rem;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.gray_300 };
    }

    &:focus {
        outline: none;
    }
`

