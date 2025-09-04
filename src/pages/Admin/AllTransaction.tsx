import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useGetAllTransactionQuery } from "@/redux/features/transaction/transaction.api"

// Pagination Component
function Pagination({
  page,
  totalPage,
  onPageChange,
}: {
  page: number
  totalPage: number
  onPageChange: (page: number) => void
}) {
  return (
    <div className="flex justify-center items-center gap-2 py-4">
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>
      <span>
        Page {page} of {totalPage}
      </span>
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={page >= totalPage}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default function AllTransaction() {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    fromDate: "",
    toDate: "",
  })
  const [page, setPage] = useState(1)
  const limit = 10

  // Pass pagination and filters to API if supported
  const { data: transaction } = useGetAllTransactionQuery({
    page,
    limit,
    search: filters.search,
    type: filters.type !== "all" ? filters.type : undefined,
    fromDate: filters.fromDate || undefined,
    toDate: filters.toDate || undefined,
  })

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">All Transactions History</h1>

      {/* Filters */}
      <Card>
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
          <Input
            placeholder="Search by User or Txn ID"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <Select onValueChange={(v) => setFilters({ ...filters, type: v })} defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Transaction Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="CASH_IN">Cash In</SelectItem>
              <SelectItem value="CASH_OUT">Cash Out</SelectItem>
              <SelectItem value="SEND_MONEY">Send Money</SelectItem>
              <SelectItem value="RECEIVE_MONEY">Receive Money</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="date"
            onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
          />
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
                <TableHead>Transaction ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transaction?.data?.length > 0 ? (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                transaction.data.map((txn: any) => (
                  <TableRow key={txn?.transactionId}>
                    <TableCell>{txn?.transactionId}</TableCell>
                    <TableCell>{txn?.transactionWith?.name}</TableCell>
                    <TableCell>{txn?.type}</TableCell>
                    <TableCell>${txn?.amount}</TableCell>
                    <TableCell>{txn?.createdAt ? new Date(txn.createdAt).toLocaleDateString() : ""}</TableCell>
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
          {/* Pagination */}
          {transaction?.meta && transaction.meta.totalPage > 1 && (
            <Pagination
              page={transaction.meta.page}
              totalPage={transaction.meta.totalPage}
              onPageChange={setPage}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}