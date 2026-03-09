import {
  Eye,
  Download,
  Clock,
  CircleCheck,
  Truck,
  CircleX,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const orders = [
  {
    id: "ORD-10425",
    customer: "Jetnetix Solutions",
    date: "12 Feb 2026",
    delivery: "24 Feb 2026",
    qty: "48 Units",
    amount: "$34,500",
    payment: "Paid",
    status: "Pending",
  },
  {
    id: "ORD-10425",
    customer: "Jetnetix Solutions",
    date: "12 Feb 2026",
    delivery: "24 Feb 2026",
    qty: "48 Units",
    amount: "$34,500",
    payment: "Partial",
    status: "Confirmed",
  },
  {
    id: "ORD-10425",
    customer: "Jetnetix Solutions",
    date: "12 Feb 2026",
    delivery: "24 Feb 2026",
    qty: "48 Units",
    amount: "$34,500",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: "ORD-10425",
    customer: "Jetnetix Solutions",
    date: "12 Feb 2026",
    delivery: "24 Feb 2026",
    qty: "48 Units",
    amount: "$34,500",
    payment: "Partial",
    status: "Pending",
  },
  {
    id: "ORD-10425",
    customer: "Jetnetix Solutions",
    date: "12 Feb 2026",
    delivery: "24 Feb 2026",
    qty: "48 Units",
    amount: "$34,500",
    payment: "Unpaid",
    status: "Cancelled",
  },
];
export default function OrderHistoryTable() {
  return (
    <div className="bg-white rounded-[24px] p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-(--dark1) text-[24px] font-normal">
          Order History
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-(--dark1) h-8 flex items-center gap-2"
          >
            <Download className="h-4 w-4" /> Report
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-(--dark2) underline"
          >
            View all
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader className="bg-(--grey5) rounded-[12px] h-15 bg-(--grey5)">
          <TableRow className="border-none">
            <TableHead className="rounded-l-[12px] pl-6 text-(--dark2) text-[16px] font-medium">
              Order ID
            </TableHead>
            <TableHead className=" text-(--dark2) text-[16px] font-medium">
              Customer Name
            </TableHead>
            <TableHead className=" text-(--dark2) text-[16px] font-medium">
              Order Date
            </TableHead>
            <TableHead className=" text-(--dark2) text-[16px] font-medium">
              Delivery Date
            </TableHead>
            <TableHead className=" text-(--dark2) text-[16px] font-medium">
              Qty
            </TableHead>
            <TableHead className=" text-(--dark2) text-[16px] font-medium">
              Amount
            </TableHead>
            <TableHead className=" text-(--dark2) text-[16px] font-medium">
              Payment
            </TableHead>
            <TableHead className=" text-(--dark2) text-[16px] font-medium">
              Status
            </TableHead>
            <TableHead className="text-right rounded-r-[12px] text-(--dark2) text-[16px] font-medium px-6">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index} className="hover:bg-slate-50/50">
              <TableCell className="pl-6 text-(--dark1) font-normal text-[18px] py-5 ">
                {order.id}
              </TableCell>
              <TableCell className="text-(--dark1) font-normal text-[18px] py-5">
                {order.customer}
              </TableCell>
              <TableCell className="text-(--dark1) font-normal text-[18px] py-5">
                {order.date}
              </TableCell>
              <TableCell className="text-(--dark1) font-normal text-[18px] py-5">
                {order.delivery}
              </TableCell>
              <TableCell className="text-(--dark1) font-normal text-[18px] py-5">
                {order.qty}
              </TableCell>
              <TableCell className="text-(--dark1) font-normal text-[18px] py-5">
                {order.amount}
              </TableCell>

              {/* Payment Badge */}
              <TableCell>
                <span
                  className={`px-3 py-1 h-8.5 rounded-[9px] border text-[14px] font-normal flex items-center w-fit gap-1.5
                    ${
                      order.payment === "Paid"
                        ? "bg-(--green2) text-(--green1) border-(--green1)"
                        : order.payment === "Partial"
                        ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                        : "bg-(--red3) text-(--red2) border-(--red2)"
                    }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      order.payment === "Paid"
                        ? "bg-(--green1)"
                        : order.payment === "Partial"
                        ? "bg-(--orange1)"
                        : "bg-(--red2)"
                    }`}
                  />
                  {order.payment}
                </span>
              </TableCell>

              {/* Status Badge */}
              <TableCell>
                <span
                  className={`px-3 py-1 h-8.5 rounded-[9px] border text-[14px] font-normal flex items-center w-fit gap-1.5
                    ${
                      order.status === "Pending"
                        ? "bg-(--orange2) text-(--orange1) border-(--orange1)"
                        : order.status === "Confirmed"
                        ? "bg-(--purple2) text-(--purple1) border-(--purple1)"
                        : order.status === "Delivered"
                        ? "bg-(--green2) text-(--green1) border-(--green1)"
                        : "bg-(--red3) text-(--red2) border-(--red2)"
                    }`}
                >
                  {order.status === "Pending" ? (
                    <Clock size={14} className="text-(--orange1)" />
                  ) : order.status === "Confirmed" ? (
                    <CircleCheck size={14} className="text-(--purple1)" />
                  ) : order.status === "Delivered" ? (
                    <Truck size={14} className="text-(--green1)" />
                  ) : (
                    <CircleX size={14} className="text-(--red2)" />
                  )}{" "}
                  {order.status}
                </span>
              </TableCell>

              {/* Action Button */}
              <TableCell className="text-right pr-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-11 bg-(--grey5) rounded-full border border-(--grey4) text-(--dark1)"
                >
                  <Eye className="size-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
