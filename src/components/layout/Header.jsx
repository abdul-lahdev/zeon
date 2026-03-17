"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
  Users,
  Archive,
  Calendar,
  ShoppingBag,
  UserRoundPlus,
  X,
  Menu,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
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
    icon: Users,
  },
  {
    url: "/admin/product",
    name: "Products",
    icon: Archive,
  },
  {
    url: "/admin/order",
    name: "Orders",
    icon: ShoppingBag,
  },
  {
    url: "/admin/calendar",
    name: "Schedule",
    icon: Calendar,
  },
  {
    url: "/admin/setting",
    name: "Setting",
    icon: Settings,
  },
];

const notifications = [
  {
    id: 1,
    title: "New Order Created",
    description: "Order ORD-10425 has been placed by Jetnetix Solutions.",
    time: "1 hour ago",
    icon: <ShoppingBag className="size-5 text-(--blue2)" />,
    bgColor: "#50C5FF33",
  },
  {
    id: 2,
    title: "Order Delivered",
    description: "Order ORD-10425 has been marked as Delivered.",
    time: "1 hour ago",
    icon: <CheckCircle2 className="size-5 text-(--green1)" />,
    bgColor: "#0AAE781A",
  },
  {
    id: 3,
    title: "Payment Received",
    description: "Order ORD-10425 has been successfully completed.",
    time: "2 hour ago",
    icon: <CircleDollarSign className="size-5 text-(--green1)" />,
    bgColor: "#0AAE781A",
  },
  {
    id: 4,
    title: "Low Stock Warning",
    description: "MAXX PRO 600 is running low on stock",
    time: "5 hour ago",
    icon: <AlertCircle className="size-5 text-(--red1)" />,
    bgColor: "#D40F211A",
  },
  {
    id: 5,
    title: "New Customer Added",
    description: "BlueWave Enterprises has been added as a new customer",
    time: "5 hour ago",
    icon: <UserRoundPlus className="size-5 text-(--purple1)" />,
    bgColor: "#8C37FD1A",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-(--grey2) min-h-22.5 rounded-[24px] py-2 px-5 flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/images/login/logo.png"
          alt="Logo"
          width={100}
          height={44}
        />

        {/* Nav */}
        <ul className="hidden xl:flex items-center gap-3">
          {linkUrl.slice(0, 5).map((item, index) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.url ||
              pathname.startsWith(`${item.url}/`);

            return (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`h-14.5 rounded-[16px] px-5 flex items-center gap-2 group transition-colors ${isActive
                    ? "bg-[radial-gradient(81.9%_81.9%_at_50%_18.1%,#F05160_0%,#EC3235_100%)]"
                    : "bg-white hover:bg-[radial-gradient(81.9%_81.9%_at_50%_18.1%,#F05160_0%,#EC3235_100%)]"
                    }`}
                >
                  <Icon
                    size={24}
                    className={`transition-colors ${isActive
                      ? "text-white"
                      : "text-(--dark1) group-hover:text-white"
                      }`}
                  />

                  <span
                    className={`text-[20px] hidden lg:hidden xl:block font-normal transition-colors ${isActive
                      ? "text-white"
                      : "text-(--dark1) group-hover:text-white"
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Notifications */}
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <div className="size-14 rounded-[16px] bg-white flex items-center justify-center cursor-pointer">
                <Bell size={24} className="text-(--dark1)" />
              </div>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-row items-center border-b-2 border-(--grey5) mb-4">
                <DrawerClose asChild>
                  <X size={24} className="text-(--dark1) cursor-pointer" />
                </DrawerClose>
                <p className="text-[24px] text-(--dark1)">Notifications</p>
                <DrawerTitle className="sr-only">
                  Notifications
                </DrawerTitle>
                <DrawerDescription className="sr-only">Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>

              <div className="overflow-y-auto px-2">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start border-b border-(--grey4) gap-4 p-4 hover:bg-slate-50 transition cursor-pointer"
                  >
                    <div
                      style={{ backgroundColor: item.bgColor }}
                      className="size-10 rounded-full flex items-center justify-center"
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="text-[16px] text-(--dark1)">
                          {item.title}
                        </h4>
                        <span className="text-[12px] text-(--dark2)">
                          {item.time}
                        </span>
                      </div>

                      <p className="text-[13px] text-(--dark2)">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </DrawerContent>
          </Drawer>

          {/* Settings */}
          <Link href="/admin/setting">
            <div className="size-14 rounded-[16px] bg-white flex items-center justify-center cursor-pointer">
              <Settings size={24} className="text-(--dark1)" />
            </div>
          </Link>

          {/* Profile */}
          <div className="hidden xl:flex items-center gap-2 border-l border-white pl-4 ml-3">
            <Avatar className="size-14 border-2 border-white rounded-[8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="size-8 bg-white flex items-center justify-center rounded-full">
                  <ChevronDown size={20} />
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

          <Drawer direction="right">
            {/* Trigger Button */}
            <DrawerTrigger asChild>
              <div className="size-14 rounded-[16px] bg-white flex xl:hidden items-center justify-center cursor-pointer">
                <Menu className="text-(--dark1)" />
              </div>
            </DrawerTrigger>

            {/* Drawer Content */}
            <DrawerContent className="w-[300px] ml-auto h-full">

              {/* Header */}
              <DrawerHeader className="flex flex-row items-center justify-between border-b border-(--grey5)">
                <p className="text-[20px] font-medium text-(--dark1)">
                  Menu
                </p>

                <DrawerClose asChild>
                  <button>
                    <X size={24} className="text-(--dark1)" />
                  </button>
                </DrawerClose>

                <DrawerTitle className="sr-only">Menu</DrawerTitle>
                <DrawerDescription className="sr-only">Set your daily activity goal.</DrawerDescription>

              </DrawerHeader>

              {/* Menu Items */}
              <div className="p-4 flex flex-col gap-2">
                {linkUrl.map((item, index) => {
                  const Icon = item.icon;

                  const isActive =
                    pathname === item.url ||
                    pathname.startsWith(`${item.url}/`);

                  return (
                    <DrawerClose asChild key={index}>
                      <Link
                        href={item.url}
                        className={`h-12 rounded-[12px] px-4 flex items-center gap-3 transition-all ${isActive
                          ? "bg-[radial-gradient(81.9%_81.9%_at_50%_18.1%,#F05160_0%,#EC3235_100%)]"
                          : "bg-white hover:bg-gray-100"
                          }`}
                      >
                        <Icon
                          size={20}
                          className={`${isActive
                            ? "text-white"
                            : "text-(--dark1)"
                            }`}
                        />

                        <span
                          className={`text-[15px] ${isActive
                            ? "text-white"
                            : "text-(--dark1)"
                            }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </DrawerClose>
                  );
                })}
              </div>
            </DrawerContent>
          </Drawer>
        </div>


      </header>

      {/* Logout Modal */}
      <LogoutModal
        open={open}
        onOpenChange={setOpen}
        onConfirm={() => setOpen(false)}
      />
    </>
  );
}