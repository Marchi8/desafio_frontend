import styled from "styled-components";

const Aside = styled.aside`
    background-color: rgb(245, 249, 260);
    width: 20vw;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0px 10px 10px 0px;

    h4{
        font-style: italic;
        font-weight: 800;
        color: rgb(81, 135, 211);
        margin-top: 50px;
        margin-bottom: 5px;
    }

    div{
        background-color: rgb(81, 135, 211);
        width: 12vw;
        height: 1px;
        font-size: 0;
    }

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 0;
    }

    li{
        font-style: italic;
        font-weight: 300;
        color: rgb(81, 135, 211);
    }

    li>span{
        font-weight: 500;
    }
`
export { Aside }