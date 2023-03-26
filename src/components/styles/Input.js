import styled from "styled-components";

export const Input = styled.input`
    padding: 8px 24px;
    width: 224px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #f29c24;

    &::placeholder{
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #caba98;
    }
    
    @media screen and (min-width: 960px){
        width: 600px;
    }
`
