import CommonLayout from "@/components/layout/CommonLayout";
import DeliveriesCalendarPage from "./_component/DeliveriesCalendarPage";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <>
      <CommonLayout>
        <div className="bg-(--grey2) rounded-[24px] p-5">
          <div className="flex flex-col gap-3 md:flex-row items-start md:items-center justify-between">
            <h1 className="text-(--dark3) text-[30px] md:text-[30px] lg:text-[40px] font-normal">Schedule</h1>
            <div className="relative w-full md:w-fit">
              <span className="absolute right-0 top-0 translate-y-3.5 -translate-x-4 opacity-50">
                <Search size={24} className="text-(--dark1x)" />
              </span>
              <Input
                placeholder="Search"
                className="rounded-[16px] w-full lg:w-60 xl:w-109 h-14 pr-13 "
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
