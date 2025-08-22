import logo from "@/assets/images/logo.png";
import logo2 from "@/assets/images/logo_2.png";
import { Link, useNavigate } from "react-router";
import { useTheme } from "@/hooks/useTheme";
import { SignUpForm } from "@/components/modules/authentication/SignUpForm";
import signUpImage from "@/assets/images/signup.jpg";
import { useGetDataQuery } from "@/redux/features/auth/auth.api";
import { useEffect } from "react";

export function SignUpPage() {
    const { theme } = useTheme();
    const { data } = useGetDataQuery(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        if (data?.data?.email) {
            navigate("/");
        }
    }, [data, navigate]);

    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="bg-muted relative hidden lg:block">
                <img
                    src={signUpImage}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link to="/" className="flex items-center gap-2 font-medium">
                        <img width={100} height={35} src={theme == "dark" ? logo2 : logo} />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-lg border rounded-xl px-4 py-8">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;