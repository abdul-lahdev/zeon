'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronDown, HomeIcon, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





const linkUrl = [
    {
        url: '/admin/dashboard',
        name: 'Dashboard',
        icon: HomeIcon,
    },
    {
        url: '/admin/customer',
        name: 'Customers / Pricing Engine',
        icon: HomeIcon,
    },
    {
        url: '/admin/product',
        name: 'Products',
        icon: HomeIcon,
    },
    {
        url: '/admin/order',
        name: 'Orders',
        icon: HomeIcon,
    },
    {
        url: '/admin/calendar',
        name: 'Schedule',
        icon: HomeIcon,
    },

]
export default function Header() {




    const [active, setActive] = useState(false)


    return (
        <>
            <header className="bg-(--grey2) min-h-22.5 rounded-[24px] py-2 px-5 flex items-center justify-between">
                <Image
                    src="/images/login/logo.png"
                    alt="Ritta Logo"
                    width={100}
                    height={44}
                />
                <ul className="flex items-center gap-3">
                    {
                        linkUrl.map((item, index) => {
                            // Map ke curly braces {} ke andar logic likhte hain
                            const Icon = item.icon;

                            return (
                                <li key={index}>
                                    <Link href={item.url} className={`h-14.5 rounded-[16px] px-5 flex items-center gap-2 group hover:bg-[radial-gradient(81.9%_81.9%_at_50%_18.1%,#F05160_0%,#EC3235_100%)] transition-colors ${active ? 'bg-[radial-gradient(81.9%_81.9%_at_50%_18.1%,#F05160_0%,#EC3235_100%)]' : 'bg-white'}`}>
                                        <span>
                                            {/* Ab ye Icon component sahi render hoga */}
                                            <Icon size={24} className={` group-hover:text-white transition-colors ${active ? 'text-white' : 'text-(--dark1)'}`} />
                                        </span>
                                        <span className={`text-[20px] group-hover:text-white transition-colors font-normal  ${active ? 'text-white' : 'text-(--dark1)'}`}>{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className="flex items-center gap-3">
                    <div className='size-14 rounded-[16px] bg-white flex items-center justify-center cursor-pointer'>
                        <Bell size={24} className="text-(--dark1)" />
                    </div>
                    <Link href='/admin/setting'>
                        <div className='size-14 rounded-[16px] bg-white flex items-center justify-center cursor-pointer'>
                            <Settings size={24} className="text-(--dark1)" />
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 border-l border-white pl-4 ml-3">
                        <Avatar className='size-14 border-2 border-white rounded-[8px]'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className='rounded-full size-8 bg-white flex items-center cursor-pointer justify-center'>
                                    <ChevronDown size={24} className="text-(--dark1)" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                </DropdownMenuGroup>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header >
        </>
    )
}