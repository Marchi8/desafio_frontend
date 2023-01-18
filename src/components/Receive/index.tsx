import { useContext } from "react"
import { SalesContext } from "../../contexts/SalesContext"
import { Aside } from "./styles"

function Receive() {
    const { sale } = useContext(SalesContext)
    return (
        <Aside>
            <h4>VOCÊ RECEBERÁ:</h4>
            <div>.</div>
            <ul>
                {Object.entries(sale).map(([day, value]: any) => {
                    if (day == "1") {
                        day = "Amanhã"
                        return (<li key={day}>{`${day}: `}
                            <span>{`R$ ${value.toFixed(2).replace(".", ",")}`}</span>
                        </li>)
                    }
                    return (<li key={day}>{`Em ${day} dias: `}
                        <span>{`R$ ${value.toFixed(2).replace(".", ",")}`}</span>
                    </li>)
                })}
            </ul>
        </Aside>
    )
}

export default Receive