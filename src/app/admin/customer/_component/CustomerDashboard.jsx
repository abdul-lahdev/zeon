"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  FileText,
  Settings2,
  LayoutGrid,
  List,
  CircleCheck,
  Clock,
  Truck,
  CircleX,
  Edit,
  Trash2,
  TableCellsSplit,
  EllipsisVertical,
} from "lucide-react";

const CustomerDashboard = () => {
  // 1. Mock Data Array
  const initialData = [
    {
      id: 1,
      name: "Jetnetix Solutions",
      phone: "+44 20 223 6556",
      email: "info@jetnetix.com",
      address: "1022 Garden, GD Web...",
      status: "Active",
      lastDelivery: "08 May 2026",
      nextDelivery: "14 May 2026",
      delivered: "48 Orders",
      payment: "Paid",
    },
    {
      id: 2,
      name: "Jetnetix Solutions",
      phone: "+44 20 223 6556",
      email: "info@jetnetix.com",
      address: "1022 Garden, GD Web...",
      status: "Inactive",
      lastDelivery: "08 May 2026",
      nextDelivery: "14 May 2026",
      delivered: "48 Orders",
      payment: "Paid",
    },
    {
      id: 3,
      name: "Jetnetix Solutions",
      phone: "+44 20 223 6556",
      email: "info@jetnetix.com",
      address: "1022 Garden, GD Web...",
      status: "Active",
      lastDelivery: "08 May 2026",
      nextDelivery: "14 May 2026",
      delivered: "48 Orders",
      payment: "Partial",
    },
    {
      id: 4,
      name: "Jetnetix Solutions",
      phone: "+44 20 223 6556",
      email: "info@jetnetix.com",
      address: "1022 Garden, GD Web...",
      status: "Inactive",
      lastDelivery: "08 May 2026",
      nextDelivery: "14 May 2026",
      delivered: "48 Orders",
      payment: "Unpaid",
    },
    // Aap aur objects yahan add kar sakte hain...
  ];

  const [data, setData] = useState(initialData);
  const [tableView, setTableView] = useState(true);

  return (
    <div className="bg-white rounded-[32px] p-4">
      {/* --- FILTERS SECTION --- */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
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
          <div className="relative flex items-center h-11 bg-[#F5F5F5] border border-[#EDEDED] rounded-[16px] px-1 w-fit cursor-pointer">
            {/* Sliding Background Indicator */}
            <motion.div
              className="absolute h-9 bg-red-500 rounded-[12px] shadow-sm"
              initial={false}
              animate={{
                x: tableView ? 44 : 0,
                width: 42,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            <div
              onClick={() => setTableView(false)}
              className={`relative z-10 w-11 h-full flex items-center justify-center transition-colors duration-200 ${
                !tableView ? "text-white" : "text-gray-400"
              }`}
            >
              <LayoutGrid size={20} />
            </div>
            <div
              onClick={() => setTableView(true)}
              className={`relative z-10 w-11 h-full flex items-center justify-center transition-colors duration-200 ${
                tableView ? "text-white" : "text-gray-400"
              }`}
            >
              <TableCellsSplit size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* --- TABLE SECTION --- */}
      {tableView ? (
        <Table>
          <TableHeader className="bg-(--grey5) h-15">
            <TableRow className="border-none">
              <TableHead className="rounded-l-[12px] pl-6 text-(--dark2) text-[16px] font-medium">
                Customer Name
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Phone Number
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Email
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Address
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Status
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Last Delivery
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Next Delivery
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Delivered
              </TableHead>
              <TableHead className="text-(--dark2) text-[16px] font-medium">
                Payment Status
              </TableHead>
              <TableHead className="text-center rounded-r-[12px] text-(--dark2) text-[16px] font-medium px-6">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {initialData.map((order, index) => (
              <TableRow
                key={index}
                className="hover:bg-slate-50/50 border-b border-(--grey5)"
              >
                <TableCell className="pl-6 text-(--dark1) font-normal text-[16px] py-5">
                  {order.name}
                </TableCell>
                <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
                  {order.phone}
                </TableCell>
                <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
                  {order.email}
                </TableCell>
                <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
                  {order.address}
                </TableCell>

                {/* Status Badge (Circle Style from Image) */}
                <TableCell>
                  <span
                    className={`px-3 py-1 h-9.75 rounded-[12px] border text-[14px] font-normal flex items-center w-fit gap-1.5 
                  ${
                    order.status === "Active"
                      ? "bg-(--green2) text-(--green1) border-(--green1)"
                      : "bg-(--red3) text-(--red2) border-(--red2)"
                  }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        order.status === "Active"
                          ? "bg-(--green1)"
                          : "bg-(--red2)"
                      }`}
                    />
                    {order.status}
                  </span>
                </TableCell>

                <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
                  {order.lastDelivery}
                </TableCell>
                <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
                  {order.nextDelivery}
                </TableCell>
                <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
                  {order.delivered}
                </TableCell>

                {/* Payment Status Badge */}
                <TableCell>
                  <span
                    className={`px-3 py-1 h-8.5 rounded-[9px] border text-[14px] font-normal flex items-center w-fit gap-1.5
                  ${
                    order.payment === "Paid"
                      ? "bg-(--green2) text-(--green1) border-(--green1)"
                      : order.payment === "Partial"
                      ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                      : "bg-(--red3) text-(--red2) border-(--red2)"
                  }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        order.payment === "Paid"
                          ? "bg-(--green1)"
                          : order.payment === "Partial"
                          ? "bg-(--orange1)"
                          : "bg-(--red2)"
                      }`}
                    />
                    {order.payment}
                  </span>
                </TableCell>

                {/* Action Buttons */}
                <TableCell className="text-right pr-6">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-9 bg-(--grey5) rounded-full border border-(--grey4) text-(--dark1) "
                    >
                      <Eye className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-9 bg-(--grey5) rounded-full border border-(--grey4) text-(--dark1) "
                    >
                      <Edit className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-9 bg-(--grey5) rounded-full border border-(--grey4) text-(--dark1) "
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          <div className="border border-(--grey5) bg-white rounded-[24px] p-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="size-[64px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h1>Jetnetix Solutions</h1>
                  <span className="bg-(--green2) h-6.5 px-2 border border-(--green1) rounded-[9px] flex items-center gap-1 w-max text-[14px] font-normal text-(--green1)">
                    <span className="size-1.5 rounded-full block bg-(--green1)"></span>
                    Active
                  </span>
                </div>
              </div>
              <div>
                <div className="size-11 bg-(--grey5) rounded-full">
                  <EllipsisVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
