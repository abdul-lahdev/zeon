"use client";

import React, { useMemo, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ChevronLeft, ChevronRight } from "lucide-react";

const deliveryEvents = [
  {
    id: "1",
    title: "Jetnetix Solutions",
    start: "2025-04-04",
    end: "2025-04-07",
    orderId: "ORD-10425",
    status: "Paid",
    deliveryText: "Delivery: 14 May 2026 - 16 May 2026, 12:00 PM",
    timeLabel: "02:00 AM",
  },
  {
    id: "2",
    title: "Jetnetix Solutions",
    start: "2025-04-09",
    end: "2025-04-12",
    orderId: "ORD-10425",
    status: "Paid",
    deliveryText: "Delivery: 14 May 2026 - 16 May 2026, 12:00 PM",
    timeLabel: "08:00 AM",
  },
  {
    id: "3",
    title: "Jetnetix Solutions",
    start: "2025-04-12",
    end: "2025-04-15",
    orderId: "ORD-10425",
    status: "Paid",
    deliveryText: "Delivery: 14 May 2026 - 16 May 2026, 12:00 PM",
    timeLabel: "06:00 AM",
  },
  {
    id: "4",
    title: "Jetnetix Solutions",
    start: "2025-04-15",
    end: "2025-04-18",
    orderId: "ORD-10425",
    status: "Partial",
    deliveryText: "Delivery: 14 May 2026 - 16 May 2026, 12:00 PM",
    timeLabel: "08:00 AM",
  },
  {
    id: "5",
    title: "Jetnetix Solutions",
    start: "2025-04-23",
    end: "2025-04-26",
    orderId: "ORD-10425",
    status: "Unpaid",
    deliveryText: "Delivery: 14 May 2026 - 16 May 2026, 12:00 PM",
    timeLabel: "06:00 AM",
  },
];

const sidebarSchedule = [
  {
    hour: "12:00 am",
    items: [],
  },
  {
    hour: "1:00 am",
    items: [],
  },
  {
    hour: "02:00 am",
    items: [
      {
        title: "Jetnetix Solutions",
        orderId: "ORD-10425",
        delivery: "Delivery: Today, 12:00 PM",
        status: "Paid",
      },
    ],
  },
  {
    hour: "03:00 am",
    items: [
      {
        title: "Jetnetix Solutions",
        orderId: "ORD-10425",
        delivery: "Today, 12:00 PM",
        status: "Partial",
      },
    ],
  },
  {
    hour: "04:00 am",
    items: [
      {
        title: "Jetnetix Solutions",
        orderId: "ORD-10425",
        delivery: "Today, 12:00 PM",
        status: "Unpaid",
      },
    ],
  },
];

function getStatusClasses(status) {
  switch (status) {
    case "Paid":
      return "bg-[#E8FFF2] text-[#1BAA61] border-[#7EE2AF]";
    case "Partial":
      return "bg-[#FFF4E8] text-[#F08A24] border-[#FFC98C]";
    case "Unpaid":
      return "bg-[#FFECEC] text-[#F04438] border-[#FFB3B3]";
    default:
      return "bg-[#F3F4F6] text-[#6B7280] border-[#D1D5DB]";
  }
}

function CalendarEventContent(arg) {
  const event = arg.event;
  const orderId = event.extendedProps.orderId;
  const deliveryText = event.extendedProps.deliveryText;

  return (
    <div className="w-full overflow-hidden rounded-[8px] bg-[linear-gradient(90deg,#E8E0FF_0%,#DFF7EC_100%)] px-3 py-2">
      <p className="truncate text-[12px] font-medium text-[#3F3F46]">
        {event.title}
      </p>

      <div className="mt-1 flex items-center justify-between gap-2">
        <span className="truncate text-[10px] text-[#7C7C88]">
          ID: {orderId}
        </span>
        <span className="truncate text-[10px] text-[#7C7C88]">
          {deliveryText}
        </span>
      </div>
    </div>
  );
}

