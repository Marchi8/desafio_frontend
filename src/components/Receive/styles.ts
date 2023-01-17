import styled from "styled-components";

const Aside = styled.aside`
    background-color: rgb(245, 249, 260);
    width: 20vw;
    height: 420px;
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    align-items: center;
    justify-content: center;
    border-radius: 0px 10px 10px 0px; 
    // margin-left: 60px;


    h4{
        font-style: italic;
        font-weight: 800;
        color: rgb(81, 135, 211);
        // margin-left: -10px;
        margin-top: 50px;
        margin-bottom: 5px;
        // background-color: black;
        // display: flex;
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
        // justify-content: flex-start;
        flex-direction: column;
        background-color: rgb(81, 135, 211);
        // text-align: center;
        width: 500px;
        // text-align: center;
        padding: 0;
    }
// PAREI AGUI
    li{
        // display: flex;
        display: inline-block;
        // flex-direction: row;
        // align-items: flex-start;
        // justify-content: flex-start;
        // margin-left: -100px;
        background-color: pink;
        // font-style: italic;
        font-weight: 800;
        color: rgb(81, 135, 211);
        // width: 50px;

    }
`
export { Aside }