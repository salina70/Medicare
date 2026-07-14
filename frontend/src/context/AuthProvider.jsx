import { useEffect } from "react";
import axios from "axios";

export function AuthProvider({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const verifyUser = async () => {
      try {
        await axios.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    };
    verifyUser();
  }, []);
  return children;
}
