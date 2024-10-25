import styled from "styled-components";

export const TrailerContainer = styled.div`
       z-index: 1;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       margin: 2rem;
       gap: 1rem;
       max-width: 600px;
`

export const Video = styled.iframe`
    background: transparent;
    border: 0;
    border-radius: 5px;
    min-width: 600px;
    min-height: 350px;
    width: 100%;
    height: 100%;
    box-shadow: none!important;
    @media screen and (width <= 768px){
        & {
            min-width: 100px;
            max-width: 100% !important;
            width: 100% !important;
            padding: 0;
            margin: 0;
        }
    }
`