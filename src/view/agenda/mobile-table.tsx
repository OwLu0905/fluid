import React from "react";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
import type { AgendaTableType } from "./Table";
import { tagStyle } from "./pc-table/pc-agenda";

  // 5: "bg-gradient-to-tr from-blue-300/80 to-violet-100/80 text-blue-900/80 shadow-md shadow-sky-300/60",
  // 6: "bg-gradient-to-tr from-emerald-300/80 to-teal-100/80 text-emerald-800/80 shadow-md shadow-green-300/60", // green
const MobileTable = () => {
  const agendaTable: AgendaTableType = {
    day1: {
      name: "第一天 8/17",
      list: [
        { time: "09:20 - 09:30", content: "研討會開幕", type: 0 },
        {
          time: "09:30-10:20",
          content: "⼤會演講 I",
          annotation: "蕭述三 講座教授",
          type: 1,
        },
        { time: "10:20 - 10:50", content: "茶敘", type: 0 },
        {
          time: "10:50 - 12:00",
          content: "迷你論壇 I",
          annotation: "(中山科學研究院)",
          type: 2,
        },
        { time: "12:00 - 13:00", content: "午餐", type: 0 },
        {
          time: "13:00 - 14:30",
          content: "海報展⽰",
          type: 3,
        },
        {
          time: "14:30 - 15:40",
          content: "迷你論壇 II",
          annotation: "國家太空中心 高速網路計算中心",
          type: 2,
        },
        // { time: "15:40-16:10", content: "海報展覽 成果交流", type: 0 },
        {
          time: "15:40 - 17:30",
          content: "海報展覽",
          annotation: "成果交流",
          type: 5,
        },
        { time: "18:00 - 20:00", content: "晚宴", type: 0 },
      ],
    },
    day2: {
      name: "第二天 8/18",
      list: [
        { time: "09:30 - 10:20", content: "/", type: 0 },
        {
          time: "09:30 - 10:20",
          content: "⼤會演講 II",
          annotation: "Prof. Kunihiko Taira, UCLA",
          type: 1,
        },
        { time: "10:20 - 10:45", content: "茶敘", type: 0 },
        {
          time: "10:45 - 12:00",
          content: "迷你論壇 III",
          annotation: "紊流模擬",
          type: 2,
        },
        { time: "12:00 - 13:00", content: "午餐", type: 0 },
        {
          time: "13:00 - 14:15",
          content: "迷你論壇 IV",
          annotation: "河海工程應用",
          type: 2,
        },
        { time: "14:15 - 14:45", content: "茶敘", type: 0 },
        { time: "14:45 - 16:00", content: "工業論壇", type: 4 },
        { time: "16:00 - 17:00", content: "閉幕及頒獎", type: 0 },
      ],
    },
  };

  return (
    <div>
      <div className="w-full sm:hidden">
        <Tab.Group>
          <Tab.List className="-mx-4  flex justify-around space-x-1 bg-transparent py-0">
            {Object.values(agendaTable).map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-sm py-2.5 px-6 text-sm font-medium leading-5 ",
                    "",
                    selected
                      ? "border-none bg-gradient-to-r from-cyan-600 to-blue-500 text-gray-100 outline-none  "
                      : " bg-gradient-to-r from-gray-300/80 to-slate-400 text-sky-900 ring-1 ring-blue-900/80"
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="-mx-4 mt-2 rounded-xl">
            <>
              {Object.values(agendaTable).map((posts, idx) => (
                <Tab.Panel key={idx} className={"rounded-xl shadow-xl "}>
                  {posts.list.map((item) => {
                    if (
                      idx === 0 &&
                      (item.content === "午餐" || item.content === "海報展⽰")
                    ) {
                      return (
                        <div
                          key={item.time + item.content}
                          className="flex flex-row border-b-2 border-gray-600/30 bg-transparent last:border-none sm:flex-row"
                        >
                          <time className="flex w-[5rem] flex-col whitespace-nowrap  bg-gray-800/60  py-2 text-center text-base text-gray-300/80  xs:w-[10rem] xs:flex-row xs:items-center xs:justify-center xs:text-lg ">
                            <span className="">{item.time.split("-")[0]}</span>
                            <span className="text-sm xs:mx-2">-</span>
                            <span>{item.time.split("-")[1]}</span>
                          </time>
                          <div className="my-4 flex grow flex-col items-center justify-center text-base text-gray-300/80 xs:my-2 sm:flex-row sm:text-xl">
                            <div className="flex w-full flex-col items-center justify-center xs:flex-row ">
                              <p
                                className={classNames(
                                  `mx-auto inline-block rounded-2xl px-4 py-1`,
                                  {
                                    [tagStyle[item.type]]: true,
                                  }
                                )}
                              >
                                {item.content}
                              </p>

                              <div>
                                <div className="mx-0 mt-2 flex shrink items-center justify-center rounded-xl px-2 pt-2 text-base font-semibold text-gray-300/80 xs:px-0">
                                  流體力學學會會員大會
                                </div>
                                <div className="mx-0 mb-2 flex shrink items-center justify-center rounded-xl px-2 pb-2 text-base font-semibold text-gray-300/80 xs:px-0">
                                  暨年輕學者獎頒獎
                                </div>
                              </div>
                            </div>
                            {item?.annotation && (
                              <div className=" py-1 text-center text-base font-light text-purple-600 xs:text-lg">
                                {item?.annotation.includes("國家") ? (
                                  <div className="-mx-4 flex flex-col">
                                    <div className="grow">
                                      {item?.annotation.split(" ")[0]} ＆
                                    </div>
                                    <div className="grow">
                                      {item?.annotation.split(" ")[1]}
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className={`${item?.annotation === "成果交流"
                                        ? "font-normal text-gray-300/80"
                                        : ""
                                      }`}
                                  >
                                    {item?.annotation}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={item.time + item.content}
                        className="flex flex-row border-b-2 border-gray-600/30 bg-transparent last:border-none sm:flex-row"
                      >
                        <time className="flex w-[5rem] flex-col whitespace-nowrap  bg-gray-800/60  py-2 text-center text-base text-gray-300/80  xs:w-[10rem] xs:flex-row xs:items-center xs:justify-center xs:text-lg ">
                          <span className="">{item.time.split("-")[0]}</span>
                          <span className="text-sm xs:mx-2">-</span>
                          <span>{item.time.split("-")[1]}</span>
                        </time>
                        <div className="my-4 flex grow flex-col items-center justify-center text-base text-gray-300/80 xs:my-2 sm:flex-row sm:text-xl">
                          <p
                            className={classNames(
                              `mx-auto inline-block rounded-2xl px-4 py-1`,
                              {
                                [tagStyle[item.type]]: true,
                              }
                            )}
                          >
                            {item.content}
                          </p>
                          {item?.annotation && (
                            <div className=" py-1 text-center text-base font-light text-yellow-600/80 xs:text-lg">
                              {item?.annotation.includes("國家") ? (
                                <div className="-mx-4 flex flex-col">
                                  <div className="grow">
                                    {item?.annotation.split(" ")[0]}＆
                                  </div>
                                  <div className="grow">
                                    {item?.annotation.split(" ")[1]}
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className={`${item?.annotation === "成果交流"
                                      ? "font-normal mx-auto inline-block rounded-2xl px-4 py-1 bg-gradient-to-tr from-emerald-300/80 to-teal-100/80 text-emerald-800/80 shadow-md shadow-green-300/60"
                                      : ""
                                    }`}
                                >
                                  {item?.annotation}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Tab.Panel>
              ))}
            </>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default MobileTable;
