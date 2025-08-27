import AgentTransaction from "@/pages/Agent/AgentTransaction";
import CashIn from "@/pages/Agent/CashIn";
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
                title: "All Transactions",
                url: "/agent/all-transactions",
                component: AgentTransaction
            },
        ],
    }


];