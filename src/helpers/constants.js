import { getToken } from "."

export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/karla-natany-joy"

export const axiosConfigWithAuth = {
  headers: {
    'Content-Type': 'application/json',
    auth: getToken()
  }
}

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}