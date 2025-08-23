import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const adminSidebarItems: ISidebarItems[] = [
    {
        title: "History",
        icon: DollarSign,
        items: [
            {
                title: "Bookings",
                url: "/admin/analytics",
                component: Analytics
            },
        ],
    }


];