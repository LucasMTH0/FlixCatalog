import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(calc(50vw - 50%));

    background: rgba(0,0,0,0.6);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 1.5em;
    color: white;
`