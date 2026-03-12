"use client";

import React, { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    List,
    Bold,
    Italic,
    Underline,
    Paperclip,
    Check,
} from "lucide-react";
import Image from "next/image";



const customerData = {
    name: "Jetnetix Solutions",
    cussName: 'John Nion Carl',
    badge: "Available",
    phone: "+44 20 223 6556",
    email: "info@Jetnetix.com",
    logo: "/logo.png", // apna logo path laga dena
    orderInfo: [
        { label: "Order ID", value: "ORD-10425 " },
        { label: "Order Date", value: "12 Feb 2026" },
        { label: "Delivery Status", value: "Pending" },
        { label: "Delivery Date", value: "14 May 2026 - 16 May 2026" },
        { label: "Payment Status", value: "Paid" },
        { label: "Amount", value: "$5480.00" },
    ],
    paymentDetails: [
        { label: "Subtotal", value: "$5520.00" },
        { label: "Discount ", value: "$340.00" },
        { label: "Shipping Fee ", value: "$300.00" },
        { label: "Shipping Tax", value: "$00.00" },
        { label: "Grand Total", value: "$5480.00" },
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


const details = [
    {
        name: 'John Nion Carl',
        email: 'Johnnyion799@gmail.com',
        phone: '+44 20 223 6556',
        shipAddress: '1022 Garden, GD Web Road',

    }
]


const products = [
    {
        id: 1,
        name: "MAXX PRO 600",
        category: "Fragrance",
        qty: 6,
        price: "$1380.00",
        image: "/images/product/product.png",
    },
    {
        id: 2,
        name: "MAXX PRO 600",
        category: "Fragrance",
        qty: 6,
        price: "$1380.00",
        image: "/images/product/product.png",
    },
    {
        id: 3,
        name: "MAXX PRO 600",
        category: "Fragrance",
        qty: 6,
        price: "$1380.00",
        image: "/images/product/product.png",
    },
    {
        id: 4,
        name: "MAXX PRO 600",
        category: "Fragrance",
        qty: 6,
        price: "$1380.00",
        image: "/images/product/product.png",
    },
];






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
    // Initial Notes
    const initialNotes = [
        {
            id: 1,
            author: "Jetnetix Solutions",
            message:
                "We were satisfied with last order received and had no further questions",
            date: "08 May 2026",
            time: "10:00 AM",
            isAdmin: false,
        },
        {
            id: 2,
            author: "Admin",
            message: "Thanks for the order",
            date: "08 May 2026",
            time: "10:00 AM",
            isAdmin: true,
        },
    ];


    const [notes, setNotes] = useState(initialNotes);
    const [note, setNote] = useState("");
    const [attachedFile, setAttachedFile] = useState(null);

    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);

    const isDisabled = useMemo(() => {
        return note.trim().length === 0 && !attachedFile;
    }, [note, attachedFile]);

    const applyFormatting = (type) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = note.slice(start, end);

        let formattedText = selectedText;

        switch (type) {
            case "bold":
                formattedText = `**${selectedText || "bold text"}**`;
                break;
            case "italic":
                formattedText = `*${selectedText || "italic text"}*`;
                break;
            case "underline":
                formattedText = `<u>${selectedText || "underlined text"}</u>`;
                break;
            default:
                return;
        }

        const updated =
            note.slice(0, start) + formattedText + note.slice(end);

        setNote(updated);

        requestAnimationFrame(() => {
            textarea.focus();
            textarea.setSelectionRange(
                start,
                start + formattedText.length
            );
        });
    };

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAttachedFile(file);
    };

    const handleAddNote = () => {
        if (isDisabled) return;

        const newNote = {
            id: Date.now(),
            author: "Admin",
            message: note.trim() || `Attached file: ${attachedFile?.name}`,
            date: "08 May 2026",
            time: "10:00 AM",
            isAdmin: true,
            fileName: attachedFile?.name || null,
        };

        setNotes((prev) => [...prev, newNote]);
        setNote("");
        setAttachedFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    // Initial Notes End

    return (
        <>
            <div className=" grid grid-cols-[520px_1fr_520px] gap-5 h-full">
                <div className="flex flex-col h-full">
                    <div className="w-full rounded-[24px]  bg-white  ">
                        {/* Header */}
                        <div className=" px-5 py-3 border-b-2 border-(--grey5)">
                            <h3 className="text-[24px] font-normal text-(--dark1)">
                                Order Information
                            </h3>


                        </div>
                        <div className="px-5">
                            <div className=" mt-3 py-4 ">
                                <div className="space-y-0.5">
                                    {customerData.orderInfo.map((item, index) => (
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
                    <div className="flex h-full flex-col bg-white rounded-[24px] mt-5">
                        <div className=" px-5 py-3 border-b-2 border-(--grey5) flex items-center gap-3">
                            <h1 className="text-[24px] font-normal text-(--dark1)">Notes</h1>
                            <span className="size-6  rounded-full bg-(--grey5) flex items-center justify-center text-[14px] fonr-normal">1</span>
                        </div>
                        {/* Notes List */}
                        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-5">
                            <div className="space-y-6">
                                {notes.map((item, index) => (
                                    <div key={item.id} className="relative flex gap-3">
                                        {/* Timeline */}
                                        <div className="relative flex w-4 justify-center pt-1">
                                            <span className="z-10 h-2.5 w-2.5 rounded-full bg-[#E2E2E2]" />
                                            {index !== notes.length - 1 && (
                                                <span className="absolute top-4 h-[calc(100%+20px)] w-px bg-[#E8E8E8]" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <div className="mb-1 flex items-start justify-between gap-3">
                                                <h4 className="truncate text-[15px] font-medium text-[#4B5563]">
                                                    {item.author}
                                                </h4>

                                                <span className="shrink-0 text-[12px] font-normal text-[#A3A3A3]">
                                                    {item.date}: {item.time}
                                                </span>
                                            </div>

                                            <div className="text-[14px] leading-6 text-[#6B7280]">
                                                {item.message}
                                            </div>

                                            {item.fileName && (
                                                <div className="mt-2 inline-flex items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-[13px] text-[#4B5563]">
                                                    <Paperclip className="h-4 w-4" />
                                                    <span className="truncate">{item.fileName}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Composer */}
                        <div className="border-t border-[#F0F0F0] p-3 sm:p-4">
                            <div className="rounded-[18px] border border-[#E7E7E7] bg-white shadow-sm">
                                <Textarea
                                    ref={textareaRef}
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    placeholder="Write a note"
                                    className="min-h-[108px] resize-none border-0 bg-transparent px-4 py-4 text-[15px] text-[#374151] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />

                                {attachedFile && (
                                    <div className="px-4 pb-2">
                                        <div className="inline-flex max-w-full items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-[13px] text-[#4B5563]">
                                            <Paperclip className="h-4 w-4 shrink-0" />
                                            <span className="truncate">{attachedFile.name}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-between border-t border-[#EFEFEF] px-3 py-2">
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#F7F7F7] text-[#6B7280] transition hover:bg-[#EEEEEE]"
                                            aria-label="List"
                                        >
                                            <List className="h-4 w-4" />
                                        </button>

                                        <div className="flex items-center rounded-[8px] bg-[#F7F7F7] px-1">
                                            <button
                                                type="button"
                                                onClick={() => applyFormatting("bold")}
                                                className="flex h-8 w-8 items-center justify-center text-[#6B7280] transition hover:text-[#111827]"
                                                aria-label="Bold"
                                            >
                                                <Bold className="h-4 w-4" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => applyFormatting("italic")}
                                                className="flex h-8 w-8 items-center justify-center text-[#6B7280] transition hover:text-[#111827]"
                                                aria-label="Italic"
                                            >
                                                <Italic className="h-4 w-4" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => applyFormatting("underline")}
                                                className="flex h-8 w-8 items-center justify-center text-[#6B7280] transition hover:text-[#111827]"
                                                aria-label="Underline"
                                            >
                                                <Underline className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleAttachClick}
                                            className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#F7F7F7] text-[#6B7280] transition hover:bg-[#EEEEEE]"
                                            aria-label="Attach file"
                                        >
                                            <Paperclip className="h-4 w-4" />
                                        </button>

                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={handleAddNote}
                                        disabled={isDisabled}
                                        className="h-10 w-10 rounded-[12px] bg-[#10B981] p-0 text-white hover:bg-[#0EA371] disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        <Check className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full">
                    <div className="w-full rounded-[24px]  bg-white pb-5 ">
                        {/* Header */}
                        <div className=" px-5 py-3 border-b-2 border-(--grey5)">
                            <h3 className="text-[24px] font-normal text-(--dark1)">
                                Item
                            </h3>
                        </div>
                        <div className="px-5">
                            <div className="w-full bg-white">
                                {products.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border-b border-(--grey4) py-5 last:border-b-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="relative size-17 overflow-hidden rounded-[16px] ">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    sizes="68px"
                                                    loading="eager"
                                                    className="object-cover "
                                                />
                                            </div>

                                            <div>
                                                <p className="text-[20px] font-medium text-(--dark1)">
                                                    {item.name}
                                                </p>
                                                <p className="text-[18px] text-(--dark1) font-medium">{item.category}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-10">
                                            <p className="text-[18px] font-medium text-(--dark1)">
                                                Qty. {item.qty}
                                            </p>

                                            <div className="rounded-[8px] bg-(--grey6) border border-(--grey6) px-5 py-3 text-[18px] font-medium text-(--dark1)">
                                                {item.price}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-[24px] h-full  bg-white mt-5">
                        {/* Header */}
                        <div className=" px-5 py-3 border-b-2 border-(--grey5)">
                            <h3 className="text-[24px] font-normal text-(--dark1)">
                                Payment Details
                            </h3>
                        </div>
                        <div className="px-5">
                            <div className=" mt-3 py-4 ">
                                <div className="space-y-0.5">
                                    {customerData.orderInfo.map((item, index) => (
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
                </div>
                <div className='h-full'>
                    <div className='bg-white border-2 border-white rounded-[32px] min-h-46.75 bg-[url(/images/order/background.png)] p-5 bg-no-repeat bg-cover bg-center '>
                        <h1 className="text-[24px] font-normal text-(--dark1)">Order Note</h1>
                        <p className="text-(--dark1) text-[18px] font-normal">Please Wrap up the box with a wrapper, so the text is unreadable. This is for my personal shop.
                            <br />  Also mention my name and ID on every box so It Will be as easy task for me to find out</p>
                    </div>
                    <div className="w-full rounded-[24px]  bg-white mt-5">
                        {/* Header */}
                        <div className=" px-5 py-3 border-b-2 border-(--grey5)">
                            <h3 className="text-[24px] font-normal text-(--dark1)">
                                Customer Details
                            </h3>
                        </div>
                        <div className="px-5">
                            <div className=" mt-3 py-4 ">
                                <div className="space-y-0.5">
                                    {
                                        details.map((item, index) => (
                                            <div key={index} className='grid grid-cols-2 gap-4'>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Full Name
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.name}</span>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Email Address
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.email}</span>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Phone Number
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.phone}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-[24px]  bg-white mt-5">
                        {/* Header */}
                        <div className=" px-5 py-3 border-b-2 border-(--grey5)">
                            <h3 className="text-[24px] font-normal text-(--dark1)">
                                Billing Information
                            </h3>
                        </div>
                        <div className="px-5">
                            <div className=" mt-3 py-4 ">
                                <div className="space-y-0.5">
                                    {
                                        details.map((item, index) => (
                                            <div key={index} className='grid grid-cols-2 gap-4'>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Email Address
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.email}</span>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Phone Number
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.phone}</span>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Shipping Address
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.shipAddress}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-[24px]  bg-white mt-5">
                        {/* Header */}
                        <div className=" px-5 py-3 border-b-2 border-(--grey5)">
                            <h3 className="text-[24px] font-normal text-(--dark1)">
                                Shipping Information
                            </h3>
                        </div>
                        <div className="px-5">
                            <div className=" mt-3 py-4 ">
                                <div className="space-y-0.5">
                                    {
                                        details.map((item, index) => (
                                            <div key={index} className='grid grid-cols-2 gap-4'>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Email Address
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.email}</span>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Phone Number
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.phone}</span>
                                                <span className='text-[18px] font-normal text-(--dark2)'>
                                                    Shipping Address
                                                </span>
                                                <span className='text-[18px] font-medium text-(--dark1)'>{item.shipAddress}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}