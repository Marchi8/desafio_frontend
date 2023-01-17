import { Section } from "./styles"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ISale, SalesContext } from "../../contexts/SalesContext"
import { useContext } from "react"

function Sale() {

    const { onSubmit } = useContext(SalesContext)

    const formSchema = yup.object().shape({
        amount: yup.number().required("Valor necesário"),
        installments: yup.number().required("Parcelas necessário"),
        mdr: yup.number().required("MDR necessário")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<ISale>({
        resolver: yupResolver(formSchema)
    })

    return (
        <Section>
            <h1>Simule sua Antecipação</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Informe o valor da venda *</label>
                    <input placeholder="R$" type="number" {...register("amount")} />
                </div>
                <div>
                    <label htmlFor="">Em quantas parcelas *</label>
                    <input type="number" {...register("installments")} />
                    {/* <span>{errors.installments?.message}</span> */}
                </div>
                <div>
                    <label htmlFor="">Informe o percentual de MDR *</label>
                    <input type="number" {...register("mdr")} />
                </div>

                <button type="submit">Calcular</button>
            </form>
        </Section>
    )
}

export default Sale