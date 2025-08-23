import CashOut from "@/pages/User/CashOut";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const userSidebarItems: ISidebarItems[] = [
    {
        title: "Dashboard",
        icon: DollarSign,
        items: [
            {
                title: "Cash Out",
                url: "/user/cashout",
                component: CashOut
            },
        ],
    }


];