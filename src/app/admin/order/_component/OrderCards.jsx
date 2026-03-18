import {
  CircleAlert,
  CircleCheck,
  HandCoins,
  Loader,
  ShoppingBag,
} from "lucide-react";

export default function OrderCards() {
  const cardData = [
    {
      name: "Total Orders",
      total: '2,298',
    },
    {
      name: "Total Income",
      total: '$72,564',
    },
    {
      name: "Processing",
      total: '33',
    },
    {
      name: "Delivered",
      total: '646',
    },

  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-3">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-white min-h-39 rounded-[24px] p-4 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-(--dark1) text-[20px] font-normal">
                {item.name}
              </h2>
              {item.name === "Total Orders" ? (
                <div className="size-10 rounded-full bg-[#50C5FF33] flex items-center justify-center">
                  <ShoppingBag size={24} className="text-[#21A6E8]" />
                </div>
              ) : item.name === "Delivered" ? (
                <div className="size-10 rounded-full bg-[#0AAE781A] flex items-center justify-center">
                  <CircleCheck size={24} className="text-[#0AAE78]" />
                </div>
              ) : item.name === "Processing" ? (
                <div className="size-10 rounded-full bg-[#F5880B1A] flex items-center justify-center">
                  <Loader size={24} className="text-[#F5880B]" />
                </div>
              ) : item.name === "Total Income" ? (
                <div className="size-10 rounded-full bg-[#8C37FD1A] flex items-center justify-center">
                  <HandCoins size={24} className="text-[#8C37FD]" />
                </div>
              ) : (
                <div className="size-10 rounded-full bg-[#D40F211A] flex items-center justify-center">
                  <CircleAlert size={24} className="text-[#EC3235]" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-(--dark1) text-[40px] font-normal">
                {item.total}
              </h1>
            {item.name==='Total Income'&&<span className="text-[18px] font-normal text-(--dark2) ">This Month</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
