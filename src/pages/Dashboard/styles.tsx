import styled from "styled-components";

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    // border: 2.4px solid rgb(161, 171, 191);
    // opacity: 1px;
    box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.2); 
    border-radius: 10px;

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