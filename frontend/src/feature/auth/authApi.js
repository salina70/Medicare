import axios from "../../lib/provider/axios";

export const login = async (credentials) => {
  const { data } = await axios.post("/auth/login", credentials);

  return data;
};
