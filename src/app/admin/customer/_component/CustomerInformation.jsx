"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Phone, Mail, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Textarea } from "@/components/ui/textarea";
import {
    List,
    Bold,
    Italic,
    Underline,
    Paperclip,
    Check,
} from "lucide-react";

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
                <span className="text-(--dark1) text-[12px] md:text-[16px] font-medium ">{text}</span>
            </div>
            <CopyButton text={text} />
        </div>
    );
}

function DetailRow({ label, value }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] space-y-0 md:space-y-4 mb-3 md:mb-0 ">
            <span className="text-[16px] md:text-[18px] font-normal text-(--dark2)">{label}</span>
            <span className="text-[16px] md:text-[18px] font-medium text-(--dark1)">{value}</span>
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
        <div className="w-full rounded-[24px]  bg-white h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-(--grey5)">
                <h3 className="text-[18px] md:text-[24px] font-normal text-(--dark1)">
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
            <div className="mt-3 flex flex-col md:flex-row gap-3 px-4 ">
                <Avatar className="size-18 md:size-24 rounded-[24px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div >
                    <h2 className="text-[22px] md:text-[32px] font-normal  text-(--dark1)">
                        {customerData.name}
                    </h2>

                    <div className="w-max rounded-[9px] bg-(--green3) h-8.5 text-[14px] fonr-normal text-(--green1) px-2 flex items-center gap-2">
                        <span className='bg-(--green1) rounded-full size-1.5 block'></span> {customerData.badge}
                    </div>
                </div>
            </div>

            {/* Contact pills */}
            <div className="mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 border-b-2 border-(--grey5) p-4">
                <InfoPill text={customerData.phone} />
                <InfoPill text={customerData.email} />
            </div>

            <div className="px-4 h-[68%]">
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
                <div className="min-h-75 mt-4 overflow-hidden px-2 py-4 h-180">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
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
                            <div className="h-full">
                                <div className="flex h-full flex-col bg-white">
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
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}