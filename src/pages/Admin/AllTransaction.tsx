import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


// Mock data for demo
const transactions = [
  { id: "TXN001", user: "Rahim", type: "Cash In", amount: 500, status: "Success", date: "2025-08-01" },
  { id: "TXN002", user: "Karim", type: "Send Money", amount: 200, status: "Pending", date: "2025-08-10" },
  { id: "TXN003", user: "Admin", type: "Cash Out", amount: 1000, status: "Failed", date: "2025-08-15" },
  { id: "TXN004", user: "Agent123", type: "Receive", amount: 700, status: "Success", date: "2025-08-18" },
]

export default function AllTransaction() {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    status: "all",
    fromDate: "",
    toDate: "",
  })

  const filteredData = transactions.filter(txn => {
    const matchSearch = txn.user.toLowerCase().includes(filters.search.toLowerCase()) || txn.id.includes(filters.search)
    const matchType = filters.type === "all" || txn.type === filters.type
    const matchStatus = filters.status === "all" || txn.status === filters.status
    const matchDate =
      (!filters.fromDate || new Date(txn.date) >= new Date(filters.fromDate)) &&
      (!filters.toDate || new Date(txn.date) <= new Date(filters.toDate))
    return matchSearch && matchType && matchStatus && matchDate
  })

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">All Transactions History</h1>

      {/* Filters */}
      <Card>
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Search */}
          <Input
            placeholder="Search by User or Txn ID"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />

          {/* Type Filter */}
          <Select onValueChange={(v) => setFilters({ ...filters, type: v })} defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Transaction Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Cash In">Cash In</SelectItem>
              <SelectItem value="Cash Out">Cash Out</SelectItem>
              <SelectItem value="Send Money">Send Money</SelectItem>
              <SelectItem value="Receive">Receive Money</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select onValueChange={(v) => setFilters({ ...filters, status: v })} defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Success">Success</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Failed">Failed</SelectItem>
            </SelectContent>
          </Select>

          {/* From Date */}
          <Input
            type="date"
            onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
          />

          {/* To Date */}
          <Input
            type="date"
            onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
          />
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Txn ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.id}</TableCell>
                    <TableCell>{txn.user}</TableCell>
                    <TableCell>{txn.type}</TableCell>
                    <TableCell>${txn.amount}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          txn.status === "Success"
                            ? "bg-green-100 text-green-700"
                            : txn.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </TableCell>
                    <TableCell>{txn.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    No transactions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}