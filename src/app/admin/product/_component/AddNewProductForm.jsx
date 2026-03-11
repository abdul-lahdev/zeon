"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Image as ImageIcon, File, ArrowUpToLine, Eye } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);




const steps = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Address & Delivery" },
];

export default function AddNewProductForm({ nextStep, prevStep, setCurrentStep, currentStep }) {
  const [logo, setLogo] = useState(null);
  const [files, setFiles] = useState([]);

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
            Add New Product
          </h2>
        </div>
        <CardContent className="p-5 pt-0 ">


          {/* <AnimatedStepper currentStep={currentStep} progressWidth={progressWidth} /> */}


          {currentStep === 1 && (
            <form onSubmit={onSubmit} className="mt-3 space-y-8">
              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Basic Information
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label
                      htmlFor="productName"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Product Name
                    </Label>
                    <Input
                      id="productName"
                      name="productName"
                      type="text"
                      placeholder='1022 Garden, GD Web Road'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Product Status
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{ height: '52px' }} className="w-full rounded-[12px] border border-(--grey4) bg-white">
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
                    <Label
                      htmlFor="category"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Category
                    </Label>
                    <Input
                      id="category"
                      name="category"
                      type="text"
                      placeholder='Los Angeles'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="stockStatus"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Stock Status
                    </Label>
                    <Input
                      id="stockStatus"
                      name="stockStatus"
                      type="text"
                      placeholder='Jetnetix Solution'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Default Unit
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{ height: '52px' }} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="active">Carton</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Pieces Per Unit
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{ height: '52px' }} className="w-full rounded-[12px] border border-(--grey4) bg-white">
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
                      htmlFor="barcode"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Barcode
                    </Label>
                    <Input
                      id="barcode"
                      name="barcode"
                      type="number"
                      placeholder='890123456789'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Inventory Details
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label
                      htmlFor="costPrice"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      Cost Price
                    </Label>
                    <Input
                      id="costPrice"
                      name="costPrice"
                      type="number"
                      placeholder='890123456789'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Quantity In Stock
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{ height: '52px' }} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="last7days">Last 7 Days</SelectItem>
                        <SelectItem value="last30days">Last 30 Days</SelectItem>
                        <SelectItem value="last90days">Last 90 Days</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Reserved Quantity (Optional)
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{ height: '52px' }} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="last7days">Last 7 Days</SelectItem>
                        <SelectItem value="last30days">Last 30 Days</SelectItem>
                        <SelectItem value="last90days">Last 90 Days</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[16px] font-normal text-(--dark2)">
                      Low Stock Alert Level
                    </Label>
                    <Select defaultValue="SelectaValue">
                      <SelectTrigger style={{ height: '52px' }} className="w-full rounded-[12px] border border-(--grey4) bg-white">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SelectaValue">Select a Value</SelectItem>
                        <SelectItem value="5">5 Units</SelectItem>
                        <SelectItem value="10">10 Units</SelectItem>
                        <SelectItem value="20">20 Units</SelectItem>
                        <SelectItem value="50">50 Units</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="sku"
                      className="text-[16px] font-normal text-(--dark2)"
                    >
                      SKU
                    </Label>
                    <Input
                      id="sku"
                      name="sku"
                      type="number"
                      placeholder='CLN-204'
                      className="h-13 rounded-[12px] border border-(--grey4)"
                    />
                  </div>
                </div>

              </section>
            </form>
          )}
          {currentStep === 2 && (
            <form onSubmit={onSubmit} className="mt-8 space-y-8">
              <section>

                <div className="space-y-3">
                  <h3 className="text-[24px] font-normal text-(--dark1)">
                    Product Description
                  </h3>
                  <Textarea placeholder='Our elegant fragrance diffuser is ideal for large rooms and creates a perfect ambience with advanced micro-diffusion technology.' className='h-50 resize-none'></Textarea>
                </div>
              </section>
              <section className="space-y-3">
                <h3 className="text-[24px] font-normal text-(--dark1)">
                  Upload Images
                </h3>
                <div className="w-full max-w-[420px]">
                  <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={8}
                    acceptedFileTypes={["image/*"]}
                    labelIdle='<div class="filepond--label-action">
                    <h1>Upload Product Images</h1>
                    </div>'
                    className="rounded-[16px]"
                  />
                </div>

              
              </section>




            </form>
          )}






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