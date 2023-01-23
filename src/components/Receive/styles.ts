import styled from "styled-components";

const Aside = styled.aside`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0px 10px 10px 0px;

    @media(max-width:1000px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border-radius: 0px 0px 10px 10px;
    }
    
    h4{
        font-style: italic;
        font-weight: 800;
        font-size: 18px;
        color: rgb(81, 135, 211);
        margin-bottom: 5px;
        margin-left: -30px;

        @media(max-width:1000px) {
            font-size:24px;
        }
    }
    
    div{
        background-color: rgb(133, 168, 218);
        width: 200px;
        height: 1px;
        font-size: 0;
        margin-bottom: 12px;
        margin-left: 15px;

        @media(max-width:1000px) {
            width: 250px;
        }
    }
    
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
        padding: 0;
        
        @media(max-width:1000px) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }
    
    li{
        font-style: italic;
        font-size: 18px;
        font-weight: 400;
        color: rgb(81, 135, 211);
        margin-bottom: 25px;

        @media(max-width:990px) {
            width: 250px;
            font-size: 20px;
            margin-bottom: 15px;
        }
    }
    
    li>span{
        font-weight: 500;
    }
`
export { Aside }