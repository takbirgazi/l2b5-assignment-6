import * as React from "react";
import logo from "@/assets/images/logo.png";
import logo2 from "@/assets/images/logo_2.png";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";

import { Link, NavLink } from "react-router";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useGetDataQuery } from "@/redux/features/auth/auth.api";
import { useTheme } from "@/hooks/useTheme";
import { DashboardSidebarFooter } from "./DashboardSidebarFooter";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { theme } = useTheme();
    const { data: userData } = useGetDataQuery(undefined);

    const data = {
        navMain: getSidebarItems(userData?.data?.role)
    }

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <NavLink to="/">
                    <img width={100} height={35} src={theme == "dark" ? logo2 : logo} />
                </NavLink>
            </SidebarHeader>
            <SidebarContent>
                {/* We create a SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url}>{item.title}</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <DashboardSidebarFooter />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}