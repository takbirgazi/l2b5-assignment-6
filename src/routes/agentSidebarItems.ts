import AgentTransaction from "@/pages/Agent/AgentTransaction";
import CashIn from "@/pages/Agent/CashIn";
import Withdraw from "@/pages/Agent/Withdraw";
import type { ISidebarItems } from "@/types";
import { DollarSign } from "lucide-react";



export const agentSidebarItems: ISidebarItems[] = [
    {
        title: "Dashboard",
        icon: DollarSign,
        items: [
            {
                title: "Add Money",
                url: "/agent/add-money",
                component: CashIn
            },
            {
                title: "Withdraw Money",
                url: "/agent/withdraw-money",
                component: Withdraw
            },
            {
                title: "All Transactions",
                url: "/agent/all-transactions",
                component: AgentTransaction
            },
        ],
    }


];