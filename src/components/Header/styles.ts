import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    gap: 18px;
    padding: .625rem;

    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
`

export const InputSearch = styled.input`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.gray_300 };
    border-radius: 7px;
    padding: 8px;
`

export const NavContainer = styled.nav`
    flex: 1;
    gap:1.5rem;
`

export const ButtonSearch = styled.button`
    background: transparent;
`