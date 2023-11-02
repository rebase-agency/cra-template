import axios from "axios";
import { env } from "../../core/env";

export const axiosInstance = axios.create({
  baseURL: env.API_URL ?? "",
});
