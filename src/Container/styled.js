import styled from "styled-components";

export const StyledContainer = styled.main`
    border: 10px solid ${({theme}) => theme.colors.violet};
    max-width: 500px;
    padding: 20px;
    margin: 50px 0;
    text-align: center;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 15px;
    box-shadow: 10px 10px ${({theme}) => theme.colors.white};
    display: inline-block;
`;

export const Link = styled.a`
    color: ${({theme}) => theme.colors.violet};
    text-decoration: none;

    &:hover {
        color: ${({theme}) => theme.colors.black};   
    }

`;

