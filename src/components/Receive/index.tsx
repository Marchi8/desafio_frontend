import { useContext } from "react"
import { SalesContext } from "../../contexts/SalesContext"
import { Aside } from "./styles"

function Receive() {
    const { sale } = useContext(SalesContext)
    console.log(Object.entries(sale))
    return (
        <Aside>
            <h4>VOCÊ RECEBERÁ:</h4>
            <div>.</div>
            <ul>
                {Object.entries(sale).map(([key, value]) => (
                    <li key={key}>{`${key}: ${value}`}</li>
                ))}
                {/* {Object.keys(sale).map((element) => (
                    <li key={element}>{element}</li>
                ))} */}
            </ul>
        </Aside>
    )
}

export default Receive