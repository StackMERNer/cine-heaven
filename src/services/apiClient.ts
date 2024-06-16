// import axios, { AxiosError, AxiosRequestConfig } from "axios";

// export interface ErrorResponse {
//   message: string;
//   error: string;
// }
// interface ErrorDetails {
//   message: string;
//   error: string;
// }
// export type AxiosErrorWithDetails = AxiosError<ErrorDetails>;

// export type FetchResponse<T> = T;

// const axiosInstance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     api_key: "e48823196edf2f1c686f36c097edd590",
//   },
// });

// class APIClient<T> {
//   endpoint: string;
//   controller: AbortController | null = null; // Variable to hold the AbortController
//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   get = (config?: AxiosRequestConfig) => {
//     // Create a new AbortController for the current request
//     this.controller = new AbortController();
//     // Add the signal to the request config
//     const requestConfig: AxiosRequestConfig = {
//       ...config,
//       signal: this.controller.signal,
//     };
//     return axiosInstance
//       .get<T>(this.endpoint, requestConfig)
//       .then((res) => res.data);
//   };
//   post = (data: unknown, config?: AxiosRequestConfig) => {
//     this.controller = new AbortController();
//     const requestConfig: AxiosRequestConfig = {
//       ...config,
//       signal: this.controller.signal,
//     };
//     return axiosInstance
//       .post<FetchResponse<T>>(this.endpoint, data, requestConfig)
//       .then((res) => {
//         return res.data;
//       });
//   };
//   patch = (data: unknown, config?: AxiosRequestConfig) => {
//     // Create a new AbortController for the current request
//     this.controller = new AbortController();
//     // Add the signal to the request config
//     const requestConfig: AxiosRequestConfig = {
//       ...config,
//       signal: this.controller.signal,
//     };
//     return axiosInstance
//       .patch<FetchResponse<T>>(this.endpoint, data, requestConfig)
//       .then((res) => res.data);
//   };

//   // Method to cancel the current request
//   cancelRequest = () => {
//     if (this.controller) {
//       this.controller.abort();
//       this.controller = null;
//     }
//   };
// }

// export default APIClient;
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e48823196edf2f1c686f36c097edd590",
  },
});

export default apiClient;
