import axios from "axios"

export const API = axios.create({
    baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
    timeout: 5000
})