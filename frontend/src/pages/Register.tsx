import React from "react";
import AuthForm from "../components/AuthForm";

const Register: React.FC = () => {
  const handleRegister = async (email: string, password: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful ✅ Please login");
        // redirect to login page
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
