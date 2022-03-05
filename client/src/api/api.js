import axios from "axios"

export function signinApi(data) {
  return axios.post("http://localhost:3000/auth/signin", data)
}
export function loginApi(data) {
  return axios.post("http://localhost:3000/auth/login", data)
}
