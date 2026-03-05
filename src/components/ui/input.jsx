import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-[12px] border border-[#EDEDED] bg-white px-4 outline-none transition-all focus:border-(--grey1) focus:ring-1 focus:ring-(--grey1)",
        "focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props} />
  );
}

export { Input }
