const axios = require("axios").default;

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const signIn = ({ email, password }) => {
    
  return axios.post("login/", {
    email: email,
    password: password,
  });
};


export const signUp = (inputs) => {
  return axios.post("register/", inputs);
};