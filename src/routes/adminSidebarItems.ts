import AllTransaction from "@/pages/Admin/AllTransaction";
import ManageAgent from "@/pages/Admin/ManageAgent";
import ManageUser from "@/pages/Admin/ManageUser";
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
                component: ManageUser
            },
            {
                title: "Manage Agent",
                url: "/admin/manage-agent",
                component: ManageAgent
            },
            {
                title: "All Transactions",
                url: "/admin/all-transactions",
                component: AllTransaction
            },
        ],
    }


];