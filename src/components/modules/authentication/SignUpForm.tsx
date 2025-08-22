import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Password from "@/components/ui/password.originui";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";


const createUserSchema = z.object({
    name: z.string().min(3, { error: "Name minimum 3 character" }).max(50),
    email: z.email(),
    password: z.string().min(6, { error: "Password minimum 6 character" }),
    confirmPassword: z.string().min(6, { error: "Confirm password minimum 6 character" })
}).refine(data => data.password === data.confirmPassword, {
    error: "Password not match",
    path: ["confirmPassword"]
});

export function SignUpForm() {
    const [register] = useRegisterMutation();
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = async (data: z.infer<typeof createUserSchema>) => {
        const tostId = toast.loading("Creating user...");
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        try {
            await register(userInfo).unwrap();
            toast.success("User created successfully", { id: tostId });
            navigate("/login");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong! Please try again.", { id: tostId });
        }
    }

    return (
        <div className={cn("flex flex-col gap-6")}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your and create an account
                </p>
            </div>
            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Your Name" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your confirm password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" variant="secondary" className="w-full cursor-pointer">Submit</Button>
                    </form>
                </Form>
            </div>
            <div className="text-center text-sm">
                I have already an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                    Log In
                </Link>
            </div>
        </div>
    )
}