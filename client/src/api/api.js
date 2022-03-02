import axios from "axios"

export function signInApi(data) {
  return axios.post("http://localhost:3000/auth/signIn", data)
}
