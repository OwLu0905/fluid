import React, { useState } from "react";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
import SpecialAgendaTable from "./SpecialTable";
type AgendaPageProps = {
  tableData: [string, string, string, string][];
};

const tagStyle = {
  0: "",
  1: "bg-gradient-to-r  from-emerald-300/80 to-teal-300/80 text-emerald-800 shadow-md shadow-green-300/60",
  2: "bg-gradient-to-r  from-sky-300/80 to-cyan-300/80 text-sky-800  shadow-md shadow-sky-300/60",
  3: "bg-gradient-to-r  from-purple-300/80 to-fuchsia-300/80 text-purple-800/80 shadow-md shadow-rose-300/60",
};

type AgendaTableListType = {
  time: string;
  content: string;
  annotation?: string;
  type: 0 | 1 | 2 | 3;
}[];

type AgendaTableType = {
  [key: string]: { name: string; list: AgendaTableListType };
};

const agendaTable: AgendaTableType = {
  day1: {
    name: "第一天",
    list: [
      { time: "09:20 - 09:30", content: "研討會開幕", type: 0 },
      {
        time: "09:30-10:20",
        content: "⼤會演講1",
        annotation: "蕭述三 講座教授",
        type: 1,
      },
      { time: "10:20-10:45", content: "茶敘", type: 0 },
      {
        time: "10:45-12:00",
        content: "迷你論壇1",
        annotation: "(中山科學研究院)",
        type: 2,
      },
      { time: "12:00-13:00", content: "午餐", type: 0 },
      {
        time: "13:00-14:30",
        content: "海報展⽰",
        type: 3,
      },
      { time: "14:30-15:40", 
        content: "迷你論壇2",
        annotation: "國家太空中心 高速網路計算中心",
        type: 2,
      },
      { time: "15:40-16:10", content: "海報展覽 成果交流", type: 0 },
      { time: "18:00-20:00", content: "晚宴", type: 0 },
    ],
  },
  day2: {
    name: "第二天",
    list: [
      { time: "09:30-10:20", content: "/", type: 0 },
      {
        time: "09:30-10:20",
        content: "⼤會演講2",
        annotation: "Prof. Kunihiko Taira, UCLA",
        type: 1,
      },
      { time: "10:20-10:50", content: "茶敘", type: 0 },
      {
        time: "10:50-12:00",
        content: "迷你論壇3",
        annotation: "紊流模擬",
        type: 2,
      },
      { time: "12:00-13:00", content: "午餐", type: 0 },
      {
        time: "13:00-14:15",
        content: "迷你論壇4",
        annotation: "河海工程應用",
        type: 2,
      },
      { time: "14:15-14:45", content: "茶敘", type: 0 },
      { time: "14:45-16:00",content: "工業論壇",type: 0,},
      { time: "16:00-17:00", content: "閉幕及頒獎", type: 0 },
    ],
  },
};

const agendaPCTableOri: {
  name: string[];
  list: Array<{
    time: string;
    content: string;
    type: 0 | 1 | 2 | 3;
    annotation?: string;
  }>[];
} = {
  name: ["第一天", "第二天"],
  list: [
    [
      { time: "09:20 - 09:30", content: "開幕", type: 0 },
      { time: "09:20 - 09:30", content: "/", type: 0 },
    ],
    [
      {
        time: "09:30 - 10:20",
        content: "⼤會演講1",
        annotation: "蕭述三 講座教授",
        type: 1,
      },
      {
        time: "09:30 - 10:20",
        content: "⼤會演講2",
        annotation: "Prof. Kunihiko Taira, UCLA",
        type: 1,
      },
    ],
    [
      { time: "10:20 - 10:45", content: "茶敘", type: 0 },
      { time: "10:20 - 10:50", content: "茶敘", type: 0 },
    ],
    [
      {
        time: "10:45 - 12:00",
        content: "迷你論壇1",
        annotation: "(中山科學研究院)",
        type: 2,
      },
      {
        time: "10:50 - 12:00",
        content: "迷你論壇3",
        annotation: "紊流模擬",
        type: 2,
      },
    ],
    [
      { time: "12:00 - 13:00", content: "午餐", type: 0 },
      { time: "12:00 - 13:00", content: "午餐", type: 0 },
    ],
    [
      {
        time: "13:00 - 14:30",
        content: "海報展⽰",
        type: 3,
      },
      {
        time: "13:00 - 14:15",
        content: "迷你論壇4",
        annotation: "河海工程應用",
        type: 2,
      },
    ],
    [
      { time: "14:30 - 15:40", 
        content: "迷你論壇2", 
        annotation:"國家太空中心＆高速網路計算中心",
        type: 2 
      },
      { time: "14:15 - 14:45", content: "茶敘", type: 0 },
    ],
    [
      { time: "15:40 - 16:10", content: "海報展覽＆成果交流", type: 0 },
      {
        time: "14:45 - 16:00", content: "⼯業論壇", type: 0 },
    ],
    [
      { time: "18:00 - 20:00", content: "晚宴", type: 0 },
      { time: "16:00 - 17:00", content: "閉幕及頒獎", type: 0 },
    ],
  ],
};

