import {
    ChartLine,
    CircleAlert,
    UserCheck,
    UserPlus,
    UserRoundMinus,
    Users,
} from "lucide-react";

export default function ProductRevenue() {
    const cardData = [
        {
            name: "Total Sales",
            total: '450',
        },
        {
            name: "Total Revenue",
            total: '$72,564',
        },
        {
            name: "Conversion",
            total: '45%',
        },

        {
            name: "Orders Completed",
            total: 'Excellent',
        },

    ];

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
                {cardData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white min-h-39 rounded-[24px] p-4 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-(--dark1) text-[20px] font-normal">
                                {item.name}
                            </h2>
                            {item.name === "Total Sales" ? (
                                <div className="size-10 rounded-full bg-[#50C5FF33] flex items-center justify-center">
                                    <ChartLine size={24} className="text-[#21A6E8]" />
                                </div>
                            ) : item.name === "Total Revenue" ? (
                                <div className="size-10 rounded-full bg-[#F5880B1A] flex items-center justify-center">
                                    <ChartLine size={24} className="text-[#F5880B]" />
                                </div>
                            ) : item.name === "Conversion" ? (
                                <div className="size-10 rounded-full bg-[#8C37FD1A] flex items-center justify-center">

                                    <ChartLine size={24} className="text-[#8C37FD]" />
                                </div>
                            ) : item.name === "Orders Completed" ? (
                                <div className="size-10 rounded-full bg-[#0AAE781A] flex items-center justify-center">

                                    <ChartLine size={24} className="text-[#0AAE78]" />
                                </div>
                            ) : ''}
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className="text-(--dark1) text-[30px] md:text-[40px] font-normal">
                                {item.total}
                            </h1>
                            {item.name === 'Conversion' || 'Orders Completed' ? null : <span className='text-(--dark2) text-[18px] font-normal'>This Year</span>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
