import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const agentSidebarItems: ISidebarItems[] = [
    {
        title: "History",
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