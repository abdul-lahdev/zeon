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

const CustomerAddedMOdal = ({ open, onOpenChange, onConfirm }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" max-w-[382px] rounded-[18px] border-0 p-0 overflow-hidden shadow-xl">
        <div className="px-6 pt-10 pb-9 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_2658_1912)">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.8571 27.4286C26.4944 27.4286 29.9827 25.9837 32.5546 23.4118C35.1265 20.8398 36.5714 17.3515 36.5714 13.7143C36.5714 10.077 35.1265 6.58875 32.5546 4.01682C29.9827 1.44489 26.4944 0 22.8571 0C19.2199 0 15.7316 1.44489 13.1597 4.01682C10.5878 6.58875 9.14286 10.077 9.14286 13.7143C9.14286 17.3515 10.5878 20.8398 13.1597 23.4118C15.7316 25.9837 19.2199 27.4286 22.8571 27.4286ZM2.28571 57.1429H27.6571C26.8411 55.3064 26.6528 53.2523 27.1214 51.2982C27.59 49.344 28.6893 47.5986 30.2495 46.332C31.8096 45.0654 33.7436 44.348 35.7523 44.2909C37.7611 44.2338 39.7327 44.8401 41.3623 46.016L44.1051 47.8674L44.4571 47.36C42.679 42.2616 39.154 37.9568 34.5064 35.2081C29.8587 32.4595 24.3883 31.4442 19.0638 32.3421C13.7394 33.24 8.90447 35.9931 5.41528 40.114C1.92609 44.2349 0.00775871 49.4575 0 54.8571C0 55.4634 0.240816 56.0447 0.66947 56.4734C1.09812 56.902 1.67951 57.1429 2.28571 57.1429Z"
                    fill="#C5EED8"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.628 37.258C62.9882 37.5281 63.2917 37.8666 63.5211 38.254C63.7505 38.6414 63.9013 39.0703 63.965 39.516C64.0287 39.9617 64.0039 40.4156 63.8922 40.8518C63.7805 41.2879 63.5839 41.6978 63.3138 42.058L49.0509 62.6294C48.7807 62.9896 48.4423 63.2931 48.0549 63.5225C47.6674 63.7519 47.2386 63.9027 46.7929 63.9664C46.3472 64.0301 45.8933 64.0053 45.4571 63.8936C45.021 63.7818 44.6111 63.5853 44.2509 63.3151L33.9652 56.1837C33.605 55.9136 33.3015 55.5751 33.0721 55.1877C32.8427 54.8003 32.6919 54.3714 32.6282 53.9257C32.5645 53.48 32.5893 53.0261 32.701 52.5899C32.8128 52.1538 33.0093 51.7439 33.2795 51.3837C33.5496 51.0235 33.8881 50.7201 34.2755 50.4907C34.6629 50.2613 35.0917 50.1104 35.5374 50.0467C35.9832 49.9831 36.4371 50.0078 36.8732 50.1195C37.3094 50.2313 37.7193 50.4278 38.0795 50.698L45.6223 55.7723L57.828 37.9437C58.3736 37.2163 59.1858 36.7353 60.086 36.6067C60.9862 36.4781 61.9006 36.7124 62.628 37.258Z"
                    fill="#0AAE78"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_2658_1912">
                    {" "}
                    <rect width="64" height="64" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>

          <DialogHeader className="space-y-2">
            <DialogTitle className="mb-0 pb-0 text-center text-[30px] font-normal text-[#3F434D]">
              Customer Added
            </DialogTitle>

            <DialogDescription className="mx-auto max-w-[60%] text-center text-[14px] font-normal leading-[22px] text-[#3F434D]">
              Customer created successfully. You can now view or edit it.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="border-t border-[#E9EDF2] px-3 py-4">
          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              className="h-11 w-full rounded-[12px] bg-[#0AAE78] text-[15px] font-medium text-white hover:text-white hover:bg-[#0aae77ec]"
            >
              Continue
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerAddedMOdal;
