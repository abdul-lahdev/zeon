import CommonLayout from "@/components/layout/CommonLayout";
import DeliveriesCalendarPage from "./_component/DeliveriesCalendarPage";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <>
      <CommonLayout>
        <div className="bg-(--grey2) rounded-[24px] p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-(--dark3) text-[48px] font-normal">Schedule</h1>
            <div className="relative">
              <span className="absolute right-0 top-0 translate-y-3.5 -translate-x-4 opacity-50">
                <Search size={24} className="text-(--dark1x)" />
              </span>
              <Input
                placeholder="Search"
                className="rounded-[16px] w-109 h-14 pr-13 "
              />
            </div>
          </div>
          <div className="mt-5">
            <DeliveriesCalendarPage />
          </div>
        </div>
      </CommonLayout>
    </>
  );
}
