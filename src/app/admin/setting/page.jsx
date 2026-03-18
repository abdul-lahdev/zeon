"use client";
import { useState } from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ChevronLeft, SquarePen } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSettings from "./_component/PersonalData";
import NotificationSettings from "./_component/NotificationSettings";
import ChangePassword from "./_component/ChangePassword";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Personal Details");

  const tabs = ["Personal Details", "Notifications", "Password & Security"];
  return (
    <>
      <CommonLayout>
        <div className="bg-(--grey2) rounded-[24px] p-5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-start">
              <Link href="/admin/dashboard">
                <div className="size-7 flex items-center justify-center rounded-full bg-white">
                  <ChevronLeft size={20} />
                </div>
              </Link>
              <div>
                <h1 className="text-(--dark1) text-[24px] font-normal">
                  Settings
                </h1>
                <p className="text-(--dark1)">
                  from here you can manage settings
                </p>
              </div>
            </div>
            <Button className="h-[48px] px-5">Save Changes</Button>
          </div>
          {/* <CustomerCards /> */}
          <div className="mt-5 w-full md:w-full lg:w-[85%] mx-auto bg-white p-3 rounded-[32px]">
            <div className="min-h-screen ">
              <div className="overflow-hidden">
                {/* --- TABS NAVIGATION --- */}
                <div className="flex border-b border-slate-100 px-6 pt-4 gap-8 relative  overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-[18px] cursor-pointer font-regular transition-colors text-nowrap relative ${
                        activeTab === tab
                          ? "text-(--red1)"
                          : "text-(--dark1) hover:text-slate-700"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* --- TAB CONTENT WITH ANIMATION --- */}
                <div className="p-3 lg:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {activeTab === "Personal Details" && <ProfileSettings />}
                      {activeTab === "Notifications" && (
                        <NotificationSettings />
                      )}
                      {activeTab === "Password & Security" && (
                        <ChangePassword />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  );
}
