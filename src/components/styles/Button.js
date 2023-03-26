import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 40px;
    width: 112px;
    height: 50px;
    background: #f29c24;
    border-radius: 10px;
    border: none;
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
`