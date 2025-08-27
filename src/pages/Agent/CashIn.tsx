/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function CashIn() {
    // const [cashIn, { isLoading }] = useCashInMutation();
    const [formData, setFormData] = useState({
        userPhone: "",
        amount: "",
        pin: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // await cashIn(formData).unwrap();
            //   toast({
            //     title: "Cash In Successful",
            //     description: `BDT ${formData.amount} has been added to ${formData.userPhone}`,
            //   });
            setFormData({ userPhone: "", amount: "", pin: "" });
            console.log("Cash In Successful")
        } catch (error: any) {
            //   toast({
            //     title: "Cash In Failed",
            //     description: error?.data?.message || "Something went wrong",
            //     variant: "destructive",
            //   });
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center items-center h-full p-4">
            <Card className="w-full max-w-md shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        Agent Cash In
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <Label htmlFor="userPhone" className="pb-2">User Email</Label>
                            <Input
                                id="userPhone"
                                name="userPhone"
                                type="email"
                                placeholder="Enter user email"
                                value={formData.userPhone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="amount" className="pb-2">Amount (BDT)</Label>
                            <Input
                                id="amount"
                                name="amount"
                                type="number"
                                placeholder="Enter amount"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="pin" className="pb-2">Agent PIN</Label>
                            <Input
                                id="pin"
                                name="pin"
                                type="password"
                                placeholder="Enter your PIN"
                                value={formData.pin}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                        // disabled={isLoading}
                        >
                            {/* {isLoading ? "Processing..." : "Cash In"} */}
                            Cash In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}