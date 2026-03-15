import CommonLayout from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ChevronLeft, SquarePen } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <CommonLayout>
        <div className="bg-(--grey2) rounded-[24px] p-5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-start">
              <Link href="/admin/customer">
                <div className="size-7 flex items-center justify-center rounded-full bg-white">
                  <ChevronLeft size={20} />
                </div>
              </Link>
              <div>
                <h1 className="text-(--dark1) text-[24px] font-normal">
                  Settings
                </h1>
                <p className="text-(--dark1)">
                  from here you can manage settings
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="h-14.5 flex items-center gap-2 text-[20px] font-normal text-[#3F434D]"
              >
                <ArrowDownToLine size={24} className="text-(--dark1)" />
                Invoice
              </Button>
              <Button
                variant="secondary"
                className="h-14.5 flex items-center gap-2 text-[20px] font-normal text-[#3F434D]"
              >
                <SquarePen size={24} className="text-(--dark1)" />
                Edit
              </Button>
            </div>
          </div>
          {/* <CustomerCards /> */}
          <div className="mt-5">{/* <CustomerDashboard /> */}</div>
        </div>
      </CommonLayout>
    </>
  );
}
