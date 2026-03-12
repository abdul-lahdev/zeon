"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Image as ImageIcon, File, ArrowUpToLine, Eye } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InvoiceItemsTable from "./InvoiceItemsTable";
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea";
// calendar
import { Field, FieldLabel } from "@/components/ui/field"
// import { Calendar as CalendarIcon } from "lucide-react"
// 
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
// 

const steps = [
  { id: 1, title: "Order Details" },
  { id: 2, title: "Delivery Details" },
  { id: 3, title: "Add Items" },
];

export default function AddNewOrderForm({ nextStep, prevStep, setCurrentStep, currentStep }) {
  const [logo, setLogo] = useState(null);

  const [formData, setFormData] = useState({
    businessName: "Jetnetix Solution",
    email: "info@Jetnetix.com",
    phone: "+44 20 223 6556",
    industry: "Jetnetix Solution",
    description: "Jetnetix Solution",
    category: "Jetnetix Solution",
    username: "Jetnetix_Solution",
    password: "info@Jetnetix.com",
  });

  const progressWidth = useMemo(() => {
    if (currentStep === 1) return "0%";
    if (currentStep === 2) return "50%";
    return "100%";
  }, [currentStep]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setLogo({
      file,
      preview: previewUrl,
    });
  };



  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    console.log("Uploaded Logo:", logo?.file || null);
  };

  // Calendar
  const [date, setDate] = useState(Date)
  // Ranges
  const [secDate, setSecDate] = useState({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  });


  return (
    <div className="w-full rounded-[24px] pt-0 bg-white p-0">
      <Card className="rounded-[20px] pt-0 gap-0 border-0 bg-white shadow-none">
        <div className="mb-5 border-b-2 border-(--grey5) p-5">
          <h2 className="text-[24px] font-normal text-(--dark1)">
            Add New Order
          </h2>
        </div>
        <CardContent className="p-5 pt-0 ">


          <AnimatedStepper currentStep={currentStep} progressWidth={progressWidth} />

          {currentStep === 1 && (
            <form onSubmit={onSubmit} className="mt-8 space-y-8">
              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Customer Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">


                  <div className="space-y-1 ">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Customer
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{ height: '52px' }} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="MichaelJohn">Michael John</SelectItem>
                        <SelectItem value="imranKhan">Imran Khan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Billing Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label
                      htmlFor="billingEmail"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Billing Email
                    </Label>
                    <Input
                      id="billingEmail"
                      name="billingEmail"
                      type="email"
                      placeholder='Johnnyion799@gmail.com'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="billingPhone"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Billing Phone
                    </Label>
                    <Input
                      id="billingPhone"
                      name="billingPhone"
                      placeholder='+44 20 223 6556'
                      type="number"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="billingAddress"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Billing Address
                    </Label>
                    <Input
                      id="billingAddress"
                      name="billingAddress"
                      type="text"
                      placeholder='1022 Garden, GD Web Road'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                </div>
              </section>
              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Shipping Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label
                      htmlFor="shippingEmail"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Shipping Email
                    </Label>
                    <Input
                      id="shippingEmail"
                      name="shippingEmail"
                      type="email"
                      placeholder='Johnnyion799@gmail.com'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="shippingPhone"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Shipping Phone
                    </Label>
                    <Input
                      id="shippingPhone"
                      name="shippingPhone"
                      placeholder='+44 20 223 6556'
                      type="number"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="shippingAddress"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Shipping Address
                    </Label>
                    <Input
                      id="shippingAddress"
                      name="shippingAddress"
                      type="text"
                      placeholder='1022 Garden, GD Web Road'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="billing" className="flex items-center gap-3">

                      <Checkbox id='billing' className='rounded-[8px] size-6 border-[#EDEDED] data-[state=checked]:bg-(--red1) data-[state=checked]:border-(--red1) data-[state=checked]:text-[white]' /> <span className="text-[18px] font-normal text-(--dark1)">Same as Billing  Details</span>
                    </label>
                  </div>

                </div>
              </section>


            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={onSubmit} className="mt-8 space-y-8">
              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Order Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label
                      htmlFor="billingAddress"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Order Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          data-empty={!date}
                          className="w-full text-(--dark1) font-normal justify-start text-left border border-(--grey4) rounded-[12px] h-13"
                        >
                          <CalendarIcon />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="shippingAddress"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Delivery Date Range
                    </Label>
                    <Field className="w-full">
                      {/* <FieldLabel htmlFor="date-picker-range">Date Picker Range</FieldLabel> */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            id="date-picker-range"
                            className="w-full text-(--dark1) font-normal justify-start text-left border border-(--grey4) rounded-[12px] h-13"
                          >
                            <CalendarIcon />
                            {secDate?.from ? (
                              secDate.to ? (
                                <>
                                  {format(secDate.from, "LLL dd, y")} -{" "}
                                  {format(secDate.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(secDate.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="range"
                            defaultMonth={secDate?.from}
                            selected={secDate}
                            onSelect={setSecDate}
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                    </Field>
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="paymentStatus"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Payment Status
                    </Label>
                    <Input
                      id="paymentStatus"
                      name="paymentStatus"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="deliveryStatus"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Delivery Status
                    </Label>
                    <Input
                      id="deliveryStatus"
                      name="deliveryStatus"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Order Note
                </h3>
                <Textarea className='h-50 resize-none mt-4' placeholder='Please Wrap up the box with a wrapper, so the text is unreadable. This is for my personal shop. Also mention my name and ID on every box so It Will be as easy task for me to find out'>

                </Textarea>


              </section>
            </form>
          )}

          {
            currentStep === 3 && (
              <InvoiceItemsTable />
            )
          }



        </CardContent>
      </Card>
    </div>
  );
}

function AnimatedStepper({ currentStep, progressWidth }) {
  return (
    <div className="relative overflow-hidden rounded-[14px] bg-[#EEF8F2] px-4 py-3">
      {/* Animated Fill */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: progressWidth }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-y-0 left-0 rounded-[14px] bg-[#DDF3E4]"
      />

      <div className="relative z-10 grid grid-cols-3 items-center gap-3">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex items-center gap-3">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div
                  className={[
                    "flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold transition-all",
                    isActive
                      ? "bg-[#EF4444] text-white"
                      : isCompleted
                        ? "bg-[#22C55E] text-white"
                        : "bg-white text-[#9CA3AF] border border-[#E5E7EB]",
                  ].join(" ")}
                >
                  {step.id}
                </div>

                <span
                  className={[
                    "text-[12px] font-medium",
                    isActive || isCompleted ? "text-[#374151]" : "text-[#6B7280]",
                  ].join(" ")}
                >
                  {step.title}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden h-px flex-1 bg-white/80 md:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

