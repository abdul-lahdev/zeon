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
import ProductPricingTable from "./ProductPricingTable";

const steps = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Address & Delivery" },
  { id: 3, title: "Pricing Engine" },
];

export default function AddNewCustomerForm({ nextStep, prevStep, setCurrentStep, currentStep }) {
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

  return (
    <div className="w-full rounded-[24px] pt-0 bg-white p-0">
      <Card className="rounded-[20px] pt-0 gap-0 border-0 bg-white shadow-none">
        <div className="mb-5 border-b-2 border-(--grey5) p-5">
          <h2 className="text-[24px] font-normal text-(--dark1)">
            Add New Customer
          </h2>
        </div>
        <CardContent className="p-5 pt-0 ">


          <AnimatedStepper currentStep={currentStep} progressWidth={progressWidth} />

          {currentStep === 1 && (
            <form onSubmit={onSubmit} className="mt-8 space-y-8">
              <section>
                <h3 className="mb-4 text-[24px] font-normal text-(--dark1)">
                  Upload Logo
                </h3>

                <div className="flex flex-wrap gap-4">
                  <label
                    htmlFor="logo-upload"
                    className="group relative flex h-50 w-[320px] cursor-pointer flex-col items-center justify-center rounded-[16px] border border-dashed border-(--blue2) bg-white transition hover:bg-[#F5FBFF]"
                  >
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoChange}
                    />

                    {logo?.preview ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={logo.preview}
                          alt="Logo Preview"
                          fill
                          className="rounded-[16px] object-cover"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="relative">
                          <File size={70} className="text-(--grey6)" />
                          <span className="absolute right-0 block size-8 -translate-x-1 -translate-y-4 rounded-full bg-[radial-gradient(81.25%_81.25%_at_39.06%_18.75%,#82D6FF_0%,#21A6E8_100%)] flex items-center justify-center">
                            <ArrowUpToLine size={15} className="text-white" />
                          </span>
                        </div>

                        <span className="mt-4 block text-[20px] font-medium text-(--dark4)">
                          Aspect ratio 1:1
                        </span>
                      </>
                    )}
                  </label>
                </div>
              </section>

              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Customer Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field
                    label="Business name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Field
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Field
                    label="Industry / category"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                  />
                  <Field
                    label="Business description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <Field
                    label="Industry / category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </div>
              </section>

              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Account Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <Field
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </section>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={onSubmit} className="mt-8 space-y-8">
              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Address Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label
                      htmlFor="billingAddress"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Billing address
                    </Label>
                    <Input
                      id="billingAddress"
                      name="billingAddress"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="shippingAddress"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Shipping address
                    </Label>
                    <Input
                      id="shippingAddress"
                      name="shippingAddress"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="city"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      City
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="stateRegion"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      State / Region
                    </Label>
                    <Input
                      id="stateRegion"
                      name="stateRegion"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Account Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label
                      htmlFor="billingAddress2"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Billing Address
                    </Label>
                    <Input
                      id="billingAddress2"
                      name="billingAddress"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="shippingAddress2"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Shipping address
                    </Label>
                    <Input
                      id="shippingAddress2"
                      name="shippingAddress"
                      type="text"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Account status
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{height:'52px'}} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">In Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Delivery frequency
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{height:'52px'}} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="vatTaxNo"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      VAT / Tax number
                    </Label>
                    <Input
                      id="vatTaxNo"
                      name="vatTaxNo"
                      type="number"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label
                      htmlFor="companyReg"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Company registration number
                    </Label>
                    <Input
                      id="companyReg"
                      name="companyReg"
                      type="number"
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1 ">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Payment terms
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{height:'52px'}} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="15/30">Net 15 / Net 30</SelectItem>
                        <SelectItem value="30/60">Net 30 / Net 60</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1 relative">
                    <Label
                      htmlFor="accRefId"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                    Accounting reference ID
                    </Label>
                    <span className='right-0 absolute -translate-x-3.5 translate-y-3'>
                      <Eye size={24} />
                    </span>
                    <Input
                      id="accRefId"
                      name="accRefId"
                      type="number"
                      className="h-13 pr-10 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                </div>
              </section>
            </form>
          )}

          {
            currentStep===3 && (
              <ProductPricingTable/>
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

function Field({ label, name, type = "text", value, onChange }) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={name}
        className="text-[13px] font-medium text-[#6B7280]"
      >
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="h-12 rounded-[12px] border-[#E5E7EB] bg-white px-4 text-[14px] text-[#374151] shadow-none outline-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#38B6FF]"
      />
    </div>
  );
}