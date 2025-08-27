import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function CashOut() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        recipient: "",
        amount: "",
        pin: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.recipient || !formData.amount || !formData.pin) {
            // toast({
            //     title: "Missing Information",
            //     description: "Please fill out all fields.",
            //     variant: "destructive",
            // })
            console.log("Missing Information")
            return
        }

        setLoading(true)
        try {
            // Example API call (replace with RTK Query mutation)
            await new Promise((resolve) => setTimeout(resolve, 1500))

            // toast({
            //     title: "Money Sent!",
            //     description: `You have successfully sent ৳${formData.amount} to ${formData.recipient}.`,
            // })
            console.log("Money Sent!")

            setFormData({ recipient: "", amount: "", pin: "" })
        } catch (error) {
            // toast({
            //     title: "Transaction Failed",
            //     description: "Something went wrong. Please try again.",
            //     variant: "destructive",
            // })
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center h-full bg-background px-4">
            <Card className="w-full max-w-md shadow-lg border border-gray-200 dark:border-gray-700">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                        Withdraw Money
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="recipient">Agent Number</Label>
                            <Input
                                id="recipient"
                                name="recipient"
                                placeholder="e.g. 017XXXXXXXX"
                                value={formData.recipient}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="amount">Amount (৳)</Label>
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
                            <Label htmlFor="pin">PIN</Label>
                            <Input
                                id="pin"
                                name="pin"
                                type="password"
                                placeholder="Enter your 4-digit PIN"
                                value={formData.pin}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : "Cash Out"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}