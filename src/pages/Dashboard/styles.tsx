import styled from "styled-components";

const Main = styled.main`
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    // width: 500px;
    // height: 100vh;    
    
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