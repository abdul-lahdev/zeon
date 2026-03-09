import React, { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardFilters = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-(--dark2) text-[20px] font-normal mr-3">
        Filters:
      </span>

      <div className="flex items-center gap-3">
        <span className="text-(--dark2) text-[18px] font-normal">Status:</span>
        <Select defaultValue="neutral">
          <SelectTrigger className="w-32.5 bg-(--grey5) border border-(--grey4) h-11">
            <SelectValue placeholder="Select a Value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-(--dark1)" disabled value="neutral">
              Select a Value
            </SelectItem>
            <SelectItem className="text-(--dark1)" value="pending">
              Pending
            </SelectItem>
            <SelectItem className="text-(--dark1)" value="active">
              Active
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-(--dark2) text-[18px] font-normal">Date Range:</span>
        <Select defaultValue="neutral">
          <SelectTrigger className="w-32.5 bg-(--grey5) border border-(--grey4) h-11">
            <SelectValue placeholder="Select a Value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-(--dark1)" disabled value="neutral">
              Select a Value
            </SelectItem>
            <SelectItem className="text-(--dark1)" value="04-04-2026">
              04-04-2026
            </SelectItem>
            <SelectItem className="text-(--dark1)" value="05-04-2026">
              05-04-2026
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-(--dark2) text-[18px] font-normal">Delivery:</span>
        <Select defaultValue="neutral">
          <SelectTrigger className="w-25 bg-(--grey5) border border-(--grey4) h-11">
            <SelectValue placeholder="Select a Value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-(--dark1)" disabled value="neutral">
              Select a Value
            </SelectItem>
            <SelectItem className="text-(--dark1)" value="today">
              Today
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-(--dark2) text-[18px] font-normal">Payment:</span>
        <Select defaultValue="neutral">
          <SelectTrigger className="w-27.25 bg-(--grey5) border border-(--grey4) h-11">
            <SelectValue placeholder="Select a Value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-(--dark1)" disabled value="neutral">
              Select a Value
            </SelectItem>
            <SelectItem className="text-(--dark1)" value="paid">
              Paid
            </SelectItem>
            <SelectItem className="text-(--dark1)" value="unpaid">
              Unpaid
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default memo(DashboardFilters);