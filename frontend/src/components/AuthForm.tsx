import React, { useState } from "react";



interface LoginProps {
  type: "login";
  onSubmit: (email: string, password: string) => Promise<void>;
}

interface RegisterProps {
  type: "register";
  onSubmit: (name: string, email: string, password: string) => Promise<void>;
}

type AuthFormProps = LoginProps | RegisterProps;

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "register") {
      onSubmit(name, email, password);
    } else {
      onSubmit(email, password);
    }
  };

  return (
    <div className="min-h-screen flex-center full-screen  items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="glass w-full max-w-md rounded-3xl shadow-2xl p-10 text-white border border-white/20"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          {type === "login" ? "Login to FinWise" : "Create an Account"}
        </h2>

        <div className="space-y-6">
          {type === "register" && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out"
          >
            {type === "login" ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
