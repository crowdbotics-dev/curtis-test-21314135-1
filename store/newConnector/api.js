import axios from "axios"
import {
  NEW_CONNECTOR2_USERNAME,
  NEW_CONNECTOR2_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://google.ca",
  auth: {
    username: NEW_CONNECTOR2_USERNAME,
    password: NEW_CONNECTOR2_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