export default function DeliveriesCalendarPage() {
  const calendarRef = useRef(null);
  const [currentMonthLabel, setCurrentMonthLabel] = useState("April 2025");

  const events = useMemo(
    () =>
      deliveryEvents.map((item) => ({
        id: item.id,
        title: item.title,
        start: item.start,
        end: item.end,
        extendedProps: {
          orderId: item.orderId,
          status: item.status,
          deliveryText: item.deliveryText,
          timeLabel: item.timeLabel,
        },
      })),
    []
  );

  const handlePrev = () => {
    const api = calendarRef.current?.getApi();
    if (!api) return;
    api.prev();
    setCurrentMonthLabel(api.view.title);
  };

  const handleNext = () => {
    const api = calendarRef.current?.getApi();
    if (!api) return;
    api.next();
    setCurrentMonthLabel(api.view.title);
  };

  const handleDatesSet = (arg) => {
    setCurrentMonthLabel(arg.view.title);
  };

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[436px_minmax(0,1fr)]">
      {/* Left Sidebar */}
      <div className="rounded-[24px] bg-white shadow-sm ring-1 ring-[#EAEAEA]">
        <h2 className="mb-4 p-3 text-[22px] border-b border-[#F5F5F5] font-regular text-[#3F434D]">
          Upcoming Deliveries
        </h2>

        <div className="p-3">
          <div className="rounded-[18px] border border-[#E9F7FD] bg-white p-3">
            <div className="mb-3 grid grid-cols-7 gap-2 text-center text-[10px] text-[#8B8B95]">
              <span className="rounded-[4px] py-1">GMT + 5</span>
              <span className="bg-[#F5F5F5] rounded-[4px] py-1">Mon</span>
              <span className="rounded-[4px] py-1">Tue</span>
              <span className="rounded-[4px] py-1">Wed</span>
              <span className="rounded-[4px] py-1">Thu</span>
              <span className="rounded-[4px] py-1">Fri</span>
              <span className="rounded-[4px] py-1">Sat</span>
            </div>

            <div className="space-y-5 relative mt-4">
              {sidebarSchedule.map((slot, idx) => {
                const hasItems = slot.items && slot.items.length > 0;

                return (
                  <div
                    key={idx}
                    className="grid grid-cols-[70px_1fr] items-center group"
                  >
                    <span className="text-[14px] font-normal text-(--dark2) mt-1">
                      {slot.hour}
                    </span>

                    {hasItems ? (
                      <div className="space-y-3">
                        {slot.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="p-3 rounded-2xl border bg-[url(/images/dashboard/smCard2.png)] bg-white bg-cover bg-center shadow-sm transition-all hover:shadow-md"
                          >
                            <div className="flex justify-between items-center gap-2">
                              <span className="bg-white text-[10px] rounded-[6px] font-normal text-(--dark2) border border-(--grey5) px-2 py-0 h-7.5 inline-flex items-center">
                                {slot.hour.toUpperCase()}
                              </span>

                              <span
                                className={`inline-flex items-center rounded-full px-3 h-7.5 text-[12px] font-normal border ${getStatusClasses(
                                  item.status
                                )}`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-70" />
                                {item.status}
                              </span>
                            </div>

                            <h4 className="font-normal text-(--dark1) mt-2 text-[20px]">
                              {item.title}
                            </h4>

                            <div className="flex justify-between mt-2 text-[14px] font-normal gap-3 flex-wrap">
                              <span className="text-(--dark2)">
                                ID: {item.orderId}
                              </span>

                              <div className="flex items-center gap-1">
                                <span className="text-(--dark2)">
                                  Delivery:
                                </span>
                                <span className="text-(--dark1)">
                                  {item.delivery}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative h-px bg-[#F5F5F5] w-full mt-4" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Calendar */}
      <div className="rounded-[24px] bg-white p-4 shadow-sm ring-1 ring-[#EAEAEA]">
        <div className="mb-3 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6] text-[#666]"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2 text-[15px] font-medium text-[#444]">
            <span>{currentMonthLabel}</span>
          </div>

          <button
            onClick={handleNext}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6] text-[#666]"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="calendar-shell overflow-hidden rounded-[20px] border border-[#EEEEEE]">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate="2025-04-01"
            headerToolbar={false}
            fixedWeekCount={true}
            showNonCurrentDates={true}
            dayMaxEvents={1}
            events={events}
            datesSet={handleDatesSet}
            eventContent={CalendarEventContent}
            height="auto"
          />
        </div>
      </div>

      <style jsx global>{`
        .calendar-shell .fc {
          --fc-border-color: #ececec;
          --fc-page-bg-color: #ffffff;
          --fc-neutral-bg-color: #ffffff;
          --fc-today-bg-color: transparent;
          font-family: inherit;
        }

        .calendar-shell .fc-theme-standard td,
        .calendar-shell .fc-theme-standard th {
          border-color: #ececec;
        }

        .calendar-shell .fc-scrollgrid {
          border: none;
        }

        .calendar-shell .fc-col-header-cell {
          background: #fafafa;
          padding: 10px 0;
        }

        .calendar-shell .fc-col-header-cell-cushion {
          color: #8b8b95;
          font-size: 12px;
          font-weight: 500;
          padding: 8px 0;
          text-decoration: none !important;
        }

        .calendar-shell .fc-daygrid-day {
          min-height: 98px;
        }

        .calendar-shell .fc-daygrid-day-frame {
          min-height: 98px;
          padding: 8px;
        }

        .calendar-shell .fc-daygrid-day-number {
          color: #4b5563;
          font-size: 13px;
          text-decoration: none !important;
        }

        .calendar-shell .fc-event {
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          margin-top: 6px;
        }

        .calendar-shell .fc-daygrid-event-harness {
          margin-inline: 4px;
        }

        .calendar-shell .fc-daygrid-more-link {
          color: #6b7280;
          font-size: 11px;
          text-decoration: none !important;
        }

        .calendar-shell .fc-toolbar {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
