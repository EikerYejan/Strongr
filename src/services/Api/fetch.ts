import axios from "axios"

export const API_BASE_URL =
  "https://c0503o30j1.execute-api.us-east-1.amazonaws.com"

export const fetch = axios.create({baseURL: API_BASE_URL, method: "GET"})
