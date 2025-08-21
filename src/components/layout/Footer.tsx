import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">No-Cash</h2>
                    <p className="mt-2 text-sm">
                        A smart, secure, and fast digital wallet for everyone.
                        Manage your money with Cash In, Cash Out, Send & Receive features.
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="hover:text-blue-600"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-pink-600"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-blue-700"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/features" className="hover:underline">Features</a></li>
                        <li><a href="/faq" className="hover:underline">FAQs</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Features</h3>
                    <ul className="space-y-2 text-sm">
                        <li>💸 Cash In & Cash Out</li>
                        <li>📤 Send & Receive Money</li>
                        <li>🔒 Secure Transactions</li>
                        <li>📊 Transaction History</li>
                        <li>👤 User, Agent & Admin Roles</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm">📍 Khulna, Bangladesh</p>
                    <p className="text-sm">📧 takbirgazibd@gmail.com</p>
                    <p className="text-sm">📞 +8801811947182</p>
                    <p className="text-sm mt-2">Available 24/7 for customer support</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
                © {new Date().getFullYear()} No-Cash. All Rights Reserved.
            </div>
        </footer>
    )
}