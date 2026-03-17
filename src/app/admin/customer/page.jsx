import CommonLayout from "@/components/layout/CommonLayout";
import CustomerDashboard from "./_component/CustomerDashboard";
import { CirclePlus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomerCards from "./_component/CustomerCards";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <CommonLayout>
        <div className="bg-(--grey2) rounded-[24px] p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-(--dark3) text-[30px] md:text-[30px] lg:text-[40px] font-normal">
              Customers
            </h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute right-0 top-0 translate-y-3.5 -translate-x-4 opacity-50">
                  <Search size={24} className="text-(--dark1x)" />
                </span>
                <Input
                  placeholder="Search"
                  className="rounded-[16px] w-50 lg:w-60 xl:w-109 h-14 pr-13 "
                />
              </div>
              <Link href="/admin/customer/add">
                <Button className="h-14.5 rounded-[16px] px-4">
                  <CirclePlus size={24} className="text-white" /> New Customer
                </Button>{" "}
              </Link>
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