const agendaPCTableBefore: {
  name: string[];
  list: Array<{
    time: string;
    content: string;
    type: 0 | 1 | 2 | 3;
    annotation?: string;
  }>[];
} = {
  name: ["第一天", "第二天"],
  list: [
    [
      { time: "09:20 - 09:30", content: "研討會開幕", type: 0 },
      { time: "09:20 - 09:30", content: "/", type: 0 },
    ],
    [
      {
        time: "09:30 - 10:20",
        content: "⼤會演講1",
        annotation: "蕭述三 講座教授",
        type: 1,
      },
      {
        time: "09:30 - 10:20",
        content: "⼤會演講2",
        annotation: "Prof. Kunihiko Taira, UCLA",
        type: 1,
      },
    ],
    [
      { time: "10:20 - 10:45", content: "茶敘", type: 0 },
      { time: "10:20 - 10:50", content: "茶敘", type: 0 },
    ],
    [
      {
        time: "10:45 - 12:00",
        content: "迷你論壇1",
        annotation: "(中山科學研究院)",
        type: 2,
      },
      {
        time: "10:50 - 12:00",
        content: "迷你論壇3",
        annotation: "紊流模擬",
        type: 2,
      },
    ],
  ],
};

const agendaPCTableMid: {
  name: string[];
  list: Array<{
    time: string;
    content: string;
    type: 0 | 1 | 2 | 3;
    annotation?: string;
  }>[];
} = {
  name: ["第一天", "第二天"],
  list: [
    [
      {
        time: "12:00 - 13:00",
        content: "午餐",
        annotation: "流體力學學會會員大會暨年輕學者獎頒獎",
        type: 0,
      },
      { time: "12:00 - 13:00", content: "午餐", type: 0 },
    ],
  ],
};

