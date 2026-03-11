import CommonLayout from "@/components/layout/CommonLayout"
import { Button } from "@/components/ui/button"
import { ChevronLeft, SquarePen} from "lucide-react"
import Link from "next/link"
import ProductDetails from "../_component/ProductDetails"
import ProductRevenue from "../_component/ProductRevenue"
import SalesChart from "../_component/SalesChart"
import MediaGallery from "../_component/MediaGallery"

export default function Page() {
    return (

        <>
            <CommonLayout>
                <div className="bg-(--grey2) rounded-[24px] p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-start">
                            <Link href='/admin/customer'>
                                <div className="size-7 flex items-center justify-center rounded-full bg-white">
                                    <ChevronLeft size={20} />
                                </div>

                            </Link>
                            <div>
                                <h1 className="text-(--dark1) text-[24px] font-normal">Product Details</h1>
                                <p className="text-(--dark1)">
                                    here is the overview of product 
                                </p>
                            </div>
                        </div>
                        <Button variant="secondary" className='h-14.5 flex items-center gap-2 text-[20px] font-normal text-[#3F434D]'>
                            <SquarePen size={24} className="text-(--dark1)" />
                             Edit
                        </Button>
                    </div>
                    <div className="mt-5 grid grid-cols-[520px_1fr] gap-5">
                        <div >
                            <ProductDetails/>
                        </div>
                        <div className='flex flex-col gap-5 overflow-x-hidden' >
                         <ProductRevenue/>
                         <SalesChart/>
                         <MediaGallery/>
                        </div>
                    </div>
                </div>
            </CommonLayout>
        </>
    )
}