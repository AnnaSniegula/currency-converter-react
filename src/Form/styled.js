import styled from "styled-components";

export const FormFieldset = styled.fieldset`
    border: none;  
`;

export const FormComment = styled.p`
    font-size: 12px; 
`;

export const FormButton = styled.button`
    margin: 7px;
    cursor: pointer;
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.colors.crimson};
`;

export const Loading = styled.p`
color: ${({ theme }) => theme.colors.violet};
`;


