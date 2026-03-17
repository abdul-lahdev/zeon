"use client";
import { Input } from "@/components/ui/input";
import CommonLayout from "@/components/layout/CommonLayout";
import {
  Search,
  HandCoins,
  CircleAlert,
  ShoppingBag,
  TrendingUp,
  CircleCheck,
  CirclePlus,
} from "lucide-react";
import { BestSellingList } from "./_component/BestSellingList";
import SalesDashboard from "./_component/SalesDashboard";
import { CustomerReport } from "./_component/CustomerReport";
import { Button } from "@/components/ui/button";
import OrderHistoryTable from "./_component/OrderHistoryTable";
import UpcomingDeliveries from "./_component/UpcomingDeliveries";
import Link from "next/link";
export default function Page() {
  const dashboardData = [
    {
      title: "Total Income",
      value: "$72,564",
      subtext: "10% • +$720",
      color: "#50C5FF33",
      icon: <HandCoins size={24} className="text-[#21A6E8]" />,
    },
    {
      title: "Total Orders",
      value: "580",
      subtext: "This Month",
      color: "#F5880B1A",
      icon: <ShoppingBag size={24} className="text-[#F5880B]" />,
    },
    {
      title: "Order Due",
      value: "22/100",
      subtext: "This Month",
      color: "#D40F211A",
      icon: <CircleAlert size={24} className="text-[#EC3235]" />,
    },
    {
      title: "Orders Completed",
      value: "78/100",
      subtext: "This Month",
      color: "#0AAE781A",
      icon: <CircleCheck size={24} className="text-[#0AAE78]" />,
    },
  ];

  return (
    <>
      <CommonLayout>
        <section className="bg-(--grey2) rounded-[24px] p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-(--dark3) text-[30px] md:text-[30px] lg:text-[40px] font-normal">
              Dashboard
            </h1>
            <div className="relative">
              <span className="absolute right-0 top-0 translate-y-3.5 -translate-x-4 opacity-50">
                <Search size={24} className="text-(--dark1x)" />
              </span>
              <Input
                placeholder="Search"
                className="rounded-[16px] w-40 md:w-60 lg:w-109 h-14 pr-13 "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-[1fr_438px] gap-4 mt-3">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {dashboardData.map((item, index) => (
                <div key={index} className="bg-white rounded-[24px] py-3 px-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-(--dark1) text-[20px] font-normal">
                      {item.title}
                    </h1>
                    <div
                      style={{ backgroundColor: item.color }}
                      className={`size-10 rounded-full flex items-center justify-center `}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between ">
                    <div>
                      <h2 className="text-(--dark1) text-[30px] md:text-[40px] font-normal">
                        {item.value.includes("/") ? (
                          <>
                            {/* Pehla part (e.g., 22) */}
                            <span>{item.value.split("/")[0]}</span>
                            {/* Dusra part slash ke sath (e.g., /100) */}
                            <span className="text-(--grey3)">
                              /{item.value.split("/")[1]}
                            </span>
                          </>
                        ) : (
                          item.value
                        )}
                      </h2>
                      <p className="text-(--dark2) font-normal text-[18px] flex items-center gap-1">
                        {item.subtext.includes("•") ? (
                          <>
                            {/* Green Part (Percentage + Icon + Dot) */}
                            <span className="text-[#10b981] flex items-center gap-1">
                              {item.subtext.split("•")[0]}
                              <TrendingUp size={18} />
                              <span className="ml-1">•</span>
                            </span>

                            {/* Grey Part (Amount) */}
                            <span className="text-slate-500">
                              {item.subtext.split("•")[1]}
                            </span>
                          </>
                        ) : (
                          item.subtext
                        )}
                      </p>
                    </div>
                    <div className="flex items-end gap-1 h-20 w-25">
                      {[40, 70, 50, 90, 60, 45].map((height, i) => (
                        <div
                          key={i}
                          className={`w-full rounded-full opacity-30 ${
                            i === 3 ? "opacity-100" : ""
                          }`}
                          style={{
                            height: `${height}%`,
                            backgroundColor:
                              item.title === "Total Income"
                                ? "#21A6E8"
                                : item.title === "Total Orders"
                                ? "#F5880B"
                                : item.title === "Order Due"
                                ? "#EC3235"
                                : "#0AAE78",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white bg-[url(/images/dashboard/Glow.png)] rounded-[32px] bg-cover bg-no-repeat bg-center p-5 border-2 border-[#FFFFFF80]">
              <h1 className="text-(--dark1) text-[28px] md:text-[32px] font-normal">
                Place your upcoming order
              </h1>
              <p className="text-(--dark1) text-[14px] font-normal">
                Create a new order or reorder items from your previous
                deliveries.
              </p>
              <Link href="/admin/order/add">
                <Button className="w-max mt-5 h-14 px-5 text-[20px] font-normal">
                  <span>
                    <CirclePlus size={24} className="text-white" />
                  </span>
                  Add Order
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_438px] gap-4 mt-4">
            <div className="w-full overflow-x-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-[354px_1fr_354px] gap-5">
                <BestSellingList />
                <SalesDashboard />
                <CustomerReport />
              </div>
              <div className="mt-4 overflow-x-hidden">
                <OrderHistoryTable />
              </div>
            </div>

            <div>
              <UpcomingDeliveries />
            </div>
          </div>
        </section>
      </CommonLayout>
    </>
  );
}
