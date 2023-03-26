import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    left: 1408px;
    top: 112px;
    background-image: url("../src/assets/img/bg-todo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom right;
    box-shadow: 0px 4px 4px rgba(0.25, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 25px;
    margin: 0 auto;

    .title{
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
        color: #f29c24;
        mix-blend-mode: normal;
    }

    @media screen and (min-width: 1200px){
            width: 65vw;
            min-height: 80vh;
    }
`
