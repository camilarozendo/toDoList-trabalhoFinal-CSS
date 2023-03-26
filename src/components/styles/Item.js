import styled from "styled-components";

export const Item = styled.li`
    padding: 13px 10px 13px 24px;
    width: 354px;
    min-height: 50px;
    background: ${(props) => (props.checked ? '#cacf33' : '#ffffff')}; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

        @media screen and (min-width: 960px){
            width: 724px;
    }
    
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration: ${(props) => (props.checked ? 'line-through' : '')};
        color: ${(props) => (props.checked ? '#000000' : '#f29c24')};
        width: 80%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    i{
        font-size: 24px;
        color: ${(props) => (props.checked ? '#000000' : '#f29c24')};
    }

    button{
        background:  transparent;
        border: none;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
    }
`