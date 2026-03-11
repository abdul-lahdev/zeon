"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialProducts = [
  {
    id: 1,
    enabled: false,
    productName: "Liquid Hand Wash 50ml",
    sku: "CLN-204",
    category: "Dispensor",
    basePrice: "$3,520",
    customerPrice: "",
    minQty: "",
    maxQty: "",
  },
  {
    id: 2,
    enabled: true,
    productName: "Floor Cleaner 5L",
    sku: "CLN-118",
    category: "Fragrance",
    basePrice: "$3,520",
    customerPrice: "3,520",
    minQty: "10",
    maxQty: "100",
  },
  {
    id: 3,
    enabled: false,
    productName: "Tissue Box Premium",
    sku: "FOD-502",
    category: "Paper Products",
    basePrice: "$3,520",
    customerPrice: "",
    minQty: "",
    maxQty: "",
  },
  {
    id: 4,
    enabled: true,
    productName: "Garbage Bags Large",
    sku: "24 Feb 2026",
    category: "Fragrance",
    basePrice: "$3,520",
    customerPrice: "3,520",
    minQty: "20",
    maxQty: "150",
  },
  {
    id: 5,
    enabled: false,
    productName: "Floor Cleaner 5L",
    sku: "CLN-204",
    category: "Garbage Bags",
    basePrice: "$3,520",
    customerPrice: "",
    minQty: "",
    maxQty: "",
  },
  {
    id: 6,
    enabled: true,
    productName: "Liquid Hand Wash 50ml",
    sku: "24 Feb 2026",
    category: "Fragrance",
    basePrice: "$3,520",
    customerPrice: "3,520",
    minQty: "40",
    maxQty: "350",
  },
  {
    id: 7,
    enabled: true,
    productName: "Distilled Water 1.5L",
    sku: "24 Feb 2026",
    category: "Dispensor",
    basePrice: "$3,520",
    customerPrice: "3,520",
    minQty: "50",
    maxQty: "500",
  },
  {
    id: 8,
    enabled: true,
    productName: "Floor Cleaner 5L",
    sku: "CLN-204",
    category: "Garbage Bags",
    basePrice: "$3,520",
    customerPrice: "3,520",
    minQty: "30",
    maxQty: "250",
  },
  {
    id: 9,
    enabled: false,
    productName: "Liquid Hand Wash 50ml",
    sku: "24 Feb 2026",
    category: "Fragrance",
    basePrice: "$3,520",
    customerPrice: "",
    minQty: "",
    maxQty: "",
  },
  {
    id: 10,
    enabled: true,
    productName: "Distilled Water 1.5L",
    sku: "24 Feb 2026",
    category: "Dispensor",
    basePrice: "$3,520",
    customerPrice: "3,520",
    minQty: "50",
    maxQty: "500",
  },
];

export default function ProductPricingTable() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const handleToggle = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              enabled: !item.enabled,
              customerPrice: !item.enabled ? item.basePrice.replace("$", "") : "",
              minQty: !item.enabled ? "10" : "",
              maxQty: !item.enabled ? "100" : "",
            }
          : item
      )
    );
  };

  const handleFieldChange = (id, field, value) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const filteredProducts = products.filter((item) =>
    item.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-[24px] bg-white p-4 md:p-6">
      {/* Top Filters */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative w-full max-w-72.5">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="h-11 rounded-[14px] border-(--grey4) pr-10 text-[14px] shadow-none focus-visible:ring-0"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--dark4)" />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="h-11 w-full rounded-[14px] border-(--grey4) bg-white text-[14px] md:w-30">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="dispensor">Dispensor</SelectItem>
            <SelectItem value="fragrance">Fragrance</SelectItem>
            <SelectItem value="paper">Paper Products</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="availability">
          <SelectTrigger className="h-11 w-full rounded-[14px] border-(--grey4) bg-white text-[14px] md:w-30">
            <SelectValue placeholder="Availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="availability">Availability</SelectItem>
            <SelectItem value="enabled">Enabled</SelectItem>
            <SelectItem value="disabled">Disabled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <Table className="min-w-275">
          <TableHeader className="bg-(--grey5)">
            <TableRow className="h-13.5 border-none hover:bg(--grey5)">
              <TableHead className="rounded-l-[14px] pl-4 text-[14px] font-medium text-(--dark2)">
                Enable
              </TableHead>
              <TableHead className="text-[14px] font-medium text-(--dark2)">
                Product Name
              </TableHead>
              <TableHead className="text-[14px] font-medium text-(--dark2)">
                SKU
              </TableHead>
              <TableHead className="text-[14px] font-medium text-(--dark2)">
                Category
              </TableHead>
              <TableHead className="text-[14px] font-medium text-(--dark2)">
                Base Price
              </TableHead>
              <TableHead className="text-[14px] font-medium text-(--dark2)">
                Customer Price
              </TableHead>
              <TableHead className="text-[14px] font-medium text-(--dark2)">
                Min Order Qty
              </TableHead>
              <TableHead className="rounded-r-[14px] pr-4 text-[14px] font-medium text-(--dark2)">
                Max Order Qty
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredProducts.map((item) => (
              <TableRow
                key={item.id}
                className="h-14.5 border-b border-(--grey4) hover:bg-transparent"
              >
                <TableCell className="pl-4">
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    className={`flex h-5 w-5 items-center justify-center rounded-[6px] border transition ${
                      item.enabled
                        ? "border-[#EF4444] bg-[#EF4444] text-white"
                        : "border-(--grey4) bg-(--grey5) text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </button>
                </TableCell>

                <TableCell className="text-[15px] font-normal text-(--dark1)">
                  {item.productName}
                </TableCell>

                <TableCell className="text-[15px] font-normal text-(--dark2)">
                  {item.sku}
                </TableCell>

                <TableCell className="text-[15px] font-normal text-(--dark2)">
                  {item.category}
                </TableCell>

                <TableCell className="text-[15px] font-normal text-(--dark1)">
                  {item.basePrice}
                </TableCell>

                <TableCell>
                  {item.enabled ? (
                    <CompactSelectInput
                      value={item.customerPrice}
                      onChange={(value) =>
                        handleFieldChange(item.id, "customerPrice", value)
                      }
                      options={["3,520", "4,000", "5,000"]}
                    />
                  ) : (
                    <DisabledBox />
                  )}
                </TableCell>

                <TableCell>
                  {item.enabled ? (
                    <CompactSelectInput
                      value={item.minQty}
                      onChange={(value) =>
                        handleFieldChange(item.id, "minQty", value)
                      }
                      options={["10", "20", "30", "40", "50"]}
                    />
                  ) : (
                    <DisabledBox />
                  )}
                </TableCell>

                <TableCell className="pr-4">
                  {item.enabled ? (
                    <CompactSelectInput
                      value={item.maxQty}
                      onChange={(value) =>
                        handleFieldChange(item.id, "maxQty", value)
                      }
                      options={["100", "150", "250", "350", "500"]}
                    />
                  ) : (
                    <DisabledBox />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function DisabledBox() {
  return <div className="h-8 w-26.25 rounded-[8px] bg-(--grey5)" />;
}

function CompactSelectInput({ value, onChange, options }) {
  return (
    <div className="relative w-26.25">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-full appearance-none rounded-[8px] border border-(--grey4) bg-(--grey5) px-3 pr-8 text-[14px] text-(--dark2) outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-(--dark3)" />
    </div>
  );
}