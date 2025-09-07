import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful ✅");
        navigate("/"); // 👈 Redirect to Home
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;
