'use client'
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="flex h-screen w-full bg-white overflow-y-hidden">
            {/* LEFT SIDE: Branding & Dashboard Preview */}
            <div className="hidden lg:flex w-1/2 flex-col pl-0 p-12 bg-[url(/images/login/backgroundImage.jpg)] bg-cover bg-center bg-no-repeat relative overflow-hidden m-4 rounded-[40px]">
                <div className="relative z-10  px-25">
                    <h1 className="text-[40px] text-(--dark1) font-semibold ">
                        Access your Customers, Orders, progress in one place.
                    </h1>
                    <p className="text-(--dark1) mb-12">
                        Everything you need to complete your sales and customer journey.
                    </p>
                </div>

                {/* Dashboard Image Mockup */}
                <div className="relative mt-auto w-full flex justify-center">
                    <div className="relative w-[110%] -bottom-12 rounded-t-3xl shadow-2xl overflow-hidden -translate-x-6">
                        <Image
                            src="/images/login/dashboard.jpg"
                            alt="Dashboard Preview"
                            width={1000}
                            height={1000}
                            className="w-full object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Login Form */}
            <div className="flex w-full lg:w-1/2 flex-col items-center justify-center px-8 md:px-16 lg:px-50">
                <div className="w-full space-y-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="relative w-32 h-12">
                            {/* RITTA Logo SVG or Image */}
                            <Image
                                src="/images/login/logo.png"
                                alt="Ritta Logo"
                                width={100}
                                height={44}
                            />
                        </div>
                        <h2 className="text-(--dark1) text-[40px] font-semibold">Welcome Back</h2>
                    </div>

                    <form className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-[18px font-normal text-(--dark2)">Email</label>
                            <Input type='email' className='h-15 text-[20px]  font-normal' placeholder='Johnnyion799@gmail.com' />

                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-[18px font-normal text-(--dark2)">Password</label>
                            <div className="relative">
                                <Input type={passwordVisible ? "text" : "password"} className='h-15 text-[20px]  font-normal' placeholder='******' />

                                <button
                                    type="button"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                                >
                                    {passwordVisible ? (
                                        <Eye className="h-5 w-5 text-(--dark1)" />
                                    ) : (
                                        <EyeOff className="h-5 w-5 text-(--dark1)" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" className="rounded-[8px] size-7 border-[#EDEDED] data-[state=checked]:bg-(--red1) data-[state=checked]:border-(--red1) data-[state=checked]:text-[white]" />
                            <label htmlFor="remember" className="text[18px] font-normal text-(--dark1)">
                                Remember me
                            </label>
                        </div>

                        {/* Login Button */}
                        <Link href='/'>
                            <Button className="h-14.5">
                                Login
                            </Button>
                            </Link>
                    </form>

                    {/* Footer Copyright or Additional Links */}

                </div>
            </div>
        </div>
    );
}