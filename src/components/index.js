import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
}
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    gap: ${(props) => props.gap || '16px'};
`

export const Spacer = styled.div`
    width: 100%;
    margin: ${(props) => props.margin || '20px'};
`



