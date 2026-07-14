import axios from "axios";

const createAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
  });

  axiosInstance.interceptors.request.use((request) => {
    const storedToken = localStorage.getItem("token");
    let token = storedToken;

    try {
      const parsed = JSON.parse(storedToken);
      token = parsed?.token || storedToken;
    } catch {
      token = storedToken;
    }

    if (token && token !== "null") {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  });

  return axiosInstance;
};

export default createAxios;
