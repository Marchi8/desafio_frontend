import { useContext } from "react"
import { SalesContext } from "../../contexts/SalesContext"
import { Aside } from "./styles"

function Receive() {

    const { sale } = useContext(SalesContext)

    return (
        <Aside>
            <h4>VOCÊ RECEBERÁ:</h4>
            <div />
            <ul>
                {Object.keys(sale).length ? (
                    Object.entries(sale).map(([day, value]: any) => {
                        if (day == "1") {
                            day = "Amanhã"
                            return (
                                <li key={day}>{`${day}: `}
                                    <span>
                                        {`R$ ${value.toFixed(2).replace(".", ",")}`}
                                    </span>
                                </li>
                            )
                        }
                        return (
                            <li key={day}>{`Em ${day} dias: `}
                                <span>
                                    {`R$ ${value.toFixed(2).replace(".", ",")}`}
                                </span>
                            </li>
                        )
                    })) : (
                    <>
                        <li >Amanhã: <span>R$ 0,00</span></li>
                        <li >Em 15 dias: <span>R$ 0,00</span></li>
                        <li >Em 30 dias: <span>R$ 0,00</span></li>
                        <li >Em 90 dias: <span>R$ 0,00</span></li>
                    </>
                )}
            </ul>
        </Aside>
    )
}

export default Receive