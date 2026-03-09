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
    <section className="w-full overflow-hidden rounded-[28px] border border-[#E7E7E7] bg-[#F7F7F7]">
      <div className="border-b border-[#E7E7E7] px-6 py-4 sm:px-7">
        <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#2F2F2F]">
          Todays Deliveries
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
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
        rounded-[18px] border border-white/60 p-4
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        bg-[linear-gradient(135deg,rgba(219,235,246,0.95)_0%,rgba(225,243,234,0.92)_50%,rgba(244,231,248,0.92)_100%)]
      "
    >
      {/* top row */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="inline-flex h-9 items-center rounded-xl bg-white/70 px-3 text-[14px] font-medium text-[#5B5B5B] shadow-sm backdrop-blur-sm">
          {item.time}
        </span>

        <StatusBadge status={item.paymentStatus} />
      </div>

      {/* company */}
      <div className="space-y-2">
        <h3 className="text-[18px] font-semibold leading-none tracking-[-0.02em] text-[#323232]">
          {item.company}
        </h3>

        <div className="flex flex-col gap-1 text-[14px] text-[#666666] sm:flex-row sm:items-center sm:justify-between">
          <p>ID: {item.id}</p>
          <p>
            Delivery: <span className="font-medium">{item.deliveryText}</span>
          </p>
        </div>
      </div>

      {/* actions */}
      <div className="mt-5 flex items-center gap-3">
        <Button className="h-11 flex-1 rounded-[14px] bg-[#16B26A] text-[15px] font-medium text-white shadow-none hover:bg-[#13975b]">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Mark as completed
        </Button>

        <Button
          variant="outline"
          className="h-11 min-w-[98px] rounded-[14px] border-[#DDDDDD] bg-white/70 px-5 text-[15px] font-medium text-[#444444] hover:bg-white"
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
      className={`inline-flex h-9 items-center rounded-xl border px-4 text-[14px] font-medium backdrop-blur-sm ${
        isPaid
          ? "border-[#16B26A] bg-[#ECFDF3] text-[#16B26A]"
          : "border-[#F04438] bg-[#FEF3F2] text-[#F04438]"
      }`}
    >
      <span
        className={`mr-2 h-2 w-2 rounded-full ${
          isPaid ? "bg-[#16B26A]" : "bg-[#F04438]"
        }`}
      />
      {status}
    </div>
  );
}