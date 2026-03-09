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
import { Edit, Eye, Trash2 } from "lucide-react";

const TableView = ({ paginatedData }) => {
  return (
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
        {paginatedData.map((order) => (
          <TableRow
            key={order.id}
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

            {/* Status */}
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

            {/* Payment */}
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
                  className={`h-1.5 w-1.5 rounded-full
                  ${
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