import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { NavLink } from "react-router";

export default function UnauthorizePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-6">

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 max-w-md">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <Lock className="w-16 h-16 text-red-500" />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Unauthorized Access
                </h1>

                {/* Message */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Sorry, you don’t have permission to view this page.
                    Please log in with the correct account or return to the home page.
                </p>

                {/* Button to Home */}
                <NavLink to="/">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl cursor-pointer">
                        Go Back Home
                    </Button>
                </NavLink>
            </div>
        </div>
    )
}