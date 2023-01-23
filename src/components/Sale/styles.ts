import styled from "styled-components";

const Section = styled.section`
    background-color: white;
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    border-radius: 7px 0px 0px 7px; 

    @media(max-width:1000px) {
        width: 100%;
        border-radius: 7px 7px 0px 0px;
        justify-content: flex-start;  
    }

    h1{
        color: rgb(100, 100, 100);

        @media(max-width:1000px) {
            font-size:26px;
            font-weight: 800;
        }
    }
    
    form{
        display: flex;
        flex-direction: column;

        @media(max-width:1000px) {
            width: 90%;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;

        @media(max-width:1000px) {
            width: 100%;
            height: 100%;
        }
    }

    label{
        margin-bottom: 10px;
        font-size: 15px;
        color: gray;
    }

    input{
        width: 280px;
        font-size: 15px;
        height: 30px;
        border: none;
        box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.2); 
        border-radius: 3px;

        @media(max-width:1000px) {
            width: 90%;
            height: 30px;
        }
    }
`

const Errors = styled.span`
    font-size: 11px;
    height: 2px;
    color: rgb(183, 181, 181);
    margin-top: 5px;
    margin-bottom: 5px;
    z-index: 2;
`
export { Section, Errors }