import Analytics from "@/pages/Admin/AdminAnalytics";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const adminSidebarItems: ISidebarItems[] = [
    {
        title: "Dashboard",
        icon: DollarSign,
        items: [
            {
                title: "Manage Users",
                url: "/admin/manage-users",
                component: Analytics
            },
            {
                title: "Manage Agent",
                url: "/admin/manage-agent",
                component: Analytics
            },
            {
                title: "All Transactions",
                url: "/admin/all-transactions",
                component: Analytics
            },
        ],
    }


];