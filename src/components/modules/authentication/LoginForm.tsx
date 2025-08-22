import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Password from "@/components/ui/password.originui";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import envConfig from "@/config";
import { useLoginMutation } from "@/redux/features/auth/auth.api";


const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6, { error: "Password minimum 6 character" }),
})

export function LoginForm() {
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        const tostId = toast.loading("Logging in...");
        try {
            const res = await login(data).unwrap();
            navigate("/");
            console.log(res);
            toast.success("Login Successfully!", { id: tostId });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error(err);
            toast.error("Something went wrong! Please try again.", { id: tostId });
        }
    }

    return (
        <div className={cn("flex flex-col gap-6")}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Your Email" type="email" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your email address.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" variant="secondary" className="w-full cursor-pointer">Log In</Button>
                    </form>
                </Form>





                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-background text-muted-foreground relative z-10 px-2">
                        Or continue with
                    </span>
                </div>
                <Button onClick={() => window.open(`${envConfig.BASE_API}/auth/google`)} variant="outline" className="w-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={20} height={20}>
                        <g>
                            <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.4 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.2-3z" />
                            <path fill="#34A853" d="M6.3 14.7l7 5.1C15.7 16.1 19.5 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.1 29.6 4 24 4c-7.1 0-13.2 4.1-16.3 10.7z" />
                            <path fill="#FBBC05" d="M24 44c5.6 0 10.5-1.9 14.1-5.1l-6.5-5.3C29.7 35.9 27 37 24 37c-6.1 0-10.7-4.1-12.4-9.6l-7 5.4C7.8 39.9 15.1 44 24 44z" />
                            <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.3 7.5-11.7 7.5-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.1 29.6 4 24 4c-7.1 0-13.2 4.1-16.3 10.7l7 5.1C15.7 16.1 19.5 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.1 29.6 4 24 4c-7.1 0-13.2 4.1-16.3 10.7z" />
                        </g>
                    </svg>
                    Login with Google
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="underline underline-offset-4">
                    Sign up
                </Link>
            </div>
        </div>
    )
}