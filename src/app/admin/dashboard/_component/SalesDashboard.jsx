"use client";
import React from "react";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- Sample Data for Graph ---
const graphData = [
  { name: "Jan", income: 50 },
  { name: "Feb", income: 1700 },
  { name: "Mar", income: 600 },
  { name: "Apr", income: 1600 },
  { name: "May", income: 550 },
  { name: "June", income: 1100 },
  { name: "Jul", income: 2400 },
  { name: "Aug", income: 1000 },
];

// --- Sample Data for Best Selling ---
const products = [
  {
    id: 1,
    name: "Hand sanitizer dispenser",
    desc: "Total of 3,323 Items sold.",
    img: "/p1.png",
  },
  {
    id: 2,
    name: "Hand sanitizer dispenser",
    desc: "Manual disinfectant dispenser",
    img: "/p2.png",
  },
  {
    id: 3,
    name: "Waste Systems",
    desc: "Total of 3,323 Items sold.",
    img: "/p3.png",
  },
  {
    id: 4,
    name: "Dispenser Systems",
    desc: "Total of 3,323 Items sold.",
    img: "/p4.png",
  },
];

export default function SalesDashboard() {
  return (
    <Card className="flex-1 rounded-[32px] border-none pt-4 shadow-none overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between border-b-2 pb-3  border-[#F5F5F5]">
        <CardTitle className="text-[24px] font-normal text-(--dark1) ">
          Sales Graph
        </CardTitle>
        <div className='flex items-center gap-3'>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-(--red1)"></span>
            <span className="text-[16px] font-normal text-(--dark1)">Income</span>
          </div>
          <Select defaultValue="year">
            <SelectTrigger className="w-27.5 bg-(--grey5) border border-(--grey4)">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="h-87.5 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={graphData}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 14 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 14 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-4 shadow-xl rounded-2xl border-none">
                      <p className="text-xs text-slate-400 mb-1">Apr 2026</p>
                      <p className="text-lg font-bold text-slate-800">
                        ${payload[0].value.toLocaleString()}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#a855f7"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorIncome)"
              activeDot={{ r: 6, strokeWidth: 0, fill: "#a855f7" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
