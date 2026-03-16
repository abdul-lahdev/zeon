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
import Link from "next/link";
import DeleteCustomerModal from "./DeleteCustomerModal";

const GridView = ({ paginatedData }) => {
  const handleCopy = useCallback((text, label) => {
    if (!text) return;

    navigator.clipboard.writeText(text);

    toast.success(`${label} copied!`, {
      duration: 2000,
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
        fontSize: "14px",
      },
    });
  }, []);
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
      <div className="grid grid-cols-4 gap-4">
        {paginatedData.map((item) => (
          <div
            key={item.id}
            className="border border-(--grey5) bg-white rounded-[24px]"
          >
            <div className="p-4 border-b border-(--grey5)">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="size-[64px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div>
                    <h1>{item.name}</h1>

                    {item.status === "Active" ? (
                      <span className="bg-(--green2) h-6.5 px-2 border border-(--green1) rounded-[9px] flex items-center gap-1 w-max text-[14px] font-normal text-(--green1)">
                        <span className="size-1.5 rounded-full block bg-(--green1)"></span>
                        Active
                      </span>
                    ) : (
                      <span className="bg-(--red3) h-6.5 px-2 border border-(--red2) rounded-[9px] flex items-center gap-1 w-max text-[14px] font-normal text-(--red2)">
                        <span className="size-1.5 rounded-full block bg-(--red2)"></span>
                        Inactive
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="size-11 bg-(--grey5) rounded-full flex items-center justify-center cursor-pointer">
                        <EllipsisVertical />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link href="/admin/customer/12">View</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpen(true)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div
                  onClick={() => handleCopy(item.phone, "Phone number")}
                  className="bg-(--grey5) w-full flex items-center justify-center gap-3 rounded-[8px] border border-(--grey4) min-h-[36px] cursor-pointer hover:opacity-80 transition-all active:scale-95"
                >
                  <span className="text-(--dark1) text-[14px] font-medium">
                    {item.phone}
                  </span>
                  <Copy size={16} className="text-(--dark1)" />
                </div>

                <div
                  onClick={() => handleCopy(item.email, "Email address")}
                  className="bg-(--grey5) w-full flex items-center justify-center gap-3 rounded-[8px] border border-(--grey4) min-h-[36px] cursor-pointer hover:opacity-80 transition-all active:scale-95"
                >
                  <span className="text-(--dark1) text-[14px] font-medium truncate px-2 max-w-[120px]">
                    {item.email}
                  </span>
                  <Copy size={16} className="text-(--dark1) shrink-0" />
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 justify-between">
                <TooltipProvider>
                  <span className="text-(--dark2) text-[14px] font-normal">
                    Address:
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-(--dark2) text-[14px] font-normal text-end truncate max-w-[200px] cursor-help block">
                        {item.address}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.address}</p>
                    </TooltipContent>
                  </Tooltip>

                  <span className="text-(--dark2) text-[14px] font-normal">
                    Last delivery:
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-(--dark2) text-[14px] font-normal text-end truncate max-w-[200px] cursor-help block">
                        {item.lastDelivery}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.lastDelivery}</p>
                    </TooltipContent>
                  </Tooltip>

                  <span className="text-(--dark2) text-[14px] font-normal">
                    Next delivery:
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-(--dark2) text-[14px] font-normal text-end truncate max-w-[200px] cursor-help block">
                        {item.nextDelivery}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.nextDelivery}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(GridView);