const agendaPCTableAfter: {
  name: string[];
  list: Array<{
    time: string;
    content: string;
    type: 0 | 1 | 2 | 3;
    annotation?: string;
  }>[];
} = {
  name: ["第一天", "第二天"],
  list: [
    [
      { time: "14:30 - 15:40", 
        content: "迷你論壇2",
        annotation:"國家太空中心＆高速網路計算中心", 
        type: 2 
      },
      { time: "14:15 - 14:45", content: "茶敘", type: 0 },
    ],
    [
      { time: "15:40 - 16:10", content: "海報展覽＆成果交流", type: 0 },
      { time: "14:45 - 16:00", content: "工業論壇",type: 0,},
    ],
    [
      { time: "18:00 - 20:00", content: "晚宴", type: 0 },
      { time: "16:00 - 17:00", content: "閉幕及頒獎", type: 0 },
    ],
  ],
};
// ＆
const AgendaTable = (props: AgendaPageProps) => {
  return (
    <section>
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
              {/* <div>議程表</div> */}
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
                                    [tagStyle[item.type] as string]: true,
                                  }
                                )}
                              >
                                {item.content}
                              </p>
                              {/* <div className="xs:me-auto mx-0 my-2 max-w-[10rem] shrink items-center whitespace-pre-line rounded-xl bg-gradient-to-r from-sky-500/90  to-violet-500/90 bg-clip-text px-8 py-2 text-base text-transparent xs:max-w-[10rem] xs:px-6"> */}
                              {/* <div className="mt-4 border-t-2 border-dotted border-gray-400/80"> */}
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
                                      {item?.annotation.split(" ")[0]}＆
                                    </div>
                                    <div className="grow">
                                      {item?.annotation.split(" ")[1]}
                                    </div>
                                  </div>
                                ) : (
                                  item?.annotation
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
                                [tagStyle[item.type] as string]: true,
                              }
                            )}
                          >
                            {item.content}
                          </p>
                          {item?.annotation && (
                            <div className=" py-1 text-center text-base font-light text-yellow-600/80 xs:text-lg">
                              {/* {item?.annotation ?? ""} */}
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
                                item?.annotation
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
      <div className="hidden w-full sm:flex">
        <div className="w-full  xl:mx-10">
          <div className="-mx-4 flex flex-col border border-gray-600/20 bg-transparent">
            <div className="flex w-full flex-row space-x-0">
              {agendaPCTableBefore.name.map((name, index) => {
                return (
                  <time
                    key={name}
                    className={`w-1/2 border-b-2 border-none border-gray-900/20 bg-blue-900/60  py-2  pl-4 text-center text-xl text-white  lg:py-4 lg:pl-8  xl:text-2xl ${
                      index === 0 ? " " : " "
                    }`}
                  >
                    {name}
                  </time>
                );
              })}
            </div>
            <div className="flex flex-col px-4 py-2 text-center text-base text-gray-300/80 ">
              {agendaPCTableBefore.list.map(
                (
                  list: Array<{
                    time: string;
                    content: string;
                    type: number;
                    annotation?: string;
                  }>,
                  index: number
                ) => {
                  const type1 = list[0].type as 0 | 1 | 2 | 3;
                  const type2 = list[1].type as 0 | 1 | 2 | 3;

                  return (
                    <div
                      key={index}
                      className="flex border-b-2 border-gray-600/30 last:border-none"
                    >
                      <div className="flex w-1/2 text-xl xl:text-2xl">
                        <p className="flex items-center">{list[0].time}</p>
                        <div className="flex grow flex-col justify-center py-2">
                          <h4
                            className={classNames(
                              `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-3 md:py-2 lg:px-4 xl:px-6`,
                              {
                                [tagStyle[type1]]: true,
                              }
                            )}
                          >
                            {list[0].content}
                          </h4>
                          {list[0]?.annotation && (
                            <p className="my-1 mx-auto flex flex-wrap items-center text-center font-light  text-yellow-600/80">
                              {list[0]?.annotation && list[0]?.annotation ? (
                                <>
                                  <span className="mr-1 inline-block grow text-center">
                                    {list[0]?.annotation.split("-")[0]}
                                  </span>
                                  <span className="inline-block grow text-center">
                                    {list[0]?.annotation.split("-")[1]}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="mr-1 inline-block grow text-center">
                                    {list[0]?.annotation.split("&")[0]}
                                  </span>
                                  <br />
                                  <span className="inline-block grow text-center">
                                    {list[0]?.annotation.split("&")[1]}
                                  </span>
                                </>
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex w-1/2 text-xl xl:text-2xl">
                        <p className="flex items-center">{list[1].time}</p>
                        <div className="flex grow flex-col justify-center py-2">
                          <h4
                            className={classNames(
                              `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-3 md:py-2 lg:px-4 xl:px-6`,
                              {
                                [tagStyle[type2]]: true,
                              }
                            )}
                          >
                            {list[1].content}
                          </h4>

                          {list[1]?.annotation && (
                            <div className="my-1 mx-auto flex items-center text-center font-light text-yellow-600/80 sm:max-w-[8.5rem]  md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem]">
                              {/* {list[1]?.annotation ?? ""}{" "} */}
                              {list[1]?.annotation.includes("國家") ? (
                                <div className="mx-auto flex flex-wrap items-center">
                                  <span className="mr-1 inline-block grow text-center">
                                    {list[1]?.annotation.split(" ")[0]} &
                                  </span>
                                  <span className="inline-block grow text-center">
                                    {list[1]?.annotation.split(" ")[1]}
                                  </span>
                                </div>
                              ) : (
                                <> {list[1]?.annotation}</>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}

              <SpecialAgendaTable />

              {agendaPCTableAfter.list.map(
                (
                  list: Array<{
                    time: string;
                    content: string;
                    type: number;
                    annotation?: string;
                  }>,
                  index: number
                ) => {
                  const type1 = list[0].type as 0 | 1 | 2 | 3;
                  const type2 = list[1].type as 0 | 1 | 2 | 3;

                  return (
                    <div
                      key={index}
                      className="flex border-b-2 border-gray-600/30 last:border-none"
                    >
                      <div className="flex w-1/2 text-xl xl:text-2xl">
                        <p className="flex items-center">{list[0].time}</p>
                        <div className="flex grow flex-col justify-center py-2">
                          <h4
                            className={classNames(
                              `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-6 md:py-2 `,
                              {
                                [tagStyle[type1]]: true,
                              }
                            )}
                          >
                            {list[0].content}
                          </h4>
                          {list[0]?.annotation && (
                            <p className="my-1 font-light text-yellow-600/80">
                              {list[0]?.annotation ?? ""}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex w-1/2 text-xl xl:text-2xl">
                        <p className="flex items-center">{list[1].time}</p>
                        <div className="flex grow flex-col justify-center py-2">
                          <h4
                            className={classNames(
                              `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-6 md:py-2 `,
                              {
                                [tagStyle[type2]]: true,
                              }
                            )}
                          >
                            {list[1].content}
                          </h4>
                          {list[1]?.annotation && (
                            <p className="my-1 font-light  text-yellow-600/80">
                              {list[1]?.annotation ?? ""}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaTable;
