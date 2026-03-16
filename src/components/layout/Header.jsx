"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  HomeIcon,
  Settings,
  ShoppingBag,
  UserRoundPlus,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import LogoutModal from "./LogoutModal";

const linkUrl = [
  {
    url: "/admin/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    url: "/admin/customer",
    name: "Customers / Pricing Engine",
    icon: HomeIcon,
  },
  {
    url: "/admin/product",
    name: "Products",
    icon: HomeIcon,
  },
  {
    url: "/admin/order",
    name: "Orders",
    icon: HomeIcon,
  },
  {
    url: "/admin/calendar",
    name: "Schedule",
    icon: HomeIcon,
  },
];

const notifications = [
  {
    id: 1,
    type: "order",
    title: "New Order Created",
    description: "Order ORD-10425 has been placed by Jetnetix Solutions.",
    time: "1 hour ago",
    icon: <ShoppingBag className="size-5 text-(--blue2)" />,
    bgColor: "#50C5FF33",
  },
  {
    id: 2,
    type: "delivered",
    title: "Order Delivered",
    description: "Order ORD-10425 has been marked as Delivered.",
    time: "1 hour ago",
    icon: <CheckCircle2 className="size-5 text-(--green1)" />,
    bgColor: "#0AAE781A",
  },
  {
    id: 3,
    type: "payment",
    title: "Payment Received",
    description: "Order ORD-10425 has been successfully completed.",
    time: "2 hour ago",
    icon: <CircleDollarSign className="size-5 text-(--green1)" />,
    bgColor: "#0AAE781A",
  },
  {
    id: 4,
    type: "warning",
    title: "Low Stock Warning",
    description: "MAXX PRO 600 is running low on stock",
    time: "5 hour ago",
    icon: <AlertCircle className="size-5 text-(--red1)" />,
    bgColor: "#D40F211A",
  },
  {
    id: 5,
    type: "customer",
    title: "New Customer Added",
    description: "BlueWave Enterprises has been added as a new customer",
    time: "5 hour ago",
    icon: <UserRoundPlus className="size-5 text-(--purple1)" />,
    bgColor: "#8C37FD1A",
  },
];
export default function Header() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
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
          {linkUrl.map((item, index) => {
            // Map ke curly braces {} ke andar logic likhte hain
            const Icon = item.icon;

            return (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`h-14.5 rounded-[16px] px-5 flex items-center gap-2 group hover:bg-[radial-gradient(81.9%_81.9%_at_50%_18.1%,#F05160_0%,#EC3235_100%)] transition-colors ${
                    active
                      ? "bg-[radial-gradient(81.9%_81.9%_at_50%_18.1%,#F05160_0%,#EC3235_100%)]"
                      : "bg-white"
                  }`}
                >
                  <span>
                    {/* Ab ye Icon component sahi render hoga */}
                    <Icon
                      size={24}
                      className={` group-hover:text-white transition-colors ${
                        active ? "text-white" : "text-(--dark1)"
                      }`}
                    />
                  </span>
                  <span
                    className={`text-[20px] group-hover:text-white transition-colors font-normal  ${
                      active ? "text-white" : "text-(--dark1)"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <div className="size-14 rounded-[16px] bg-white flex items-center justify-center cursor-pointer">
                <Bell size={24} className="text-(--dark1)" />
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex flex-row items-center border-b-2 border-(--grey5) mb-4">
                <DrawerClose asChild>
                  <X size={24} className="text-(--dark1)" />
                </DrawerClose>
                <p className="text-[24px] fonr-normal text-(--dark1)">
                  Notifications
                </p>
                <DrawerTitle className="sr-only">Notifications</DrawerTitle>
                <DrawerDescription className="sr-only">
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <div className="no-scrollbar overflow-y-auto px-2">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start border-b border-(--grey4) gap-4 p-4 hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    {/* Icon Circle */}
                    <div
                      style={{ backgroundColor: item.bgColor }}
                      className={`flex-shrink-0 size-10 rounded-full flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-[16px] font-normal text-(--dark1)">
                          {item.title}
                        </h4>
                        <span className="text-[12px] text-(--dark2) font-normal">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-[13px] text-(--dark2) leading-relaxed truncate group-hover:text-clip group-hover:whitespace-normal">
                        {/* Yahan hum logic laga rahe hain ke agar order id ho toh wo dark dikhe */}
                        {item.description.split(/(ORD-\d+)/g).map((part, i) =>
                          part.match(/ORD-\d+/) ? (
                            <span
                              key={i}
                              className="font-medium text-(--dark1)"
                            >
                              {part}
                            </span>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <DrawerFooter className="sr-only">
                <Button>Submit</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Link href="/admin/setting">
            <div className="size-14 rounded-[16px] bg-white flex items-center justify-center cursor-pointer">
              <Settings size={24} className="text-(--dark1)" />
            </div>
          </Link>
          <div className="flex items-center gap-2 border-l border-white pl-4 ml-3">
            <Avatar className="size-14 border-2 border-white rounded-[8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full size-8 bg-white flex items-center cursor-pointer justify-center">
                  <ChevronDown size={24} className="text-(--dark1)" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => setOpen(true)}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <LogoutModal
        open={open}
        onOpenChange={setOpen}
        onConfirm={() => {
          console.log("delete");
          setOpen(false);
        }}
      />
    </>
  );
}
