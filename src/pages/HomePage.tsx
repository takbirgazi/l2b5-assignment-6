import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Wallet, Send, CreditCard, Shield, Users, Smartphone } from "lucide-react";
import { NavLink } from "react-router";
import Joyride from 'react-joyride';
import { useEffect, useState } from "react";

const steps = [
    {
        target: '.hero-title',
        content: 'Welcome to No-Cash! Start your journey here.',
    },
    {
        target: '.mode-toggle',
        content: 'Toggle between light and dark mode for your preference.',
    },
    {
        target: '.get-started-btn',
        content: 'Click here to get started with No-Cash.',
    },
    {
        target: '.features-section',
        content: 'Check out our top features for your convenience.',
    },
    {
        target: '.how-it-works-section',
        content: 'See how easy it is to use No-Cash.',
    },
    {
        target: '.testimonials-section',
        content: 'Read what our users say about us!',
    },
];

export default function HomePage() {
    const [run, setRun] = useState(false);

    useEffect(() => {
        const hasSeenTour = localStorage.getItem("hasSeenTour");
        if (!hasSeenTour) {
            setRun(true);
            localStorage.setItem("hasSeenTour", "true");
        }
    }, []);

    return (
        <div className="w-full">
            <Joyride
                steps={steps}
                run={run}
                continuous
                showSkipButton
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold mb-4 hero-title"
                >
                    Welcome to No-Cash
                </motion.h1>
                <p className="text-lg max-w-2xl mb-6">
                    A secure, fast, and reliable digital wallet service like bKash – send, receive, cash in, and cash out anytime, anywhere.
                </p>
                <NavLink to="/login">
                    <Button className="cursor-pointer get-started-btn" size="lg" variant="secondary">Get Started</Button>
                </NavLink>
            </section>

            {/* Features */}
            <section className="py-16 px-6 max-w-6xl mx-auto features-section">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose No-Cash?</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="shadow-lg hover:shadow-2xl transition">
                        <CardContent className="p-6 text-center">
                            <Wallet className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Easy Cash In/Out</h3>
                            <p>Deposit and withdraw money instantly through agents or linked bank accounts.</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg hover:shadow-2xl transition">
                        <CardContent className="p-6 text-center">
                            <Send className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Send & Receive</h3>
                            <p>Transfer money securely to anyone with just a phone number.</p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg hover:shadow-2xl transition">
                        <CardContent className="p-6 text-center">
                            <Shield className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                            <p>Bank-level encryption and fraud detection for safe digital payments.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900 px-6 how-it-works-section">
                <h2 className="text-3xl font-bold text-center mb-12">How No-Cash Works</h2>
                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    <div className="text-center">
                        <Smartphone className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                        <h3 className="font-semibold text-lg">1. Register</h3>
                        <p>Create your No-Cash account in just a few minutes.</p>
                    </div>
                    <div className="text-center">
                        <CreditCard className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                        <h3 className="font-semibold text-lg">2. Add Funds</h3>
                        <p>Cash in through agents, banks, or mobile recharge.</p>
                    </div>
                    <div className="text-center">
                        <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                        <h3 className="font-semibold text-lg">3. Send & Pay</h3>
                        <p>Transfer money, pay bills, and shop with No-Cash.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-6 max-w-6xl mx-auto testimonials-section">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6 shadow-md hover:shadow-xl transition">
                        <p className="mb-4 italic">“No-Cash has made my life easier. Sending money to family takes just seconds!”</p>
                        <span className="font-semibold">– Rahim, Dhaka</span>
                    </Card>
                    <Card className="p-6 shadow-md hover:shadow-xl transition">
                        <p className="mb-4 italic">“The security features give me peace of mind. Highly recommended!”</p>
                        <span className="font-semibold">– Ayesha, Chattogram</span>
                    </Card>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center bg-indigo-600 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Go Cashless?</h2>
                <p className="mb-6">Join thousands of users who trust No-Cash for secure digital payments.</p>
                <NavLink to="/login">
                    <Button className="cursor-pointer" size="lg" variant="secondary">Get Started</Button>
                </NavLink>
            </section>
        </div>
    )
}