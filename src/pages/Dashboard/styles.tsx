import styled from "styled-components";

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.2); 
    border-radius: 4px;
    width: 680px;
    
    @media(max-width:1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 320px;
        max-height: 100vh;
    }

    .componente1{
        background-color: white;
        width: 450px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .componente2{
        background-color: grey;
        width: 350px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export { Main }