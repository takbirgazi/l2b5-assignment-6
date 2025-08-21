import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between flex-grow px-6 md:px-16 py-12">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-lg text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        The Future of <span className="text-blue-600">Digital Wallets</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        With <strong>No-Cash</strong>, manage your money anytime, anywhere.
                        Fast, secure, and role-based for Users, Agents, and Admins.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <Link
                            to="/signup"
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/about"
                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow hover:bg-gray-300 transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 md:mb-0"
                >
                    <img
                        src="https://illustrations.popsy.co/blue/digital-wallet.svg"
                        alt="Digital Wallet"
                        className="w-full max-w-md"
                    />
                </motion.div>

                <Button>Hello</Button>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16 px-6 md:px-16">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Why Choose <span className="text-blue-600">No-Cash?</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-2xl shadow text-center">
                        <h4 className="text-xl font-semibold text-blue-600">⚡ Fast</h4>
                        <p className="text-gray-600 mt-2">Instant money transfers with just a few clicks.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-2xl shadow text-center">
                        <h4 className="text-xl font-semibold text-green-600">🔒 Secure</h4>
                        <p className="text-gray-600 mt-2">Advanced encryption ensures your transactions are safe.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-2xl shadow text-center">
                        <h4 className="text-xl font-semibold text-red-600">🌍 Reliable</h4>
                        <p className="text-gray-600 mt-2">Trusted by users, agents, and admins for smooth operations.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}