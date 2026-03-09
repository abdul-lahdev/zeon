import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pieData = [
  { name: "Active", value: 200 },
  { name: "Inactive", value: 50 },
];
const COLORS = ["#0AAE78", "#EC3235"];

export const CustomerReport = () => (
  <Card className="flex-1 pt-4 rounded-[32px] border-none shadow-none  overflow-hidden">
    <CardHeader className="flex flex-row items-center justify-between border-b-2 pb-3  border-[#F5F5F5]">
      <CardTitle className="text-[24px] font-normal text-(--dark1) ">
        Customer Report
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="relative h-74 w-full flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={85}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-[14px] font-normal text-(--dark1)">
            Total Customers
          </p>
          <p className="text-[40px] font-normal text-(--dark1)">250</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center w-max mx-auto gap-4 bg-slate-50 px-6 py-2 rounded-2xl">
        <span className="flex items-center gap-2 text-sm text-slate-600">
          <span className="w-2 h-2 rounded-full bg-[#0AAE78]" /> Active
        </span>
        <span className="flex items-center gap-2 text-sm text-slate-600">
          <span className="w-2 h-2 rounded-full bg-[#EC3235]" /> Inactive
        </span>
      </div>
    </CardContent>
  </Card>
);
