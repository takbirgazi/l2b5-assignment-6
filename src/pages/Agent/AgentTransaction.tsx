import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"

interface Transaction {
  id: string
  type: "cashin" | "cashout" | "commission"
  amount: number
  date: string
  user: string
}

export default function AgentTransaction() {
  const [transactions] = useState<Transaction[]>([
    { id: "1", type: "cashin", amount: 5000, date: "2025-08-20", user: "017XXXXXXXX" },
    { id: "2", type: "cashout", amount: 2000, date: "2025-08-19", user: "018XXXXXXXX" },
    { id: "3", type: "commission", amount: 150, date: "2025-08-18", user: "017YYYYYYYY" },
  ])

  const [filterType, setFilterType] = useState<string>("all")
  const [dateFrom, setDateFrom] = useState<string>("")
  const [dateTo, setDateTo] = useState<string>("")

  const filteredTransactions = transactions.filter((t) => {
    const matchType = filterType === "all" || t.type === filterType
    const matchDate =
      (!dateFrom || new Date(t.date) >= new Date(dateFrom)) &&
      (!dateTo || new Date(t.date) <= new Date(dateTo))
    return matchType && matchDate
  })

  return (
    <div className="flex justify-center bg-background px-4 py-6">
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Transactions History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label className="pb-2">Transaction Type</Label>
              <Select onValueChange={setFilterType} defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="cashin">Cash In</SelectItem>
                  <SelectItem value="cashout">Cash Out</SelectItem>
                  <SelectItem value="commission">Commission</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="pb-2">From</Label>
              <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            </div>
            <div>
              <Label className="pb-2">To</Label>
              <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </div>
            <div className="flex items-end">
              <Button variant="outline" onClick={() => { setFilterType("all"); setDateFrom(""); setDateTo(""); }}>
                Reset
              </Button>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell>{t.id}</TableCell>
                      <TableCell className="capitalize">{t.type}</TableCell>
                      <TableCell>৳{t.amount}</TableCell>
                      <TableCell>{t.user}</TableCell>
                      <TableCell>{format(new Date(t.date), "dd MMM yyyy")}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-gray-500">
                      No transactions found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination (dummy) */}
          <div className="flex justify-between items-center mt-4">
            <Button variant="outline" size="sm">Previous</Button>
            <span className="text-sm text-gray-600">Page 1 of 1</span>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}