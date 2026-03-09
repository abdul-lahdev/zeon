import CommonLayout from "@/components/layout/CommonLayout"
import { Button } from "@/components/ui/button"
import { ChevronLeft, SquarePen} from "lucide-react"
import Link from "next/link"
import CustomerInformation from "../_component/CustomerInformation"
import RevenueCards from "../_component/RevenueCards"
import TodaysDeliveries from "../_component/TodaysDeliveries"

export default function Page() {
    return (

        <>
            <CommonLayout>
                <div className="bg-(--grey2) rounded-[24px] p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <Link href='/admin/customer'>
                                <div className="size-7 flex items-center justify-center rounded-full bg-white">
                                    <ChevronLeft size={20} />
                                </div>

                            </Link>
                            <div>
                                <h1 className="text-(--dark1) text-[24px] font-normal">Customers Details</h1>
                                <p className="text-(--dark1)">
                                    here is the overview of customer purchase
                                </p>
                            </div>
                        </div>
                        <Button variant="secondary" className='h-14.5 flex items-center gap-2 text-[20px] font-normal text-[#3F434D]'>
                            <SquarePen size={24} className="text-(--dark1)" />
                             Edit
                        </Button>
                    </div>
                    <div className="mt-4 grid grid-cols-[520px_1fr] gap-5">
                        <div >
                            <CustomerInformation/>
                        </div>
                        <div >
                         <RevenueCards/>
                         <TodaysDeliveries/>
                        </div>
                    </div>
                </div>
            </CommonLayout>
        </>
    )
}