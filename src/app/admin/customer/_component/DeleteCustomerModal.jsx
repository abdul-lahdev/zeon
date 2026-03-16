"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DeleteCustomerModal = ({ open, onOpenChange, onConfirm }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" max-w-[382px] rounded-[18px] border-0 p-0 overflow-hidden shadow-xl">
        <div className="px-6 pt-10 pb-9 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDEBEC]">
              <Trash2 className="h-8 w-8 text-[#F04444] stroke-[2.2]" />
            </div>
          </div>

          <DialogHeader className="space-y-2">
            <DialogTitle className="mb-0 pb-0 text-center text-[30px] font-normal text-[#3F434D]">
              Delete Customer
            </DialogTitle>

            <DialogDescription className="mx-auto max-w-[60%] text-center text-[14px] font-normal leading-[22px] text-[#3F434D]">
              Your customer will be deleted and cannot be recovered
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="border-t border-[#E9EDF2] px-3 py-4">
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              onClick={onConfirm}
              className="h-11 w-full rounded-[12px] bg-[#F13232] text-[15px] font-medium text-white hover:bg-[#dd2c2c]"
            >
              Delete
            </Button>

            <DialogClose asChild>
              <Button
                type="button"
                variant="ghost"
                className="h-11 rounded-[12px] bg-[#F3F4F6] text-[15px] font-medium text-[#3F434D] hover:bg-[#e9eaec]"
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCustomerModal;
