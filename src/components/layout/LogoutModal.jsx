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

const LogoutModal = ({ open, onOpenChange, onConfirm }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" max-w-[382px] rounded-[18px] border-0 p-0 overflow-hidden shadow-xl">
        <div className="px-6 pt-10 pb-9 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDEBEC]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_2658_3273)">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.85714 0C5.03851 0 3.29437 0.722447 2.00841 2.00841C0.722447 3.29437 0 5.03852 0 6.85714L0 57.1429C0 58.9615 0.722447 60.7056 2.00841 61.9916C3.29437 63.2776 5.03851 64 6.85714 64H38.8571C40.6758 64 42.4199 63.2776 43.7059 61.9916C44.9918 60.7056 45.7143 58.9615 45.7143 57.1429V48.2789C43.8594 46.7932 42.6559 44.6436 42.3588 42.2857H26.2857C23.5578 42.2857 20.9416 41.202 19.0126 39.2731C17.0837 37.3442 16 34.7279 16 32C16 29.2721 17.0837 26.6558 19.0126 24.7269C20.9416 22.798 23.5578 21.7143 26.2857 21.7143H42.3588C42.6559 19.3564 43.8594 17.2068 45.7143 15.7211V6.85714C45.7143 5.03852 44.9918 3.29437 43.7059 2.00841C42.4199 0.722447 40.6758 0 38.8571 0L6.85714 0Z"
                    fill="#FAC0C0"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.9996 22.8552C48.0002 22.1776 48.2016 21.5153 48.5784 20.952C48.9551 20.3887 49.4904 19.9498 50.1165 19.6905C50.7426 19.4313 51.4315 19.3634 52.0962 19.4954C52.7609 19.6274 53.3715 19.9535 53.851 20.4324L62.9939 29.5752C63.6359 30.2181 63.9966 31.0895 63.9966 31.9981C63.9966 32.9067 63.6359 33.7781 62.9939 34.421L53.851 43.5638C53.3715 44.0427 52.7609 44.3688 52.0962 44.5008C51.4315 44.6328 50.7426 44.565 50.1165 44.3057C49.4904 44.0464 48.9551 43.6075 48.5784 43.0442C48.2016 42.4809 48.0002 41.8186 47.9996 41.141V36.5695H26.2853C25.0729 36.5695 23.9101 36.0879 23.0528 35.2306C22.1955 34.3733 21.7139 33.2105 21.7139 31.9981C21.7139 30.7857 22.1955 29.6229 23.0528 28.7656C23.9101 27.9083 25.0729 27.4267 26.2853 27.4267H47.9996V22.8552Z"
                    fill="#EF4444"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_2658_3273">
                    {" "}
                    <rect width="64" height="64" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>

          <DialogHeader className="space-y-2">
            <DialogTitle className="mb-0 pb-0 text-center text-[30px] font-normal text-[#3F434D]">
              Logout
            </DialogTitle>

            <DialogDescription className="mx-auto max-w-[60%] text-center text-[14px] font-normal leading-[22px] text-[#3F434D]">
              Are you sure, do you want log out
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
              Logout
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

export default LogoutModal;
