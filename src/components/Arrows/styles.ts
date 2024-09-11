import styled from "styled-components";

export const Container = styled.div`
    display: "block";
    background: transparent;
    color: ${({ theme }) => theme.COLORS.gray_300};
    height: 40px;
    font-weight: bold;
`