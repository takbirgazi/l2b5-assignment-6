import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { useSenMoneyMutation } from "@/redux/features/wallet/wallet.api"
import { toast } from "sonner"

export default function SendMoney() {
    const [loading, setLoading] = useState(false)
    const [cashOut] = useSenMoneyMutation();
    const [formData, setFormData] = useState({
        email: "",
        data: {
            balance: 0,
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "balance") {
            setFormData({ ...formData, data: { ...formData.data, balance: Number(value) } });
        } else if (name === "email") {
            setFormData({ ...formData, email: value });
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const tostId = toast.loading("Sending...");
        if (!formData.email || !formData.data.balance) {
            toast.error("Missing Information", { id: tostId });
            return
        }

        setLoading(true)
        try {
            // Example API call (replace with RTK Query mutation)
            const response = await cashOut(formData).unwrap();
            if (response.success) {
                toast.success("Send Money Successfully!", { id: tostId })
            } else {
                toast.error(response?.data?.message, { id: tostId })
            }
            setFormData({ email: "", data: { balance: 0 } })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.data?.message, { id: tostId });
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex items-center justify-center h-full bg-background px-4">
            <Card className="w-full max-w-md shadow-lg border border-gray-200 dark:border-gray-700">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                        Send Money
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label className="pb-2" htmlFor="email">Sender Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="e.g. name@domain.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label className="pb-2" htmlFor="balance">Amount (৳)</Label>
                            <Input
                                id="balance"
                                name="balance"
                                type="number"
                                min={1}
                                placeholder="Enter Amount"
                                value={formData.data.balance}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full text-white cursor-pointer" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : "Send Money"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}