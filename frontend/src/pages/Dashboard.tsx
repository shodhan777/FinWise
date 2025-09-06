import { useEffect, useState } from "react";

function Dashboard() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const frontendStatus = "Working"; // no setState needed

  useEffect(() => {
    fetch("http://localhost:5000/api/health") // replace with your backend URL
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Backend is working ✅") {
          setBackendStatus("Working ✅");
        } else {
          setBackendStatus("Error ❌");
        }
      })
      .catch(() => setBackendStatus("Error ❌")); // remove 'err'
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>
      <div>
        <p>
          <strong>Frontend:</strong> {frontendStatus}
        </p>
        <p>
          <strong>Backend:</strong> {backendStatus}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
