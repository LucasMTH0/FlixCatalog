import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    gap: 18px;
    padding: .625rem;

    position: absolute;
    top: 0;
    left: 0;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Link = styled(NavLink)`
        text-decoration: none;
        list-style: none;
        color: white;
        font-weight: bold;
        font-size: 22px;
`

export const NavContainer = styled.nav`
    display: flex;
    gap:1.5rem;
    flex: 1;
    text-align: center;
    justify-content: center;
    

`

export const ButtonSearch = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.COLORS.gray_300};
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    &::focus {
        border: 1px solid ${({ theme }) => theme.COLORS.gray_300 };
        background: ${({ theme }) => theme.COLORS.gray_900 };
    }
`