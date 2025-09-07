import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home"; // 👈 Import Home

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> {/* 👈 Default route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
