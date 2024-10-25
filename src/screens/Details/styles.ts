import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;    
    overflow: hidden;

`

export const WrapperImage = styled.div`
    display: flex;
    gap: 1rem;
`

export const HeaderImage = styled.div<{ $imageUrl: string}>`
    width: 100%;
    height: 100vh;
    padding-top: 1.5rem;

    background-image: url( ${ props => props.$imageUrl });
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
    }

    @media (width <= 768px){
        & {
            margin-bottom: 6rem;
            padding-top: 3rem;
        }
    }
`

export const HeaderWrapper = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    gap: 1rem;
    max-width: 600px;
`
export const MovieContainerDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MovieGenre = styled.span`
    border: 1px solid ${({ theme }) => theme.COLORS.gray_300 };
    border-radius: 25px;
    padding: 10px;
    text-align: center;
    margin: 10px 5px;
    background: transparent;
    backdrop-filter: blur(10px);
    @media screen and (max-width <= 768px) {
        font-size: 8px;
    }
`

export const Image = styled.img`
    max-width: 560px;
    max-height: 100%;
    border-radius: 7px;
`

export const BackdropImage = styled.img`

`

export const CardInfo = styled.div`
    border: 1px solid ${({ theme }) => theme.COLORS.gray_300 };
    border-radius: 7px;
    padding: 8px;
    margin: 0 10px 10px 10px;
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: transparent;
    backdrop-filter: blur(10px);
`

export const MovieContentContainer = styled.div`
    width: 37.5rem;
`

export const Title = styled.h1`
    text-align: center;
`
export const SubTitle = styled.i`
    text-align: center;
`

export const Content = styled.div`
    max-width: 1650px;
    width: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;

`

export const ContainerRelated = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-block: 1rem;
`




export const SliderTitle = styled.h1`

    @media screen and (width <= 768px){
        & {
            text-align: center;
        }
    }
`