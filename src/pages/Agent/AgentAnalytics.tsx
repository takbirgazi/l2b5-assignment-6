import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { Users, CreditCard } from "lucide-react";
import { useGetTransactionSummeryQuery, useGetTransferMoneyQuery } from "@/redux/features/analytics/analytics.api";
import { useGetDataQuery } from "@/redux/features/auth/auth.api";
import { useGetMyTransactionQuery } from "@/redux/features/transaction/transaction.api";

const COLORS = ["#4f46e5", "#22c55e", "#f59e0b"];

export default function AgentAnalytics() {
    const { data: balance, isLoading } = useGetDataQuery(undefined);
    const { data: transferMoney } = useGetTransferMoneyQuery(undefined);
    const { data: transactionSummery } = useGetTransactionSummeryQuery(undefined);
    const { data: transactionCount } = useGetMyTransactionQuery({ search: "" });

    const transactions = transactionSummery?.data;
    const pieData = Object.entries(transferMoney?.data || {}).map(([key, value]) => ({
        name: (key == "CASH_OUT") ? "Cash Out" : (key == "CASH_IN") ? "Cash In" : (key == "SEND_MONEY") ? "Send Money" : (key == "RECEIVE_MONEY") ? "Receive Money" : key,
        value: value
    }));

    return (
        <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Admin Analytics
            </h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <Card className="shadow-md rounded-2xl">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>My Balance</CardTitle>
                        <Users className="text-indigo-600" />
                    </CardHeader>
                    <CardContent className="text-2xl font-bold"><span className="text-4xl">{!isLoading && Number(balance?.data?.wallet?.balance).toFixed(2)}</span> ৳</CardContent>
                </Card>

                <Card className="shadow-md rounded-2xl">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Transactions</CardTitle>
                        <CreditCard className="text-yellow-600" />
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">{transactionCount?.meta.total}</CardContent>
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