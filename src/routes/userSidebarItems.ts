import Analytics from "@/pages/User/Analytics";
import CashOut from "@/pages/User/CashOut";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const userSidebarItems: ISidebarItems[] = [
    {
        title: "History",
        icon: DollarSign,
        items: [
            {
                title: "Bookings",
                url: "/user/analytics",
                component: Analytics
            },
            {
                title: "Bookings",
                url: "/user/cashout",
                component: CashOut
            },
        ],
    }


];