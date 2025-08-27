/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Loader, Loader2 } from "lucide-react";
import { useGetAllDataQuery } from "@/redux/features/user/user.api";

export default function ManageAgent() {
    const { data: users = [], isLoading, refetch } = useGetAllDataQuery(undefined);
    const [search, setSearch] = useState("");


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

            <Card className="mb-4">
                <CardContent className="flex items-center gap-2 p-4">
                    <Input
                        placeholder="Search by name, email, or phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button onClick={() => refetch()} disabled={isLoading}>
                        {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Refresh"}
                    </Button>
                </CardContent>
            </Card>
            {
                isLoading ? <div className="w-full flex justify-center items-center"><Loader /></div> : <Card>
                    <CardContent className="p-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Balance</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users?.data?.length === 0 && !isLoading && (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center py-6">
                                            No users found
                                        </TableCell>
                                    </TableRow>
                                )}
                                {users?.data?.map((user: any) => (
                                    <TableRow key={user._id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user?.wallet?.balance} ৳</TableCell>
                                        <TableCell>
                                            <Button
                                                size="sm"
                                                variant={user.role === "admin" ? "default" : "outline"}
                                            >
                                                {user.role}
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                size="sm"
                                                variant={user.isActive ? "default" : "destructive"}
                                                className="text-white"
                                            >
                                                {user.isActive}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            }
        </div>
    );
};