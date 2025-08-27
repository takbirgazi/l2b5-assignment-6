import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

type Transaction = {
  id: string;
  type: "Cash In" | "Cash Out" | "Send Money" | "Receive";
  amount: number;
  date: string;
};

const mockTransactions: Transaction[] = [
  { id: "1", type: "Cash In", amount: 500, date: "2025-08-01" },
  { id: "2", type: "Cash Out", amount: 200, date: "2025-08-03" },
  { id: "3", type: "Send Money", amount: 1000, date: "2025-08-05" },
  { id: "4", type: "Receive", amount: 750, date: "2025-08-07" },
  { id: "5", type: "Cash In", amount: 1200, date: "2025-08-09" },
  { id: "6", type: "Send Money", amount: 300, date: "2025-08-11" },
  { id: "7", type: "Cash Out", amount: 400, date: "2025-08-13" },
];

export default function UserTransaction() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredTransactions = mockTransactions.filter((tx) => {
    const matchType = typeFilter === "all" || tx.type === typeFilter;
    const matchStart = !startDate || new Date(tx.date) >= new Date(startDate);
    const matchEnd = !endDate || new Date(tx.date) <= new Date(endDate);
    return matchType && matchStart && matchEnd;
  });

  const paginated = filteredTransactions.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filteredTransactions.length / pageSize);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Transaction History</h1>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          <div>
            <label className="text-sm font-medium">Transaction Type</label>
            <Select onValueChange={setTypeFilter} defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Cash In">Cash In</SelectItem>
                <SelectItem value="Cash Out">Cash Out</SelectItem>
                <SelectItem value="Send Money">Send Money</SelectItem>
                <SelectItem value="Receive">Receive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Start Date</label>
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-medium">End Date</label>
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>

          <div className="flex items-end">
            <Button onClick={() => { setTypeFilter("all"); setStartDate(""); setEndDate(""); }}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardContent className="overflow-x-auto p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length > 0 ? (
                paginated.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell>{tx.id}</TableCell>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell>{tx.amount} ৳</TableCell>
                    <TableCell>{tx.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6">
                    No transactions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-6 justify-center">
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}