import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground px-6 py-12 md:px-20">
            {/* Header */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center mb-8"
            >
                About <span className="text-primary">No-Cash</span>
            </motion.h1>

            {/* Mission & Vision */}
            <div className="grid gap-8 md:grid-cols-2 mb-12">
                <Card className="shadow-xl rounded-2xl">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                        <p className="text-muted-foreground">
                            At <b>No-Cash</b>, our mission is to empower people with a fast, secure, and
                            user-friendly digital wallet system—so that financial transactions are
                            as easy as sending a message. We aim to make digital payments accessible
                            to everyone, everywhere.
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-xl rounded-2xl">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
                        <p className="text-muted-foreground">
                            We envision a cashless society where individuals and businesses
                            can transfer, store, and manage money securely with just a few taps.
                            Our goal is to be the most trusted and widely used digital wallet
                            in Bangladesh and beyond.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Features */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-6">Why Choose No-Cash?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Secure Transactions",
                            desc: "We use bank-level encryption and multi-layer authentication to protect every transaction."
                        },
                        {
                            title: "User-Friendly",
                            desc: "Simple, clean, and easy-to-use interface designed for everyone—from students to professionals."
                        },
                        {
                            title: "24/7 Availability",
                            desc: "Make payments, cash in/out, and send/receive money anytime, anywhere—without restrictions."
                        },
                        {
                            title: "Agent & Merchant Network",
                            desc: "A wide network of agents and merchants makes it easier to cash out and use services in real life."
                        },
                        {
                            title: "Inclusive Services",
                            desc: "Supporting financial inclusion for unbanked and rural communities by providing easy digital access."
                        },
                        {
                            title: "Affordable Fees",
                            desc: "We ensure minimum service charges so users can enjoy affordable financial transactions."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="shadow-lg hover:shadow-2xl transition rounded-2xl">
                                <CardContent className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-center mt-12"
            >
                <h2 className="text-2xl font-bold mb-4">Join the No-Cash Revolution 🚀</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                    Experience the future of money transfers with No-Cash.
                    Whether you are a student, entrepreneur, or business owner,
                    our platform is built to make your life easier.
                </p>
                <NavLink to="/login">
                    <Button className="cursor-pointer" size="lg" variant="secondary">Get Started</Button>
                </NavLink>
            </motion.div>
        </div>
    )
}