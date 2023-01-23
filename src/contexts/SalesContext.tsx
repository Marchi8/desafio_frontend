import { ReactNode, useState, createContext } from "react";
import { API } from "../services/api";
import { toast } from "react-toastify";

export interface ISalesProps {
    children: ReactNode;
}

export interface ISale {
    amount: number;
    installments: number;
    mdr: number;
    days?: any[];
}

export interface ISaleContext {
    sale: {};
    onSubmit: (data: ISale) => void;
}

export const SalesContext = createContext<ISaleContext>({} as ISaleContext)

function SalesProvider({ children }: ISalesProps) {

    const [sale, setSale] = useState({})

    const onSubmit = (data: ISale) => {

        data.days = [data.days ? Number(data.days) : 1, 1, 15, 30, 90]

        API.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
            .then(res => {
                setSale(res.data)
            })
            .catch(err => {
                toast.error(err.response.data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    return (
        <SalesContext.Provider value={{ sale, onSubmit }}>
            {children}
        </SalesContext.Provider>
    )
}

export default SalesProvider