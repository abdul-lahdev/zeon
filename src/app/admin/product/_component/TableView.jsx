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
            Product Name
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            SKU
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Category
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Cost Price
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Unit
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Per Pack
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Stock
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Sold
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Revenue
          </TableHead>
          <TableHead className="text-(--dark2) text-[16px] font-medium">
            Availability
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
              {order.productName}
            </TableCell>

            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.sku}
            </TableCell>

            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.category}
            </TableCell>

            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              $ {order.costPrice}
            </TableCell>
            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.unit}
            </TableCell>
            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.perPack}
            </TableCell>
            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.stock}
            </TableCell>
            {/* Status */}

            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              {order.sold}
            </TableCell>
            <TableCell className="text-(--dark1) font-normal text-[16px] py-5">
              $ {order.revenue}
            </TableCell>







            {/* Payment */}
            <TableCell className='px-0 '>
              <span
                className={`px-3 py-1 h-8.5 rounded-[9px] border text-[14px] font-normal flex w-fit items-center gap-1.5
                ${order.availability === "Available"
                    ? "bg-(--green2) text-(--green1) border-(--green1)"
                    : order.availability === "Low Stock"
                      ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                      : "bg-(--red3) text-(--red2) border-(--red2)"
                  }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full
                  ${order.availability === "Available"
                      ? "bg-(--green1)"
                      : order.availability === "Low Stock"
                        ? "bg-(--orange1)"
                        : "bg-(--red2)"
                    }`}
                />
                {order.availability}
              </span>
            </TableCell>

            {/* Actions */}
            <TableCell className="text-right w-[2px]">
              <div className="flex justify-end gap-2 pr-3">
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