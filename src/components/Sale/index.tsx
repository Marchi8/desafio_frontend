import { Errors, Section } from "./styles"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ISale, SalesContext } from "../../contexts/SalesContext"
import { useContext } from "react"

function Sale() {

    const { onSubmit } = useContext(SalesContext)

    const formSchema = yup.object().shape({
        amount: yup.number().required().typeError("Campo obrigatório")
            .min(1000, "o valor deve ser maior ou igual a 1.000"),

        installments: yup.number()
            .required()
            .typeError("Máximo de 12 parcelas")
            .min(1, "deve ser menor ou igual a 1")
            .max(12, "deve ser menor ou igual a 12"),

        mdr: yup.number().required().typeError("Campo obrigatório"),

        days: yup.string().nullable(true)
            .transform((_, val) => val === val ? val : null),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<ISale>({
        resolver: yupResolver(formSchema)
    })

    return (
        <Section>
            <h1>Simule sua Antecipação</h1>
            <form onChange={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Informe o valor da venda *</label>
                    <input type="number" {...register("amount")} />
                    <Errors>{errors.amount?.message}</Errors>
                </div>
                <div>
                    <label htmlFor="">Em quantas parcelas *</label>
                    <input type="number" {...register("installments")} />
                    <Errors>{errors.installments?.message}</Errors>
                </div>
                <div>
                    <label htmlFor="">Informe o percentual de MDR *</label>
                    <input type="number" {...register("mdr")} />
                    <Errors>{errors.mdr?.message}</Errors>
                </div>
                <div>
                    <label htmlFor="">Em quantos dias (Opcional)</label>
                    <input {...register("days")} />
                    <Errors>{errors.days?.message}</Errors>
                </div>
            </form>
        </Section>
    )
}

export default Sale