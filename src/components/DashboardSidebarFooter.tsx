import {
    ChevronsUpDown,
    LogOut,
    Moon,
    Sun,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/useTheme"; import { baseApi } from "@/redux/baseApi";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/redux/hooks";
import { useGetDataQuery, useLogOutMutation } from "@/redux/features/auth/auth.api";
;

export function DashboardSidebarFooter() {
    const { isMobile } = useSidebar();
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [logOut] = useLogOutMutation();
    const { data } = useGetDataQuery(undefined);

    const handleLOgOut = async () => {
        await logOut(undefined);
        dispatch(baseApi.util.resetApiState());
        navigate("/login");
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                                </svg>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{data?.data?.name}</span>
                                <span className="truncate text-xs">{data?.data?.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                                    </svg>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">{data?.data?.name}</span>
                                    <span className="truncate text-xs">{data?.data?.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            {
                                theme === "dark" ? <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <Sun />
                                    Switch to Light
                                </DropdownMenuItem> : <DropdownMenuItem onClick={() => setTheme("dark")} >
                                    <Moon />
                                    Switch to Dark
                                </DropdownMenuItem>
                            }
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLOgOut}>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}