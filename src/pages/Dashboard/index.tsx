import Receive from "../../components/Receive"
import Sale from "../../components/Sale"
import { Main } from "./styles"

function Dashboard() {
    return (
        <Main>
            <Sale />
            <Receive />
        </Main>
    )
}

export default Dashboard