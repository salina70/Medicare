import createAxios from "../../lib/axios";

const axios = createAxios();

export const Login = async (credentials) => {
  const { data } = await axios.post("/auth/login", credentials);

  return data;
};
