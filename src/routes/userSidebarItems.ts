import CashOut from "@/pages/User/CashOut";
import SendMoney from "@/pages/User/SendMoney";
import UserTransaction from "@/pages/User/UserTransaction";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const userSidebarItems: ISidebarItems[] = [
    {
        title: "Dashboard",
        icon: DollarSign,
        items: [
            {
                title: "Withdraw Money",
                url: "/user/withdraw-money",
                component: CashOut
            },
            {
                title: "Send Money",
                url: "/user/send-money",
                component: SendMoney
            },
            {
                title: "All Transactions",
                url: "/user/all-transactions",
                component: UserTransaction
            },
        ],
    }


];