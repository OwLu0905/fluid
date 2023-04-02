import React, { useState } from "react";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
type AgendaPageProps = {
  tableData: [string, string, string, string][];
};

const tagStyle = {
  0: "",
  1: "bg-green-300/60 text-green-600 shadow-md",
  2: "bg-sky-300/60 text-sky-600  shadow-md",
  3: "bg-indigo-300/60 text-violet-600 shadow-md",
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
      { time: "09:20 - 09:30", content: "開幕", type: 0 },
      {
        time: "09:30-10:20",
        content: "⼤會演講1",
        annotation: "蕭述三 講座教授",
        type: 1,
      },
      { time: "10:20-10:45", content: "茶點", type: 0 },
      {
        time: "10:45-12:00",
        content: "迷你論壇1",
        annotation: "(中科院)",
        type: 2,
      },
      { time: "12:00-13:00", content: "午餐", type: 0 },
      {
        time: "13:00-14:30",
        content: "海報展⽰",
        type: 3,
      },
      { time: "14:30-15:00", content: "茶點", type: 0 },
      { time: "15:00-16:10", content: "⼯業論壇", type: 0 },
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
        annotation: "Prof. KunihikoTaira,UCLA",
        type: 1,
      },
      { time: "10:20-10:45", content: "茶點", type: 0 },
      {
        time: "10:45-12:00",
        content: "迷你論壇2",
        annotation: "熱流應用",
        type: 2,
      },
      { time: "12:00-13:00", content: "午餐", type: 0 },
      {
        time: "13:00-14:15",
        content: "迷你論壇3",
        annotation: "河海工程應用",
        type: 2,
      },
      { time: "14:15-14:45", content: "茶點", type: 0 },
      {
        time: "14:45-16:00",
        content: "迷你論壇4",
        annotation: "紊流模擬",
        type: 2,
      },
      { time: "16:00-17:00", content: "閉幕及頒獎", type: 0 },
    ],
  },
};

const agendaPCTable: {
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
        annotation: "Prof. KunihikoTaira,UCLA",
        type: 1,
      },
    ],
    [
      { time: "10:20 - 10:45", content: "茶點", type: 0 },
      { time: "10:20 - 10:45", content: "茶點", type: 0 },
    ],
    [
      {
        time: "10:45 - 12:00",
        content: "迷你論壇1",
        annotation: "(中科院)",
        type: 2,
      },
      {
        time: "10:45 - 12:00",
        content: "迷你論壇2",
        annotation: "熱流應用",
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
        content: "迷你論壇3",
        annotation: "河海工程應用",
        type: 2,
      },
    ],
    [
      { time: "14:30 - 15:00", content: "茶點", type: 0 },
      { time: "14:15 - 14:45", content: "茶點", type: 0 },
    ],
    [
      { time: "15:00 - 16:10", content: "⼯業論壇", type: 0 },
      {
        time: "14:45 - 16:00",
        content: "迷你論壇4",
        annotation: "紊流模擬",
        type: 2,
      },
    ],
    [
      { time: "18:00 - 20:00", content: "晚宴", type: 0 },
      { time: "16:00 - 17:00", content: "閉幕及頒獎", type: 0 },
    ],
  ],
};

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
                      ? "border-none bg-gradient-to-r from-cyan-600 to-blue-500 text-gray-100 shadow-md shadow-gray-600 outline-none  "
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
                    return (
                      <div
                        key={item.time + item.content}
                        className="flex flex-row border-b-2 border-cyan-600/30 bg-gray-100 sm:flex-row"
                      >
                        <time className="flex w-[5rem] flex-col whitespace-nowrap  bg-gray-300/60 py-1 text-center text-base text-gray-600 xs:w-[10rem] xs:flex-row xs:items-center xs:justify-center xs:text-lg ">
                          <span className="">{item.time.split("-")[0]}</span>
                          <span className="text-sm xs:mx-2">-</span>
                          <span>{item.time.split("-")[1]}</span>
                        </time>
                        <div className="my-0 flex grow flex-col items-center justify-center text-base text-gray-600 xs:my-2 sm:flex-row sm:text-xl">
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
                            <p className="py-1 text-center text-sm font-light xs:text-lg">
                              {item?.annotation ?? ""}
                            </p>
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
          <div className="-mx-4 flex flex-col rounded-2xl border border-sky-800/20 bg-gray-100">
            <div className="flex w-full flex-row">
              {agendaPCTable.name.map((name, index) => {
                return (
                  <time
                    key={name}
                    className={`w-1/2 border-b-2 border-slate-900/20 bg-gray-300/60 py-2 pl-4 text-start text-xl text-gray-600 lg:py-4 lg:pl-8  xl:text-2xl ${
                      index === 0 ? " rounded-tl-2xl" : " rounded-tr-2xl"
                    }`}
                  >
                    {name}
                  </time>
                );
              })}
            </div>
            <div className="flex flex-col px-4 py-2 text-center text-base text-gray-600 ">
              {agendaPCTable.list.map(
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
                      className="flex border-b-2 border-cyan-600/30 last:border-none"
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
                            <p className="my-1 font-light">
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
                            <p className="my-1 font-light">
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
