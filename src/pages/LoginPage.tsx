import logo from "@/assets/images/logo.png";
import logo2 from "@/assets/images/logo_2.png";
import { LoginForm } from "@/components/modules/authentication/LoginForm";
import { Link } from "react-router";
// import loginImage from "@/assets/images/travel-login.jpg";
import { useTheme } from "@/hooks/useTheme";


export function LoginPage() {
    const { theme } = useTheme();

    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link to="/" className="flex items-center gap-2 font-medium">
                        <img width={100} height={35} src={theme == "dark" ? logo2 : logo} />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-md border rounded-xl px-4 py-8">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                {/* <img
                    src={loginImage}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                /> */}
            </div>
        </div>
    )
}

export default LoginPage