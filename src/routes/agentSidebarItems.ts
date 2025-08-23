import Analytics from "@/pages/Admin/AdminAnalytics";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const agentSidebarItems: ISidebarItems[] = [
    {
        title: "Dashboard",
        icon: DollarSign,
        items: [
            {
                title: "Bookings",
                url: "/agent/analytics",
                component: Analytics
            },
        ],
    }


];