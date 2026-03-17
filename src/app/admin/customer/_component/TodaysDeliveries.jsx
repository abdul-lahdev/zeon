"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const deliveries = [
  {
    id: "ORD-10425",
    company: "Jetnetix Solutions",
    time: "02:00 AM",
    deliveryText: "Today, 12:00 PM",
    paymentStatus: "Paid",
  },
  {
    id: "ORD-10425",
    company: "Jetnetix Solutions",
    time: "02:00 AM",
    deliveryText: "Today, 12:00 PM",
    paymentStatus: "Unpaid",
  },
];

export default function TodaysDeliveries() {
  return (
    <section className="w-full overflow-hidden rounded-[24px]  bg-white">
      <div className="border-b border-(--grey5) px-6 py-4 sm:px-7">
        <h2 className="text-[18px] md:text-[24px] font-normal  text-(--dark1)">
          Todays Deliveries
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 p-5 ">
        {deliveries.map((item, index) => (
          <DeliveryCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function DeliveryCard({ item }) {
  const isPaid = item.paymentStatus === "Paid";

  return (
    <div
      className="
        rounded-[16px] border border-white min-h-56.75 p-4
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        bg-[linear-gradient(135deg,rgba(219,235,246,0.95)_0%,rgba(225,243,234,0.92)_50%,rgba(244,231,248,0.92)_100%)]
      "
    >
      {/* top row */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="inline-flex h-8 md:h-9 items-center rounded-[8px] bg-white px-3 border border-(--grey5) text-[12px] md:text-[18px] font-normal text-(--dark2) backdrop-blur-sm">
          {item.time}
        </span>

        <StatusBadge status={item.paymentStatus} />
      </div>

      {/* company */}
      <div className="space-y-2">
        <h3 className="text-[20px] md:text-[24px] font-normal text-(--dark1)">
          {item.company}
        </h3>

        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[16px] md:text-[18px] font-normal text-(--dark1)">ID: {item.id}</p>
          <p className="text-[16px] md:text-[18px] font-normal text-(--dark2)">
            Delivery: <span className="text-(--dark1)">{item.deliveryText}</span>
          </p>
        </div>
      </div>

      {/* actions */}
      <div className="mt-5 flex flex-col md:flex-row items-center gap-3">
        <Button className="h-12.5 w-full flex-1 rounded-[16px] bg-(--green1) text-[16px] md:text-[20px] font-normal text-white  hover:bg-(--green4)">
          <CheckCircle2 size={24} className="text-white" />
          Mark as completed
        </Button>

        <Button
          variant="outline"
          className="h-[unset] md:h-12.5 min-w-full md:min-w-24.5 border rounded-[16px] border-(--grey4) bg-white px-5 text-[16px] md:text-[20px] font-normal text-(--dark1) hover:bg-white/50"
        >
          Details
        </Button>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const isPaid = status === "Paid";

  return (
    <div
      className={`inline-flex h-8 items-center rounded-[12px] border px-4 text-[12px] md:text-[18px] font-normal backdrop-blur-sm ${
        isPaid
          ? "border-(--green1) bg-(--green2) text-(--green1)"
          : "border-(--red2) bg-(--red3) text-(--red2)"
      }`}
    >
      <span
        className={`mr-2 h-2 w-2 rounded-full ${
          isPaid ? "bg-(--green1)" : "bg-(--red2)"
        }`}
      />
      {status}
    </div>
  );
}