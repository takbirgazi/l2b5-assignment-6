import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import logo from "@/assets/images/logo.png";
import logo2 from "@/assets/images/logo_2.png";
import { NavLink, useLocation, useNavigate } from "react-router";
import { ModeToggle } from "./ModeToggler";
import { useTheme } from "@/hooks/useTheme";
import Bar from "@/assets/icon/Bar";
import { useGetDataQuery, useLogOutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { baseApi } from "@/redux/baseApi";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Component() {
  const { theme } = useTheme();
  const { data, isLoading } = useGetDataQuery(undefined);
  const currentPath = useLocation();
  const currentPage = currentPath.pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logOut] = useLogOutMutation();

  const handleLOgOut = async () => {
    await logOut(undefined);
    dispatch(baseApi.util.resetApiState());
    navigate("/login");
  }

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 container mx-auto">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <Bar />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        asChild
                        className="py-1.5"
                        active={link.href == currentPage}
                      >
                        <NavLink to={link.href}>
                          {link.label}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <NavLink className="" to="/">
              <img width={100} height={35} src={theme == "dark" ? logo2 : logo} />
            </NavLink>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      active={link.href == currentPage}
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      <NavLink to={link.href}>
                        {link.label}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          {
            (!isLoading && data) ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <span className="sr-only">Open user menu</span>
                    {/* Simple profile icon (can be replaced with user avatar) */}
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                    </svg>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-40 p-2">
                  <div className="flex flex-col gap-2">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="justify-start"
                    >
                      <NavLink to={(data?.data?.role as string)?.toLocaleLowerCase() == "super_admin" ? "admin" : (data?.data?.role as string)?.toLocaleLowerCase()}>Dashboard</NavLink>
                    </Button>
                    <Button
                      onClick={handleLOgOut}
                      variant="outline"
                      size="sm"
                      className="justify-start"
                    >
                      Log Out
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Button asChild variant="ghost" size="sm" className="text-sm">
                <NavLink to="/login">Log In</NavLink>
              </Button>
            )
          }
        </div>
      </div>
    </header>
  )
}