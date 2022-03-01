import axios from "axios"

export async function signInApi(data) {
  const res = await axios.post("http://localhost:3000/auth/signIn", data)
  console.log(res)
}
