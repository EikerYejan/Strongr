import axios from "axios"

const BASE_URL = "https://c0503o30j1.execute-api.us-east-1.amazonaws.com"

export const fetch = axios.create({baseURL: BASE_URL, method: "GET"})
