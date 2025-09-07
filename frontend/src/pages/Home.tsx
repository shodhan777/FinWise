import React from "react";

const Home: React.FC = () => {
  return (
    <div className="full-screen flex-center px-4 text-white bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="glass p-10 shadow-2xl max-w-2xl text-center rounded-3xl border border-white/20">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          Welcome to FinWise
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Your smart personal finance manager. Track your income, expenses, and achieve your goals.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/login"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
