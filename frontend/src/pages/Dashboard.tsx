import React, { useEffect, useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [backendStatus, setBackendStatus] = useState<string>("Checking...");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL as string;

    axios
      .get(`${API_URL}/api/health`)
      .then((res) => setBackendStatus(res.data.status))
      .catch((err) => setBackendStatus("Backend not reachable ❌"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend is working ✅</h1>
      <h2>{backendStatus}</h2>
    </div>
  );
};

export default App;
