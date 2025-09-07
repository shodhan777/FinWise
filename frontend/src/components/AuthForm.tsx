import React, { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[oklch(0.75_0.2_320)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 mx-4"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {type === "login" ? "Login to FinWise" : "Create an Account"}
        </h2>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.2_320)]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.2_320)]"
          />

          <button
            type="submit"
            className="w-full bg-[oklch(0.75_0.2_320)] hover:bg-[oklch(0.75_0.2_320/0.85)] text-white font-semibold py-3 rounded-xl transition"
          >
            {type === "login" ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
