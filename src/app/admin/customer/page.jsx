import CommonLayout from "@/components/layout/CommonLayout";
import CustomerDashboard from "./_component/CustomerDashboard";
import { CirclePlus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomerCards from "./_component/CustomerCards";


export default function Page() {
  return (
    <>
      <CommonLayout>
        <div className="bg-(--grey2) rounded-[24px] p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-(--dark3) text-[48px] font-normal">
              Customers
            </h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute right-0 top-0 translate-y-3.5 -translate-x-4 opacity-50">
                  <Search size={24} className="text-(--dark1x)" />
                </span>
                <Input
                  placeholder="Search"
                  className="rounded-[16px] w-109 h-14 pr-13 "
                />
              </div>
              <Button className="h-14.5 rounded-[16px] px-4">
                <CirclePlus size={24} className="text-white" /> New Customer
              </Button>
            </div>
          </div>
          <CustomerCards />
          <div className="mt-5">
            <CustomerDashboard />
          </div>
        </div>
      </CommonLayout>
    </>
  );
}
