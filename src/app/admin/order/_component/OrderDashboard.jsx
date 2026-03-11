"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Settings2,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react"
import TableView from "./TableView";
import { orders } from "@/app/constants/OrderData";

const OrderDashboard = () => {

  // Paginated Data
  const [perPage, setPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / perPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return orders.slice(startIndex, endIndex);
  }, [currentPage, perPage]);

  const handlePerPageChange = (value) => {
    setPerPage(Number(value));
    setCurrentPage(1); // reset page
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  // Paginated Data




  return (
    <>
      <div className="bg-white rounded-[32px] p-4">
        {/* --- FILTERS SECTION --- */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-3 pl-5">
            <span className="text-(--dark2) text-[20px] font-normal mr-3">
              Filters:
            </span>
            <div className="flex items-center gap-3">
              <span className="text-(--dark2) text-[18px] font-normal">
                Status:
              </span>
              <Select defaultValue="neutral">
                <SelectTrigger className="w-32.5 bg-(--grey5) border border-(--grey4) h-11">
                  <SelectValue placeholder="Select a Value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-(--dark1)" disabled value="neutral">
                    Select a Value
                  </SelectItem>
                  <SelectItem className="text-(--dark1)" value="pending">
                    Pending
                  </SelectItem>
                  <SelectItem className="text-(--dark1)" value="active">
                    Active
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-(--dark2) text-[18px] font-normal">
                Date Range:
              </span>
              <Select defaultValue="neutral">
                <SelectTrigger className="w-32.5 bg-(--grey5) border border-(--grey4) h-11">
                  <SelectValue placeholder="Select a Value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-(--dark1)" disabled value="neutral">
                    Select a Value
                  </SelectItem>
                  <SelectItem className="text-(--dark1)" value="04-04-2026">
                    04-04-2026
                  </SelectItem>
                  <SelectItem className="text-(--dark1)" value="05-04-2026">
                    05-04-2026
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-(--dark2) text-[18px] font-normal">
                Delivery:
              </span>
              <Select defaultValue="neutral">
                <SelectTrigger className="w-25 bg-(--grey5) border border-(--grey4) h-11">
                  <SelectValue placeholder="Select a Value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-(--dark1)" disabled value="neutral">
                    Select a Value
                  </SelectItem>
                  <SelectItem className="text-(--dark1)" value="today">
                    Today
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-(--dark2) text-[18px] font-normal">
                Payment:
              </span>
              <Select defaultValue="neutral">
                <SelectTrigger className="w-27.25 bg-(--grey5) border border-(--grey4) h-11">
                  <SelectValue placeholder="Select a Value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-(--dark1)" disabled value="neutral">
                    Select a Value
                  </SelectItem>
                  <SelectItem className="text-(--dark1)" value="paid">
                    Paid
                  </SelectItem>
                  <SelectItem className="text-(--dark1)" value="unpaid">
                    Unpaid
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="gap-2 text-(--dark1) bg-(--grey5) border-(--grey4) h-11"
            >
              <FileText size={24} className="text-(--dark1)" /> Report
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="gap-2 text-(--dark1) bg-(--grey5) border-(--grey4) h-11 w-11 rounded-[16px]"
            >
              <Settings2 size={24} className="text-(--dark1)" />
            </Button>
          
          </div>
        </div>

        {/* --- TABLE SECTION --- */}
        <TableView paginatedData={paginatedData} />

      </div>

      {/* pagination section */}
      <div className="flex items-center ml-auto gap-4 p-4 w-fit rounded-lg">
        <div className="bg-white rounded-2xl border-none h-14 flex items-center px-4 shadow-sm">
          <span className="text-slate-500 text-sm mr-2 whitespace-nowrap">
            Per Page:
          </span>

          <Select value={String(perPage)} onValueChange={handlePerPageChange}>
            <SelectTrigger className="border-none shadow-none focus:ring-0 text-slate-700 font-medium w-[60px] p-0 h-auto">
              <SelectValue placeholder="25" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Pagination className="bg-white rounded-2xl h-14 px-4 shadow-sm w-auto">
          <PaginationContent className="gap-2">
            <PaginationItem>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center w-8 h-8 disabled:opacity-40"
              >
                <ChevronLeft className="h-5 w-5 text-slate-600" />
              </button>
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`inline-flex items-center justify-center rounded-full w-10 h-10 text-sm ${currentPage === page
                    ? "bg-[#f1f3f5] text-slate-900"
                    : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {page}
                </button>
              </PaginationItem>
            ))}

            <PaginationItem>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex items-center justify-center w-8 h-8 disabled:opacity-40"
              >
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default OrderDashboard;
