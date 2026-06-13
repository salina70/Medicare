import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAxios } from "../../lib/provider/axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const LoginValidation = (req, res, next) =>{
    try{
      const {email, password } = req.body;
      if(!email && !password){
        res.status(400).json({
          status:"failure",
          message:"email and password are required"
        })
      }
    }catch(error){
      next(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { axios } = useAxios();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", formData);

      console.log("Login success:", res.data);

      // Example: save token
      localStorage.setItem("token", res.data.token);

      // redirect after login
      navigate("/user-dashboard");
    } catch (error) {
      console.log("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl w-96">
        <h1 className="text-2xl text-white font-bold mb-6">Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded border-2 border-white"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded border-2 border-white"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button onClick={()=>{
          LoginValidation();
        }} className="w-full mt-4 bg-green-600 py-2 rounded">Login</button>
            <p className="text-center mt-3">New to account? <span className="text-red-500 cursor-default" onClick={
              ()=>navigate("/signup")
            }>Signup</span> </p>

      </form>
    </div>
  );
}

export default Login;
