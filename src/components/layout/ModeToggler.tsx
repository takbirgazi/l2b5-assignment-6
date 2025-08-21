import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";


export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="cursor-pointer space-x-1">
            {
                theme === "dark" ? <p onClick={() => setTheme("light")}><Sun /></p> : <p onClick={() => setTheme("dark")}><Moon /></p>
            }
        </div>
    );
}