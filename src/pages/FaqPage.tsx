import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function FaqPage() {
    return (
        <section className="container mx-auto px-4 py-16">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center mb-10"
            >
                Frequently Asked Questions (FAQ)
            </motion.h1>

            <Card className="max-w-3xl mx-auto shadow-lg rounded-2xl">
                <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full space-y-4">

                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is No-Cash?</AccordionTrigger>
                            <AccordionContent>
                                No-Cash is a secure digital wallet platform similar to bKash.
                                You can send, receive, cash in, and cash out money anytime, anywhere.
                                It makes transactions fast, safe, and hassle-free.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>How do I Cash In money?</AccordionTrigger>
                            <AccordionContent>
                                To Cash In, visit any authorized No-Cash Agent or use your bank card linked
                                to the app. Enter the desired amount and confirm. The money will be instantly
                                available in your No-Cash wallet balance.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>How do I Cash Out money?</AccordionTrigger>
                            <AccordionContent>
                                You can Cash Out from any No-Cash Agent. Just select "Cash Out" in the app,
                                enter the agent’s number, the amount, and your PIN. Collect your money instantly
                                from the agent counter.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>What are the transaction charges?</AccordionTrigger>
                            <AccordionContent>
                                - **Send Money (to personal account):** Free
                                - **Cash Out from Agent:** 1.5% per transaction
                                - **Cash In:** Free
                                - **Merchant Payments:** Free
                                <br />You can always view updated charges in the Charges section of the app.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is No-Cash safe to use?</AccordionTrigger>
                            <AccordionContent>
                                Yes! No-Cash uses advanced encryption, two-factor authentication (2FA), and
                                PIN protection. Your transactions and personal data are kept fully secure.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger>Can I send money to non-No-Cash users?</AccordionTrigger>
                            <AccordionContent>
                                Currently, you can only send money to registered No-Cash users.
                                However, future updates will allow direct transfers to bank accounts
                                and other mobile wallets.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                            <AccordionTrigger>How do I become a No-Cash Agent?</AccordionTrigger>
                            <AccordionContent>
                                You can apply through the official website or app. After verification,
                                training, and approval, you’ll receive an Agent ID to start providing
                                services in your area.
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </CardContent>
            </Card>
        </section>
    )
}