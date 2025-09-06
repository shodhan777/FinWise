import React, { useEffect, useState } from "react";
import axios from "axios";

// Define TypeScript types for your data
interface Expense {
  id: number;
  category: string;
  amount: number;
  description?: string;
  date?: string;
}

const Dashboard: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL as string;

    axios
      .get<Expense[]>(`${API_URL}/api/expenses`)
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Expenses</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.category}: ₹{expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
