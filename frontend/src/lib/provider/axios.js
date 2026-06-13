import axios from "axios";
export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
  });

  axiosInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token && token != null && token != "null")
      request.headers["Authorization"] = `Bearer ${token}`;

    return request;
  });

  return { axios: axiosInstance };
};
