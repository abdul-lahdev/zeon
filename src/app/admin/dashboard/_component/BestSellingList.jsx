import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const bestSellingProducts = [
    {
        id: 1,
        name: "Hand sanitizer dispenser",
        description: "Total of 3,323 Items sold.",
        image: "/path-to-image1.png", // Aapne jo upload ki hai
    },
    {
        id: 2,
        name: "Hand sanitizer dispenser",
        description: "Manual disinfectant dispenser",
        image: "/path-to-image2.png",
    },
    {
        id: 3,
        name: "Waste Systems",
        description: "Total of 3,323 Items sold.",
        image: "/path-to-image3.png",
    },
    {
        id: 4,
        name: "Dispenser Systems",
        description: "Total of 3,323 Items sold.",
        image: "/path-to-image4.png",
    },
];

export function BestSellingList() {
    return (
        <Card className="w-full rounded-[32px] border-none shadow-none ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-2 border-(--grey5)">
                <CardTitle className="text-[24px] font-normal text-(--dark1)">
                    Best Selling
                </CardTitle>
                <Select defaultValue="year">
                    <SelectTrigger className="w-27.5 bg-(--grey5) border border-(--grey4)">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="year">This Year</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent className="grid gap-0 p-0">
                {bestSellingProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className={`flex items-center justify-between p-4 px-6 ${index !== bestSellingProducts.length - 1 ? 'border-b border-gray-50' : ''
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            {/* Product Image Container */}
                            <div className="h-16 w-16 bg-[#f3f4f6] rounded-2xl flex items-center justify-center p-2 relative overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-2"
                                    sizes="64px"
                                    priority={index === 0}
                                />
                            </div>

                            {/* Product Info */}
                            <div>
                                <h4 className="text-[18px] font-normal text-(--dark1)">
                                    {product.name}
                                </h4>
                                <p className="text-(--dark2) text-[14px] font-normal">
                                    {product.description}
                                </p>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button className="size-8 cursor-pointer bg-(--grey5) rounded-full flex items-center justify-center text-(--dark1) hover:bg-gray-100 transition-colors">
                            <ArrowUpRight size={24} />
                        </button>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}