"use client";
import { useState } from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CirclePlus, SquarePen } from "lucide-react";
import Link from "next/link";
import AddNewCustomerForm from "../_component/AddNewCustomerForm";
import CustomerAddedMOdal from "../_component/CustomerAdded";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  const [open, setOpen] = useState(false);
  return (
    <CommonLayout>
      <div className="bg-(--grey2) rounded-[24px] p-5">
        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between">
          <div className="flex gap-2">
            <Link href="/admin/customer">
              <div className="size-7 flex items-center justify-center rounded-full bg-white">
                <ChevronLeft size={20} />
              </div>
            </Link>
            <div>
              <h1 className="text-(--dark1) text-[24px] font-normal">
                Add Customers
              </h1>
              <p className="text-(--dark1)">
                from here you can add new customers
              </p>
            </div>
          </div>
          {/* <div className='flex items-center gap-3'>
                        <Button variant="secondary" className='h-14.5 flex items-center gap-2 text-[20px] font-normal text-(--dark1)'>
                            Cancel
                        </Button>
                        <Button  className='h-14.5 rounded-[18px] flex items-center gap-2 text-[20px] font-normal'>
                            Continue
                        </Button>
                    </div> */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex gap-3">
              {currentStep === 1 ? (
                <Link href="/admin/customer">
                  <Button
                    variant="secondary"
                    className="h-13 rounded-[12px] px-5"
                  >
                    Cancel
                  </Button>
                </Link>
              ) : (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="h-13 rounded-[16px] px-5"
                >
                  Previous
                </Button>
              )}

              {currentStep === 3 ? null : (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={currentStep === 3}
                  className="h-13 rounded-[16px] px-5"
                >
                  Continue
                </Button>
              )}
            </div>

            {currentStep === 3 && (
              <Button
                type="submit"
                onClick={() => setOpen(true)}
                className="h-13 rounded-[16px] px-6 "
              >
                Add Customer
              </Button>
            )}
          </div>
        </div>
        <section className="mt-5 w-full md:w-full lg:w-[85%] mx-auto">
          <AddNewCustomerForm
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </section>
      </div>
      <CustomerAddedMOdal
        open={open}
        onOpenChange={setOpen}
        onConfirm={() => {
          console.log("delete");
          setOpen(false);
        }}
      />
    </CommonLayout>
  );
}
