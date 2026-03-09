import React from "react";
import { Badge } from "@/components/ui/badge"; // Make sure you have shadcn badge installed
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    id: "ORD-10425",
    time: "02:00 AM",
    company: "Jetnetix Solutions",
    status: "Paid",
    slot: "02:00 am",
  },
  {
    id: "ORD-10425",
    time: "02:00 AM",
    company: "Jetnetix Solutions",
    status: "Unpaid",
    slot: "06:00 am",
  },
  {
    id: "ORD-10425",
    time: "02:00 AM",
    company: "Jetnetix Solutions",
    status: "Partial",
    slot: "08:00 am",
  },
];

const days = [
  { day: "Sun", date: "01" },
  { day: "Mon", date: "02" },
  { day: "Tue", date: "03" },
  { day: "Wed", date: "04" },
  { day: "Thu", date: "05" },
  { day: "Fri", date: "06" },
  { day: "Sat", date: "07" },
];

const timeSlots = [
  "12:00 am",
  "01:00 am",
  "02:00 am",
  "05:00 am",
  "06:00 am",
  "07:00 am",
  "08:00 am",
  "09:00 am",
];
export default function UpcomingDeliveries() {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "Unpaid":
        return "bg-red-50 text-red-600 border-red-200";
      case "Partial":
        return "bg-orange-50 text-orange-600 border-orange-200";
      default:
        return "bg-gray-50";
    }
  };
  return (
    <>
      <Card className="flex-1 rounded-[32px] border-none pt-4 shadow-none h-full  overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between border-b-2 pb-3  border-[#F5F5F5]">
          <CardTitle className="text-[24px] font-normal text-(--dark1) ">
            Upcoming Deliveries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border border-(--grey6) rounded-[12px] bg-white p-3">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <ChevronLeft
                  size={16}
                  className="text-(--dark1) cursor-pointer"
                />
                <span className="font-normal text-[14px] text-(--dark1)">
                  Week 1
                </span>
                <ChevronRight
                  size={16}
                  className="text-(--dark1) cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-1 text-[14px] font-normal text-(--dark1) cursor-pointer">
                October 2024{" "}
                <ChevronRight size={16} className="text-(--dark1) rotate-90" />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              {days.map((d, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center p-2 rounded-[8px] w-12.5 ${
                    i === 0 ? "bg-(--blue1)" : "bg-(--blue1)"
                  }`}
                >
                  <span className="text-[14px] capitalize text-(--dark2) font-normal">
                    {d.day}
                  </span>
                  <span
                    className={`text-[14px] font-semibold ${
                      i === 0 ? "text-(--dark1)" : "text-(--dark1)"
                    }`}
                  >
                    {d.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-(--grey6) rounded-[12px] bg-white p-3 mt-4">
            <div className="grid grid-cols-[60px_1fr] text-[12px] font-normal text-(--dark2)">
              <div>GMT + 5</div>
              <div className="flex justify-between px-4">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>
            {/* Timeline */}
            <div className="space-y-5 relative mt-4">
              {timeSlots.map((slot) => {
                const event = events.find((e) => e.slot === slot);

                return (
                  <div
                    key={slot}
                    className="grid grid-cols-[70px_1fr] items-center group"
                  >
                    <span className="text-[14px] font-normal text-(--dark2) mt-1">
                      {slot}
                    </span>

                    {event ? (
                      <div
                        className={`p-3 rounded-2xl border bg-[url(/images/dashboard/smCard.png)] bg-white bg-cover bg-center shadow-sm transition-all hover:shadow-md`}
                      >
                        <div className="flex justify-between items-center">
                          <Badge
                            variant="outline"
                            className="bg-white text-[10px] rounded-[6px] font-normal text-(--dark2) border border-(--grey5) px-2 py-0 h-7.5"
                          >
                            {event.time}
                          </Badge>
                          <Badge
                            className={`rounded-full px-3 font-normal border ${getStatusStyles(
                              event.status
                            )}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                event.status === "Paid"
                                  ? "bg-emerald-500"
                                  : event.status === "Unpaid"
                                  ? "bg-red-500"
                                  : "bg-orange-500"
                              }`}
                            />
                            {event.status}
                          </Badge>
                        </div>
                        <h4 className="font-normal text-(--dark1) mt-2 text-[20px]">
                          {event.company}
                        </h4>
                        <div className="flex justify-between mt-2 text-[14px] font-normal">
                          <span className="text-(--dark2)">ID: {event.id}</span>
                          <div>
                            <span className="text-(--dark2)">Delivery:</span>
                            <span className="text-(--dark1)">
                              Today, 12:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-px bg-[#F5F5F5]  w-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
