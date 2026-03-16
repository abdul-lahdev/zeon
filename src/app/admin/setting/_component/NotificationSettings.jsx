import React from "react";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    id: "new-order",
    title: "New Order Notification",
    description:
      "Receive an alert whenever a new order is created in the system, whether it is placed by a customer or manually added by an admin.",
    defaultChecked: true,
  },
  {
    id: "order-status",
    title: "Order Status Update",
    description:
      "Get notified whenever the delivery status of an order is updated, such as when it is scheduled, shipped, delivered, or cancelled.",
    defaultChecked: false,
  },
  {
    id: "payment-status",
    title: "Payment Status Update",
    description:
      "Receive alerts when the payment status of an order changes, for example when a pending payment is completed or a failed payment becomes successful.",
    defaultChecked: true,
  },
  {
    id: "low-stock",
    title: "Low Stock Alert",
    description:
      "Get notified when a product's available quantity falls below the defined alert level.",
    defaultChecked: false,
  },
  {
    id: "new-customer",
    title: "New Customer Notification",
    description:
      "Receive an alert whenever a new customer is added to the system.",
    defaultChecked: false,
  },
];

const NotificationSettings = () => {
  return (
    <div className="w-full ">
      {notifications.map((item, index) => (
        <div
          key={item.id}
          className={`flex items-center justify-between py-4 ${
            index !== notifications.length - 1
              ? "border-b border-[#EDEDED]"
              : ""
          }`}
        >
          <div className="space-y-1 pr-8">
            <h4 className="text-[22px] font-normal text-[#3D4452]">
              {item.title}
            </h4>
            <p className="text-[16px] text-[#4F5763] leading-relaxed max-w-[80%]">
              {item.description}
            </p>
          </div>

          <Switch
            id={item.id}
            defaultChecked={item.defaultChecked}
            className="data-[state=checked]:bg-[#EC3235] data-[state=unchecked]:bg-[#E4E4E7] w-[65px] h-[36px]"
          />
        </div>
      ))}
    </div>
  );
};

export default NotificationSettings;
