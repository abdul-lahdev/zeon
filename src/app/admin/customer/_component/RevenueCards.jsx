import {
    CircleAlert,
    UserCheck,
    UserPlus,
    UserRoundMinus,
    Users,
} from "lucide-react";

export default function RevenueCards() {
    const cardData = [
        {
            name: "Total Revenue",
            total: '$3,564',
        },
        {
            name: "Total Orders",
            total: '48',
        },
        {
            name: "Complete Orders",
            total: '45%',
        },

        {
            name: "Payment Behavior",
            total: 'On time',
        },

    ];

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {cardData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white min-h-39 rounded-[24px] p-4 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-(--dark1) text-[20px] font-normal">
                                {item.name}
                            </h2>
                            {item.name === "Total Revenue" ? (
                                <div className="size-10 rounded-full bg-[#50C5FF33] flex items-center justify-center">
                                    <Users size={24} className="text-[#21A6E8]" />
                                </div>
                            ) : item.name === "Complete Orders" ? (
                                <div className="size-10 rounded-full bg-[#0AAE781A] flex items-center justify-center">
                                    <UserCheck size={24} className="text-[#0AAE78]" />
                                </div>
                            ) : item.name === "Total Orders" ? (
                                <div className="size-10 rounded-full bg-[#F5880B1A] flex items-center justify-center">
                                    <UserRoundMinus size={24} className="text-[#F5880B]" />
                                </div>
                            ) : item.name === "Payment Behavior" ? (
                                <div className="size-10 rounded-full bg-[#8C37FD1A] flex items-center justify-center">
                                    <UserPlus size={24} className="text-[#8C37FD]" />
                                </div>
                            ) : ''}
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className="text-(--dark1) text-[40px] font-normal">
                                {item.total}
                            </h1>
                            {item.name === 'Payment Behavior' ? null : <span className='text-(--dark2) text-[18px] font-normal'>This Year</span>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
