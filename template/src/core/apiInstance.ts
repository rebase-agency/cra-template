import axios from "axios";
import { env } from "./env";

export const apiInstance = axios.create({
  baseURL: env.API_URL ?? "",
});
