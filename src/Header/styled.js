import styled from "styled-components";

export const StyledHeader = styled.header`
    font-size: 25px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.violet};
    text-transform: uppercase;
    padding: 60px;
`;