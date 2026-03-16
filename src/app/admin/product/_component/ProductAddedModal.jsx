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

const ProductAddedModal = ({ open, onOpenChange, onConfirm }) => {
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
                <g clipPath="url(#clip0_2658_2195)">
                  {" "}
                  <path
                    d="M64 19.6937V59.0766C64 60.3824 63.4813 61.6346 62.558 62.558C61.6346 63.4813 60.3824 64 59.0766 64H4.92343C3.61765 64 2.36536 63.4813 1.44204 62.558C0.518717 61.6346 0 60.3824 0 59.0766L0 19.6937L7.38286 5.46286C8.19345 3.86974 9.41598 2.52283 10.9233 1.56214C12.4307 0.601443 14.1679 0.0620395 15.9543 0L48.0549 0C49.8827 0.0191791 51.6704 0.538424 53.2241 1.50143C54.7778 2.46443 56.0382 3.83443 56.8686 5.46286L64 19.6937Z"
                    fill="#C5EED8"
                  />{" "}
                  <path
                    d="M7.38286 5.46286L0 19.6937H64L56.8594 5.46286C56.0294 3.83511 54.7697 2.46556 53.2169 1.5026C51.6641 0.539646 49.8773 0.0200099 48.0503 0L15.9497 0C14.1641 0.0628442 12.4279 0.602625 10.9214 1.56327C9.41489 2.52392 8.19308 3.87041 7.38286 5.46286Z"
                    fill="#0AAE78"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.1426 19.6937V0H34.8569V19.6937H29.1426Z"
                    fill="#C5EED8"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.4287 32.7905C43.7289 33.0156 43.9818 33.2977 44.1729 33.6205C44.3641 33.9434 44.4898 34.3007 44.5429 34.6721C44.5959 35.0436 44.5753 35.4218 44.4822 35.7853C44.3891 36.1488 44.2253 36.4903 44.0001 36.7905L32.3476 52.3471C31.8937 52.9527 31.2181 53.3534 30.469 53.4614C29.7199 53.5694 28.9586 53.3758 28.3521 52.9231L20.5716 47.0945C19.9654 46.6398 19.5646 45.963 19.4574 45.2128C19.3503 44.4627 19.5455 43.7007 20.0002 43.0945C20.4548 42.4883 21.1317 42.0875 21.8818 41.9804C22.6319 41.8732 23.3939 42.0684 24.0002 42.5231L29.4859 46.6374L39.4287 33.3665C39.6535 33.066 39.9353 32.8127 40.258 32.6211C40.5807 32.4295 40.9379 32.3034 41.3094 32.2499C41.6808 32.1964 42.0592 32.2166 42.4228 32.3094C42.7865 32.4021 43.1283 32.5656 43.4287 32.7905Z"
                    fill="#0AAE78"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_2658_2195">
                    {" "}
                    <rect width="64" height="64" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>

          <DialogHeader className="space-y-2">
            <DialogTitle className="mb-0 pb-0 text-center text-[30px] font-normal text-[#3F434D]">
              Product Saved
            </DialogTitle>

            <DialogDescription className="mx-auto max-w-[60%] text-center text-[14px] font-normal leading-[22px] text-[#3F434D]">
              Product created successfully. You can now view or edit it.
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

export default ProductAddedModal;
