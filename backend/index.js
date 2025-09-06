import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import authRoutes from "./routes/authRoutes.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is working ✅" });
});
// Test route
app.get("/", (req, res) => {
  res.send("FinWise backend is running 🚀");
});




app.use("/api/auth", authRoutes);




// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
