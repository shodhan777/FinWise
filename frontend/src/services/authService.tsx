import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (name: string, email: string, password: string) => {
  const res = await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
  return res.data;
};

export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });
  return res.data;
};
