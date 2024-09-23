
import axios from "axios";

// http://192.168.1.12:3333 /create
export const api = axios.create({
  baseURL: "http://192.168.1.104:3333"
})