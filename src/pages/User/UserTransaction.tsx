import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetMyTransactionQuery } from "@/redux/features/transaction/transaction.api";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
        className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>
      <span>
        Page {page} of {totalPage}
      </span>
      <button
        className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
        disabled={page >= totalPage}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default function UserTransaction() {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1)
  const limit = 15

  // Pass pagination and filters to API if supported
  const { data: transaction, isLoading } = useGetMyTransactionQuery({
    pageNumber,
    limit,
    search: search || "",
  })

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">All Transactions History</h1>
      {/* Search */}
      <Card className="mb-4">
        <CardContent className="flex gap-2 p-4">
          <Input
            placeholder="Search by user or transaction ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="text-white cursor-pointer" onClick={() => setSearch("")} disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Reset"}
          </Button>
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
                <TableHead>Email</TableHead>
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
                    <TableCell>{txn?.transactionWith?.email}</TableCell>
                    <TableCell>{txn?.type}</TableCell>
                    <TableCell>${txn?.amount}</TableCell>
                    <TableCell>{txn?.createdAt ? new Date(txn.createdAt).toLocaleDateString() : ""}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
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
              onPageChange={setPageNumber}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
