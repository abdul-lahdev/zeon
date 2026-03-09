import { CardAction } from "@/components/ui/card";
import {
  CircleAlert,
  UserCheck,
  UserPlus,
  UserRoundMinus,
  Users,
} from "lucide-react";

export default function CustomerCards() {
  const cardData = [
    {
      name: "Total",
      total: 236,
    },
    {
      name: "Active",
      total: 208,
    },
    {
      name: "Inactive",
      total: 28,
    },
    {
      name: "Recurring",
      total: 164,
    },
    {
      name: "Payment Due",
      total: 13,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-5 gap-5 mt-3">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-white min-h-39 rounded-[24px] p-4 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-(--dark1) text-[20px] font-normal">
                {item.name}
              </h2>
              {item.name === "Total" ? (
                <div className="size-10 rounded-full bg-[#50C5FF33] flex items-center justify-center">
                  <Users size={24} className="text-[#21A6E8]" />
                </div>
              ) : item.name === "Active" ? (
                <div className="size-10 rounded-full bg-[#0AAE781A] flex items-center justify-center">
                  <UserCheck size={24} className="text-[#0AAE78]" />
                </div>
              ) : item.name === "Inactive" ? (
                <div className="size-10 rounded-full bg-[#F5880B1A] flex items-center justify-center">
                  <UserRoundMinus size={24} className="text-[#F5880B]" />
                </div>
              ) : item.name === "Recurring" ? (
                <div className="size-10 rounded-full bg-[#8C37FD1A] flex items-center justify-center">
                  <UserPlus size={24} className="text-[#8C37FD]" />
                </div>
              ) : (
                <div className="size-10 rounded-full bg-[#D40F211A] flex items-center justify-center">
                  <CircleAlert size={24} className="text-[#EC3235]" />
                </div>
              )}
            </div>
            <h1 className="text-(--dark1) text-[40px] font-normal">
              {item.total}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
