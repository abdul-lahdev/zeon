import React, { memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX, Clock, Edit, Eye, Trash2, Truck } from "lucide-react";

const TableView = ({ paginatedData }) => {
  return (
    <Table>
      <TableHeader className="bg-(--grey5) h-15">
        <TableRow className="border-none">
          <TableHead className="rounded-l-[12px] pl-6 text-(--dark2) text-[16px] font-medium">
            Order ID
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Customer Name
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Order Date
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Delivery Date
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Address
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Items
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Qty
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Amount
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Payment
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Status
          </TableHead>
          <TableHead className="text-center rounded-r-[12px] text-(--dark2) text-[16px] font-medium px-6">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {paginatedData.map((order) => (
          <TableRow
            key={order.orderId}
            className="hover:bg-slate-50/50 border-b border-(--grey5)"
          >
            <TableCell className="pl-6 text-(--dark1) font-normal text-[16px] py-5">
              {order.orderId}
            </TableCell>
            <TableCell className="pl-6 text-(--dark1) font-normal text-[16px] py-5">
              {order.customerName}
            </TableCell>

            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.orderDate}
            </TableCell>

            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.deliveryDate}
            </TableCell>

            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.address}
            </TableCell>
            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.items} items
            </TableCell>
            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.units} units
            </TableCell>
            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              $ {order.amount}
            </TableCell>

            <TableCell>
              <span
                className={`px-3 py-1 h-8.5 rounded-[9px] border text-[14px] font-normal flex items-center w-fit gap-1.5
                ${order.paymentStatus === "Paid"
                    ? "bg-(--green2) text-(--green1) border-(--green1)"
                    : order.paymentStatus === "Partial"
                      ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                      : "bg-(--red3) text-(--red2) border-(--red2)"
                  }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full
                  ${order.paymentStatus === "Paid"
                      ? "bg-(--green1)"
                      : order.paymentStatus === "Partial"
                        ? "bg-(--orange1)"
                        : "bg-(--red2)"
                    }`}
                />
                {order.paymentStatus}
              </span>
            </TableCell>
            <TableCell className="py-5 w-2">
              <span
                className={`px-3 py-1 h-9.75 rounded-[12px] border text-[14px] font-normal flex items-center w-fit gap-1.5 whitespace-nowrap
                    ${order.orderStatus === "Pending"
                    ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                    : order.orderStatus === 'Confirmed' ? 'bg-(--purple2) text-(--purple1) border-(--purple1)' : order.orderStatus === 'Delivered' ? 'bg-(--green3) text-(--green1) border-(--green1)' : "bg-(--red3) text-(--red2) border-(--red2)"
                  }`}
              >
                {order.orderStatus === 'Pending' ? <Clock size={14} className="text-(--orange1)" /> : order.orderStatus === 'Confirmed' ? <CircleCheck size={14} className="text-(--purple1)" /> : order.orderStatus === 'Delivered' ? <Truck size={14} className="text-(--green1)" /> : <CircleX size={14} className="text-(--red2)" />}
                {order.orderStatus}
              </span>
            </TableCell>









            {/* Payment */}


            {/* Actions */}
            <TableCell className="text-right pr-6">
              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 bg-(--grey5) rounded-full border border-(--grey4) text-(--dark1)"
                >
                  <Eye className="size-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 bg-(--grey5) rounded-full border border-(--grey4) text-(--dark1)"
                >
                  <Edit className="size-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 bg-(--grey5) rounded-full border border-(--grey4) text-(--dark1)"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(TableView);