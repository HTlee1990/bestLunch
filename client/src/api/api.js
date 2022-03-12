import axios from "axios";

export function signinApi(data) {
  return axios.post("http://localhost:3000/auth/signin", data, {
    credentials: true,
    withCredentials: true,
  });
}
export function loginApi(data) {
  return axios.post("http://localhost:3000/auth/login", data, {
    withCredentials: true,
  });
}

export function getATbyRT() {
  return axios.get("http://localhost:3000/auth/access_token", {
    credentials: "include",
    withCredentials: true,
  });
}
