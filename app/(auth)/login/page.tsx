import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

const loginForm = () => {
    return (
        <div className="relative min-h-screen">
   <BackgroundGradientAnimation interactive={false} className="absolute inset-0">
            <div className="flex items-center min-h-screen justify-center ">
                <Card className="mx-auto md:min-w-[500px] z-10 bg-white/30 border-none backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription className="text-slate-900">
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="bg-white/50 border-none"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link href="#" className="ml-auto inline-block text-sm underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required className="bg-white/50 border-none"/>
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with Github
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
    </BackgroundGradientAnimation>
        </div>

    )
}

export default loginForm
