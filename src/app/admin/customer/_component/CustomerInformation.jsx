"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Phone, Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const customerData = {
    name: "Jetnetix Solutions",
    badge: "Available",
    phone: "+44 20 223 6556",
    email: "info@Jetnetix.com",
    logo: "/logo.png", // apna logo path laga dena
    details: [
        { label: "Cost Price", value: "$720" },
        { label: "Qty. In Stock", value: "200 Items" },
        { label: "Qty. Reserved", value: "300 Items" },
        { label: "Quantity Alert", value: "100 Items" },
        { label: "Variants", value: "14 May 2026 - 16 May 2026" },
        { label: "SKU", value: "CLN-204" },
        { label: "SKU", value: "CLN-204" },
        { label: "SKU", value: "CLN-204" },
        { label: "SKU", value: "CLN-204" },
        { label: "SKU", value: "CLN-204" },
    ],
    notes:
        "This customer is active. Inventory and SKU references are shown here. You can replace this with dynamic API content later.",
};

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch (error) {
            console.error("Copy failed:", error);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 text-muted-foreground transition hover:text-foreground"
            aria-label={`Copy ${text}`}
        >
            {copied ? <Check size={20} className='text-(--dark1) cursor-pointer' /> : <Copy size={20} className="text-(--dark1) cursor-pointer" />}
        </button>
    );
}

function InfoPill({ text }) {
    return (
        <div className="flex items-center justify-between gap-2 rounded-[12px] bg-(--grey5) px-3 py-2.5">
            <div className="flex min-w-0 items-center gap-2">
                <span className="text-(--dark1) text-[16px] font-medium ">{text}</span>
            </div>
            <CopyButton text={text} />
        </div>
    );
}

function DetailRow({ label, value }) {
    return (
        <div className="grid grid-cols-[1fr_2fr] gap-4 space-y-4 ">
            <span className="text-[18px] font-normal text-(--dark2)">{label}</span>
            <span className="text-[18px] font-medium text-(--dark1)">{value}</span>
        </div>
    );
}

export default function CustomerInformation() {
    const [activeTab, setActiveTab] = useState("details");

    const tabs = useMemo(
        () => [
            { key: "details", label: "Details" },
            { key: "notes", label: "Notes" },
        ],
        []
    );

    return (
        <div className="w-full rounded-[24px]  bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-(--grey5)">
                <h3 className="text-[24px] font-normal text-(--dark1)">
                    Customer Information
                </h3>

                <Button
                    type="button"
                    variant='outline'
                    className='text-(--dark1)'
                >
                    <Pencil size={18} className="text-(--dark1)" />
                    Edit
                </Button>
            </div>

            {/* Customer block */}
            <div className="mt-3 flex gap-3 px-4 ">
                <Avatar className="size-24 rounded-[24px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div >
                    <h2 className="text-[32px] font-normal  text-(--dark1)">
                        {customerData.name}
                    </h2>

                    <div className="w-max rounded-[9px] bg-(--green3) h-8.5 text-[14px] fonr-normal text-(--green1) px-2 flex items-center gap-2">
                        <span className='bg-(--green1) rounded-full size-1.5 block'></span> {customerData.badge}
                    </div>
                </div>
            </div>

            {/* Contact pills */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-b-2 border-(--grey5) px-4 p-4">
                <InfoPill text={customerData.phone} />
                <InfoPill text={customerData.email} />
            </div>

            <div className="px-4">
                {/* Animated tabs */}
                <div className="relative mt-4 grid grid-cols-2 rounded-[14px] bg-[#F3F3F3] p-1">
                    <motion.div
                        layoutId="customer-tab-indicator"
                        className="absolute left-1 top-1 h-9 w-[calc(50%-4px)] rounded-[10px] bg-[#21A6E8] shadow-sm"
                        animate={{
                            x: activeTab === "details" ? 0 : "100%",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                        }}
                    />

                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;

                        return (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setActiveTab(tab.key)}
                                className={cn(
                                    "relative z-10 h-9 rounded-[10px] text-[14px] font-medium transition-colors cursor-pointer",
                                    isActive ? "text-white" : "text-(--dark1)"
                                )}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Animated content */}
                <div className="min-h-75 mt-4 overflow-hidden px-2 py-4">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === "details" ? (
                            <div className="space-y-0.5">
                                {customerData.details.map((item, index) => (
                                    <DetailRow
                                        key={`${item.label}-${index}`}
                                        label={item.label}
                                        value={item.value}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl bg-[#FAFAFA] text-[12px] text-[#5C5C5C]">
                                {customerData.notes}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}