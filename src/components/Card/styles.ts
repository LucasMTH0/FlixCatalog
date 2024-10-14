import styled from "styled-components";

export const Container = styled.div`
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    margin-inline: 5px;
`
export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const AvaliableNote = styled.span`
    background: ${({ theme }) => theme.COLORS.gray_800};
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);

    border-radius: 7px;
    padding: 4px 8px;
    height: 2.5rem;

    display: flex;
    align-items: center;

    font-size: 1.2rem;
    font-weight: bold;
    font-family: inherit;

    position: absolute;
    top: 5px;
    right: 2px;
`

export const Overview = styled.div`
    background-color: rgba(0,0,0,0.6);
    color: ${({ theme }) => theme.COLORS.gray_300 };
    padding: 2rem;


    max-height: 74%;
    transform: translateY(101%);
    transition: 0.4s ease-in;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    h1 {
        text-align: center;
    }
    @media screen and (max-width <= 768px) {
        & {
            max-height: 100%;
            padding: 0 !important;
        }
        h1{
            font-size: 12px !important;
        }

    }
`

export const MovieDescription = styled.span`
    font-size: 1rem;
    @media screen and (width <= 768px) {
        font-size: .75rem;
        text-align: justify;
    }
`