import { Eye, Download } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const orders = [
  { id: "ORD-10425", customer: "Jetnetix Solutions", date: "12 Feb 2026", delivery: "24 Feb 2026", qty: "48 Units", amount: "$34,500", payment: "Paid", status: "Pending" },
  { id: "ORD-10425", customer: "Jetnetix Solutions", date: "12 Feb 2026", delivery: "24 Feb 2026", qty: "48 Units", amount: "$34,500", payment: "Partial", status: "Confirmed" },
  { id: "ORD-10425", customer: "Jetnetix Solutions", date: "12 Feb 2026", delivery: "24 Feb 2026", qty: "48 Units", amount: "$34,500", payment: "Paid", status: "Delivered" },
  { id: "ORD-10425", customer: "Jetnetix Solutions", date: "12 Feb 2026", delivery: "24 Feb 2026", qty: "48 Units", amount: "$34,500", payment: "Partial", status: "Pending" },
  { id: "ORD-10425", customer: "Jetnetix Solutions", date: "12 Feb 2026", delivery: "24 Feb 2026", qty: "48 Units", amount: "$34,500", payment: "Unpaid", status: "Cancelled" },
];
export default function OrderHistoryTable() {
  return (
    <div className="bg-white rounded-[24px] p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-(--dark1) text-[24px] font-normal">Order History</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-(--dark1) h-8 flex items-center gap-2">
              <Download className="h-4 w-4" /> Report
            </Button>
            <Button variant="ghost" size="sm" className="text-(--dark2) underline">
              View all
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <Table >
          <TableHeader className="bg-(--grey5) rounded-[12px] h-[60px] bg-(--grey5)">
            <TableRow className='border-none' >
              <TableHead className='rounded-l-[12px] pl-6 text-(--dark2) text-[16px] font-medium'>Order ID</TableHead>
              <TableHead className=' text-(--dark2) text-[16px] font-medium'>Customer Name</TableHead>
              <TableHead className=' text-(--dark2) text-[16px] font-medium'>Order Date</TableHead>
              <TableHead className=' text-(--dark2) text-[16px] font-medium'>Delivery Date</TableHead>
              <TableHead className=' text-(--dark2) text-[16px] font-medium'>Qty</TableHead>
              <TableHead className=' text-(--dark2) text-[16px] font-medium'>Amount</TableHead>
              <TableHead className=' text-(--dark2) text-[16px] font-medium'>Payment</TableHead>
              <TableHead className=' text-(--dark2) text-[16px] font-medium'>Status</TableHead>
              <TableHead className="text-right rounded-r-[12px] text-(--dark2) text-[16px] font-medium px-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index} className="hover:bg-slate-50/50">
                <TableCell className="pl-6 font-medium text-slate-600 ">{order.id}</TableCell>
                <TableCell className="text-slate-600">{order.customer}</TableCell>
                <TableCell className="text-slate-500">{order.date}</TableCell>
                <TableCell className="text-slate-500">{order.delivery}</TableCell>
                <TableCell className="text-slate-600">{order.qty}</TableCell>
                <TableCell className="font-semibold text-slate-700">{order.amount}</TableCell>
                
                {/* Payment Badge */}
                <TableCell >
                  <span className={`px-3 py-1 rounded-md border text-xs font-medium flex items-center w-fit gap-1.5
                    ${order.payment === 'Paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 
                      order.payment === 'Partial' ? 'bg-orange-50 text-orange-600 border-orange-200' : 
                      'bg-red-50 text-red-600 border-red-200'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${order.payment === 'Paid' ? 'bg-emerald-500' : order.payment === 'Partial' ? 'bg-orange-500' : 'bg-red-500'}`} />
                    {order.payment}
                  </span>
                </TableCell>

                {/* Status Badge */}
                <TableCell >
                  <span className={`px-3 py-1 rounded-md border text-xs font-medium flex items-center w-fit gap-1.5
                    ${order.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-200' : 
                      order.status === 'Confirmed' ? 'bg-purple-50 text-purple-600 border-purple-200' : 
                      order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                      'bg-red-50 text-red-600 border-red-200'}`}>
                    {order.status}
                  </span>
                </TableCell>

                {/* Action Button */}
                <TableCell className="text-right pr-6">
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-slate-100 rounded-full text-slate-500">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  );
}