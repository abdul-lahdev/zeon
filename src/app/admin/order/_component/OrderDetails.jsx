"use client";

import React, { useMemo, useRef, useState } from "react";
import { Copy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    Check,
} from "lucide-react";



const customerData = {
    name: "Jetnetix Solutions",
    badge: "Available",
    phone: "+44 20 223 6556",
    email: "info@Jetnetix.com",
    logo: "/logo.png", // apna logo path laga dena
    details: [
        { label: "Category", value: "Fragrance " },
        { label: "Default Unit", value: "Each" },
        { label: "Items Per Unit", value: "12 Pieces" },
        { label: "Product Type", value: "In-Stock" },
        { label: "Bardcode", value: "890123456789" },
    ],
    inventory: [
        { label: "Cost Price", value: '$720' },
        { label: 'Qty. In Stock', value: '200 Items' },
        { label: 'Qty. Reserved', value: '300 Items' },
        { label: 'Quantity Alert', value: '100 Items' },
        { label: 'SKU', value: 'CLN-204' },


    ],
    notes:
        "This customer is active. Inventory and SKU references are shown here. You can replace this with dynamic API content later.",
};





function DetailRow({ label, value }) {
    return (
        <div className="grid grid-cols-[1fr_2fr] gap-4 space-y-4 ">
            <span className="text-[18px] font-normal text-(--dark2)">{label}</span>
            {label === 'Product Type' ? null : <span className="text-[18px] font-medium text-(--dark1)">{value}</span>}
            {label === 'Product Type' && <span
                className={`px-3 py-1 h-6.5 rounded-[9px] border text-[14px] font-normal flex w-fit items-center gap-1.5
                ${value === "In-Stock"
                        ? "bg-(--green3) text-(--green1) border-(--green1)"
                        : value === "Low Stock"
                            ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                            : "bg-(--red3) text-(--red2) border-(--red2)"
                    }`}
            >
                <span
                    className={`h-1.5 w-1.5 rounded-full
                  ${value === "In-Stock"
                            ? "bg-(--green1)"
                            : value === "Low Stock"
                                ? "bg-(--orange1)"
                                : "bg-(--red2)"
                        }`}
                />
                {value}
            </span>}
        </div>
    );
}

export default function ProductDetails() {
    // Initial Notes End

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="w-full rounded-[24px]  bg-white ">
                    {/* Header */}
                    <div className=" px-5 py-3 border-b-2 border-(--grey5)">
                        <h3 className="text-[24px] font-normal text-(--dark1)">
                            Order Information
                        </h3>


                    </div>

                    <div className="px-5">
                        <div className=" mt-3 py-4 ">
                            <div className="space-y-0.5">
                                {customerData.details.map((item, index) => (
                                    <DetailRow
                                        key={`${item.label}-${index}`}
                                        label={item.label}
                                        value={item.value}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-[24px] h-full bg-white p-5 mt-5">
                    <div>
                        <div className="space-y-0.5">
                            {customerData.inventory.map((item, index) => (
                                <DetailRow
                                    key={`${item.label}-${index}`}
                                    label={item.label}
                                    value={item.value}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}