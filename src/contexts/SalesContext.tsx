import { ReactNode, useState, createContext } from "react";
import { API } from "../services/api";

export interface ISalesProps {
    children: ReactNode;
}

export interface ISale {
    amount: number;
    installments: number;
    mdr: number;
}

export interface ISaleContext {
    sale: {};
    onSubmit: (data: ISale) => void;
}

export const SalesContext = createContext<ISaleContext>({} as ISaleContext)

function SalesProvider({ children }: ISalesProps) {

    const [sale, setSale] = useState({})

    const onSubmit = (data: ISale) => {
        API.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
            .then(res => {
                setSale(res.data)
            })
            .catch(err => console.log(err.response.data))
    }

    return (
        <SalesContext.Provider value={{ sale, onSubmit }}>
            {children}
        </SalesContext.Provider>
    )
}

export default SalesProvider