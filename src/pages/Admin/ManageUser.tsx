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
import { useGetAllDataQuery, useUpdateUserMutation } from "@/redux/features/user/user.api";
import { status } from "@/assets/constants/role";

export default function ManageUser() {
    const { data: users = [], isLoading, refetch } = useGetAllDataQuery(undefined);
    const [search, setSearch] = useState("");
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [newStatus, setNewStatus] = useState<string>("");
    const [updateStatus, { isLoading: isUpdating }] = useUpdateUserMutation();

    const handleUpdate = (id: string, info: string) => {
        updateStatus({
            id, data: {
                isActive: info
            }
        });
    }

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
                    <Button className="text-white" onClick={() => refetch()} disabled={isLoading}>
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
                                {users?.data
                                    ?.filter((user: any) => user.role === "USER")
                                    .map((user: any) => (
                                        <TableRow key={user._id}>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user?.wallet?.balance} ৳</TableCell>
                                            <TableCell>
                                                <div className="flex items-center">
                                                    <select
                                                        value={selectedUserId === user._id ? newStatus || user.isActive : user.isActive}
                                                        onChange={(e) => {
                                                            setSelectedUserId(user._id);
                                                            setNewStatus(e.target.value);
                                                        }}
                                                        className={`px-2 py-1 rounded border text-black ${user.isActive === "ACTIVE"
                                                            ? "bg-green-100"
                                                            : user.isActive === "INACTIVE"
                                                                ? "bg-yellow-100"
                                                                : "bg-red-100"
                                                            }`}
                                                    >
                                                        <option value={status.active}>{status.active}</option>
                                                        <option value={status.inactive}>{status.inactive}</option>
                                                        <option value={status.blocked}>{status.blocked}</option>
                                                    </select>
                                                    {selectedUserId === user._id && newStatus !== user.isActive && (
                                                        <Button
                                                            size="sm"
                                                            className="ml-2 text-white cursor-pointer"
                                                            disabled={isUpdating}
                                                            onClick={() => handleUpdate(user._id, newStatus)}
                                                        >
                                                            {isUpdating ? <Loader2 className="animate-spin h-4 w-4" /> : "Save"}
                                                        </Button>
                                                    )}
                                                </div>
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