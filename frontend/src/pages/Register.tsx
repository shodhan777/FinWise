import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = async (name: string, email: string, password: string) => {
    try {
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password,email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful ✅ Please login");
        navigate("/login"); // 👈 Redirect to Login page
      } else {
        
        alert(data.message || "Registration failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};

export default Register;
