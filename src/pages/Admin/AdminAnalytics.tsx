"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { Users, CreditCard, Banknote, DollarSign } from "lucide-react";

// Dummy Data (Replace with RTK Query API calls)
const transactions = [
  { date: "Mon", amount: 1200 },
  { date: "Tue", amount: 2100 },
  { date: "Wed", amount: 800 },
  { date: "Thu", amount: 1600 },
  { date: "Fri", amount: 900 },
  { date: "Sat", amount: 2500 },
  { date: "Sun", amount: 1900 },
];

const pieData = [
  { name: "Cash In", value: 4000 },
  { name: "Cash Out", value: 2400 },
  { name: "Send Money", value: 1400 },
];

const COLORS = ["#4f46e5", "#22c55e", "#f59e0b"];

export default function AdminAnalytics() {
  const [summary] = useState({
    totalUsers: 1250,
    totalAgents: 120,
    totalTransactions: 15420,
    totalRevenue: 856000,
  });

  // Example: useEffect(() => { fetch from API via RTK Query }, []);

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Admin Analytics
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-md rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Users</CardTitle>
            <Users className="text-indigo-600" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">{summary.totalUsers}</CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Agents</CardTitle>
            <Banknote className="text-green-600" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">{summary.totalAgents}</CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Transactions</CardTitle>
            <CreditCard className="text-yellow-600" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">{summary.totalTransactions}</CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Revenue (BDT)</CardTitle>
            <DollarSign className="text-emerald-600" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {summary.totalRevenue.toLocaleString()}
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Weekly Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#4f46e5" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle>Transaction Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}