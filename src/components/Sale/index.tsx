import { Section } from "./styles"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

export interface ISale {
    amount: number;
    installments: number;
    mdr: number;
}

function Sale() {
    const formSchema = yup.object().shape({
        amount: yup.number().required("Valor necesário"),
        installments: yup.number().required("Parcelas necessário"),
        mdr: yup.number().required("MDR necessário")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<ISale>({
        resolver: yupResolver(formSchema)
    })
    return (
        <Section>componente 1</Section>
    )
}

export default Sale