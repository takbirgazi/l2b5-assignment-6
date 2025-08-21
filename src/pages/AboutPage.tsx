import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
            <div className="max-w-5xl w-full text-center">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
                >
                    About <span className="text-gray-800">No-Cash</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12"
                >
                    <strong>No-Cash</strong> is a modern digital wallet solution that makes
                    money transfers fast, secure, and reliable. With role-based access for{" "}
                    <span className="font-semibold text-gray-800">Users</span>,{" "}
                    <span className="font-semibold text-gray-800">Agents</span>, and{" "}
                    <span className="font-semibold text-gray-800">Admins</span>, everyone
                    can manage money with ease.
                </motion.p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* User */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-md rounded-2xl p-6 text-center cursor-pointer"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600 mb-3">👤 User</h2>
                        <p className="text-gray-600">
                            Send, receive, cash in, and cash out seamlessly. Track all your
                            transactions in one place.
                        </p>
                    </motion.div>

                    {/* Agent */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-md rounded-2xl p-6 text-center cursor-pointer"
                    >
                        <h2 className="text-2xl font-semibold text-green-600 mb-3">
                            🧑‍💼 Agent
                        </h2>
                        <p className="text-gray-600">
                            Handle customer requests for cash in and cash out with secure
                            transaction processing.
                        </p>
                    </motion.div>

                    {/* Admin */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-md rounded-2xl p-6 text-center cursor-pointer"
                    >
                        <h2 className="text-2xl font-semibold text-red-600 mb-3">👨‍💻 Admin</h2>
                        <p className="text-gray-600">
                            Manage users, agents, and monitor all transactions with full
                            control of the system.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};