"use client";

import React, { useMemo, useState, useCallback } from "react";
import { Trash2, Plus, Search, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PRODUCT_OPTIONS = [
  {
    id: 1,
    name: "Liquid Hand Wash 50ml",
    sku: "CLN-204",
    category: "Dispenser",
    price: 400,
  },
  {
    id: 2,
    name: "Floor Cleaner 5L",
    sku: "CLN-118",
    category: "Fragrance",
    price: 400,
  },
  {
    id: 3,
    name: "Tissue Box Premium",
    sku: "FOD-502",
    category: "Paper Products",
    price: 400,
  },
  {
    id: 4,
    name: "Distilled Water 1.5L",
    sku: "24 Feb 2026",
    category: "Fragrance",
    price: 400,
  },
];

const CATEGORY_OPTIONS = ["All Categories", "Dispenser", "Fragrance", "Paper Products"];
const AVAILABILITY_OPTIONS = ["Availability", "In Stock", "Low Stock", "Out of Stock"];

const createRow = (product = PRODUCT_OPTIONS[0]) => ({
  rowId: crypto.randomUUID(),
  productId: product.id,
  productName: product.name,
  sku: product.sku,
  category: product.category,
  price: product.price,
  quantity: 100,
  discount: 15,
});

const formatCurrency = (value) => {
  return `$${Number(value || 0).toLocaleString()}`;
};

export default function InvoiceItemsTable() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [availabilityFilter, setAvailabilityFilter] = useState("Availability");

  const [rows, setRows] = useState([
    createRow(PRODUCT_OPTIONS[0]),
    createRow(PRODUCT_OPTIONS[1]),
    createRow(PRODUCT_OPTIONS[2]),
    createRow(PRODUCT_OPTIONS[3]),
  ]);

  const [shippingFee, setShippingFee] = useState(500);
  const [shippingTax, setShippingTax] = useState(500);

  const updateRow = useCallback((rowId, key, value) => {
    setRows((prev) =>
      prev.map((row) => {
        if (row.rowId !== rowId) return row;

        if (key === "productId") {
          const selectedProduct = PRODUCT_OPTIONS.find(
            (item) => item.id === Number(value)
          );

          if (!selectedProduct) return row;

          return {
            ...row,
            productId: selectedProduct.id,
            productName: selectedProduct.name,
            sku: selectedProduct.sku,
            category: selectedProduct.category,
            price: selectedProduct.price,
          };
        }

        return {
          ...row,
          [key]:
            key === "quantity" || key === "discount" || key === "price"
              ? Number(value)
              : value,
        };
      })
    );
  }, []);

  const addRow = useCallback(() => {
    setRows((prev) => [...prev, createRow(PRODUCT_OPTIONS[0])]);
  }, []);

  const deleteRow = useCallback((rowId) => {
    setRows((prev) => prev.filter((row) => row.rowId !== rowId));
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearch =
        row.productName.toLowerCase().includes(search.toLowerCase()) ||
        row.sku.toLowerCase().includes(search.toLowerCase()) ||
        row.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All Categories" || row.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [rows, search, categoryFilter]);

  const totalProductCost = useMemo(() => {
    return rows.reduce((sum, row) => {
      const rowTotal = row.price * row.quantity * (1 - row.discount / 100);
      return sum + rowTotal;
    }, 0);
  }, [rows]);

  const grandTotal = useMemo(() => {
    return totalProductCost + Number(shippingFee || 0) + Number(shippingTax || 0);
  }, [totalProductCost, shippingFee, shippingTax]);

  return (
    <div className="w-full rounded-[28px] bg-white mt-5">
      {/* Filters */}
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative w-full md:max-w-60">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="h-11 w-full  rounded-[14px] border-[#E9E9E9] bg-[#FAFAFA] pl-9 text-[14px] shadow-none focus-visible:ring-0"
          />
        </div>

        <SimpleSelect
          value={categoryFilter}
          onChange={setCategoryFilter}
          options={CATEGORY_OPTIONS}
          className="min-w-[160px]"
        />

        <SimpleSelect
          value={availabilityFilter}
          onChange={setAvailabilityFilter}
          options={AVAILABILITY_OPTIONS}
          className="min-w-[140px]"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-5">
        <div className="w-full">
          {/* Header */}
          <div className="grid grid-cols-[200px_131px_100px_100px_100px_100px_100px_80px]  md:grid-cols-[2.2fr_1.1fr_1.2fr_1fr_1.1fr_1.1fr_1fr_80px] ">
            {[
              "Product Name",
              "SKU",
              "Category",
              "Price",
              "Quantity",
              "Discounts",
              "Total",
              "Delete",
            ].map((item) => (
              <div key={item} className={`px-4 py-3 text-(--dark2) text-[16px] font-medium bg-(--grey5) ${item==='Product Name' ? 'rounded-l-[12px]':item==='Delete'?'rounded-r-[12px]' : ''}`}>
                {item}
              </div>
            ))}
          </div>

          {/* Body */}
          {filteredRows.length > 0 ? (
            filteredRows.map((row, index) => {
              const rowTotal = row.price * row.quantity * (1 - row.discount / 100);

              return (
                <div
                  key={row.rowId}
                  className={`grid grid-cols-[200px_131px_100px_100px_100px_100px_100px_80px]  md:grid-cols-[2.2fr_1.1fr_1.2fr_1fr_1.1fr_1.1fr_1fr_80px] items-center text-[14px] text-[#374151] ${index !== filteredRows.length ? "border-b border-[#ECECEC]" : ""
                    }`}
                >
                  <div className="px-4 py-4">
                    <select
                      value={row.productId}
                      onChange={(e) => updateRow(row.rowId, "productId", e.target.value)}
                      className="h-11 w-full rounded-[12px] cursor-pointer border border-(--grey4) bg-(--grey5) px-3 text-[16px] outline-none text-(--dark1)"
                    >
                      {PRODUCT_OPTIONS.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="px-4 py-4 text-(--dark1) font-normal text-[16px]">{row.sku}</div>

                  <div className="px-4 py-4 text-(--dark1) font-normal text-[16px]">{row.category}</div>

                  <div className="px-4 py-4 text-(--dark1) font-normal text-[16px]">
                    {formatCurrency(row.price)}
                  </div>

                  <div className="px-4 py-4">
                    <Input
                      type="number"
                      min="1"
                      value={row.quantity}
                      onChange={(e) =>
                        updateRow(row.rowId, "quantity", e.target.value || 0)
                      }
                      className="h-11 rounded-[14px] border-[#EAEAEA] bg-[#F8F8F8] shadow-none focus-visible:ring-0"
                    />
                  </div>

                  <div className="px-4 py-4">
                    <div className="relative">
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={row.discount}
                        onChange={(e) =>
                          updateRow(row.rowId, "discount", e.target.value || 0)
                        }
                        className="h-11 rounded-[14px] border-[#EAEAEA] bg-[#F8F8F8] pr-8 shadow-none focus-visible:ring-0"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-[#6B7280]">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-4 text-(--dark1) font-normal text-[16px]">
                    {formatCurrency(rowTotal)}
                  </div>

                  <div className="px-4 py-4">
                    <button
                      type="button"
                      onClick={() => deleteRow(row.rowId)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#E7E7E7] bg-[#F8F8F8] text-[#6B7280] transition hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="px-4 py-10 text-center text-[14px] text-[#6B7280]">
              No matching items found.
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-[1fr_450px]">
        {/* Left */}
        <div className="flex items-start pt-4">
          <Button
            type="button"
            onClick={addRow}
            variant="outline"
            className="h-11 rounded-[14px] border-(--grey4) bg-(--grey5) px-5 text-[14px] font-normal text-(--dark1) shadow-none hover:bg-[#EFEFEF]"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add More Items
          </Button>
        </div>

        {/* Summary */}
        <div className="overflow-hidden border-t-0 border border-[#ECECEC]">
          <SummaryRow
            label="Total Product Cost"
            value={formatCurrency(totalProductCost)}
          />

          <SummaryEditableRow
            label="Shipping Fee"
            inputValue={shippingFee}
            onChange={setShippingFee}
            value={formatCurrency(shippingFee)}
          />

          <SummaryEditableRow
            label="Shipping Tax"
            inputValue={shippingTax}
            onChange={setShippingTax}
            value={formatCurrency(shippingTax)}
          />

          <div className="flex items-center justify-between bg-(--grey5) px-4 py-5">
            <span className="text-[16px] font-normal text-(--dark2)">Grand Total</span>
            <span className="text-[16px] font-normal text-(--dark1)">
              {formatCurrency(grandTotal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleSelect({ value, onChange, options, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full appearance-none rounded-[14px] border border-[#E9E9E9] bg-[#FAFAFA] px-4 pr-10 text-[14px] text-[#4B5563] outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-[#ECECEC] px-4 py-5">
      <span className="text-[16px] text-(--dark2) font-normal">{label}</span>
      <span className="text-[16px] font-normal text-(--dark1)">{value}</span>
    </div>
  );
}

function SummaryEditableRow({ label, inputValue, onChange, value }) {
  return (
    <div className="flex items-center justify-between border-b border-[#ECECEC] px-4 py-5 gap-4">
      <span className="text-[16px] font-normal text-(--dark2)">{label}</span>

      <div className="flex items-center gap-4">
        <Input
          type="number"
          min="0"
          value={inputValue}
          onChange={(e) => onChange(Number(e.target.value || 0))}
          className="h-11 w-[120px] rounded-[14px] border-[#EAEAEA] bg-[#F8F8F8] shadow-none focus-visible:ring-0"
        />
        <span className="min-w-[70px] text-right text-[16px] font-normal text-(--dark1)">
          {value}
        </span>
      </div>
    </div>
  );
}