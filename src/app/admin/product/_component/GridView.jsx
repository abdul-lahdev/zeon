import React, { memo, useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, EllipsisVertical } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DeleteCustomerModal from "./ProductDeleteModal";
import Link from "next/link";

const GridView = ({ paginatedData }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <DeleteCustomerModal
        open={open}
        onOpenChange={setOpen}
        onConfirm={() => {
          console.log("delete");
          setOpen(false);
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {paginatedData.map((order) => (
          <div
            key={order.id}
            className="border border-(--grey5) bg-white rounded-[24px] overflow-hidden pb-4"
          >
            <Image
              src="/images/product/product.png"
              alt="Picture of the author"
              width={500}
              height={500}
              className="w-full"
            />

            <div className="mt-3 p-4">
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 h-5.5 md:h-6.5 rounded-[9px] border text-[14px] font-normal flex w-fit text-[10px] mt-1 md:mt-0 md:text-[14px] items-center gap-1.5
                ${
                  order.availability === "Available"
                    ? "bg-(--green2) text-(--green1) border-(--green1)"
                    : order.availability === "Low Stock"
                    ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                    : "bg-(--red3) text-(--red2) border-(--red2)"
                }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full
                  ${
                    order.availability === "Available"
                      ? "bg-(--green1)"
                      : order.availability === "Low Stock"
                      ? "bg-(--orange1)"
                      : "bg-(--red2)"
                  }`}
                  />
                  {order.availability}
                </span>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="size-7 md:size-11 p-1.5 bg-(--grey5) rounded-full flex items-center justify-center cursor-pointer">
                      <EllipsisVertical size={20} className="text-(--dark1)" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link href="/admin/product/12">View</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setOpen(true)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <h1 className="text-(--dark1) mt-3 text-[20px] md:text-[25px] font-normal">
                MAXX PRO 600
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <Button
                  variant="outline"
                  className="w-full bg-(--grey5) border-none"
                >
                  Cleaning Category
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-(--grey5) border-none"
                >
                  Cleaning Category
                </Button>
              </div>
            </div>
            <div className="border-t border-(--grey5) grid grid-cols-3">
              <div className="border-l border-(--grey5) ps-4 pt-4">
                <h2 className="text-(--dark2) text-[14px] font-semiBold">
                  Price:
                </h2>
                <p className="text-(--dark1) text-[18px] font-medium">$430</p>
              </div>
              <div className="border-l border-(--grey5) ps-4 pt-4">
                <h2 className="text-(--dark2) text-[14px] font-semiBold">
                  Sold
                </h2>
                <p className="text-(--dark1) text-[18px] font-medium">
                  44 Items
                </p>
              </div>
              <div className="border-l border-(--grey5) ps-4 pt-4">
                <h2 className="text-(--dark2) text-[14px] font-semiBold">
                  Revenue:
                </h2>
                <p className="text-(--dark1) text-[18px] font-medium">
                  $44,500
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(GridView);
