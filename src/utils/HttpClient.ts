import axios, { AxiosInstance } from "axios";
import { envs } from "~/main";

class HttpClient {
  instance: AxiosInstance;

  constructor(baseUrl?: string) {
    this.instance = axios.create({
      baseURL: baseUrl ?? envs.NODE_SERVER,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const httpClient = new HttpClient().instance;
