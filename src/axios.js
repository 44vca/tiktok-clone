import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-sonny.herokuapp.com/",
});

export default instance;
