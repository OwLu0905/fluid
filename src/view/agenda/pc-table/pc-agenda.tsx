import React from "react";
import classNames from "classnames";
import SpecialAgendaTable from "../SpecialTable";


export const tagStyle = {
  0: "",
  1: "bg-gradient-to-tr from-indigo-300/80 to-gray-100/80 text-indigo-800/80 shadow-md shadow-zinc-100/60",
  2: "bg-gradient-to-tr from-sky-300/80 to-slate-100/80 text-sky-800/80 shadow-md shadow-sky-300/60", // blue
  3: "bg-gradient-to-tr from-purple-300/80 to-violet-100/80 text-purple-800/80 shadow-md shadow-rose-300/60", // purple
  4: "bg-gradient-to-tr from-rose-300/80 to-pink-100/80 text-rose-800/80 shadow-md shadow-orange-300/60", // red
  5: "bg-gradient-to-tr from-blue-300/80 to-violet-100/80 text-blue-900/80 shadow-md shadow-sky-300/60",
  6: "bg-gradient-to-tr from-emerald-300/80 to-teal-100/80 text-emerald-800/80 shadow-md shadow-green-300/60", // green
};

const agendaPCTableBefore: {
  name: string[];
  list: Array<{
    time: string;
    content: string;
    type: keyof typeof tagStyle,
    annotation?: string;
  }>[];
} = {
  name: ["第一天 8月17日", "第二天 8月18日"],
  list: [
    [
      { time: "09:20 - 09:30", content: "研討會開幕", type: 0 },
      { time: "09:20 - 09:30", content: "/", type: 0 },
    ],
    [
      {
        time: "09:30 - 10:20",
        content: "⼤會演講 I",
        annotation: "蕭述三 講座教授",
        type: 1,
      },
      {
        time: "09:30 - 10:20",
        content: "⼤會演講 II",
        annotation: "Prof. Kunihiko Taira, UCLA",
        type: 1,
      },
    ],
    [
      { time: "10:20 - 10:50", content: "茶敘", type: 0 },
      { time: "10:20 - 10:45", content: "茶敘", type: 0 },
    ],
    [
      {
        time: "10:50 - 12:00",
        content: "迷你論壇 I",
        annotation: "(中山科學研究院)",
        type: 2,
      },
      {
        time: "10:45 - 12:00",
        content: "迷你論壇 III",
        annotation: "紊流模擬",
        type: 2,
      },
    ],
  ],
};

const agendaPCTableAfter: {
  name: string[];
  list: Array<{
    time: string;
    content: string;
    type: keyof typeof tagStyle,
    annotation?: string;
  }>[];
} = {
  name: ["第一天 8月17日", "第二天 8月18日"],
  list: [
    [
      {
        time: "14:30 - 15:40",
        content: "迷你論壇 II",
        annotation: "國家太空中心 高速網路計算中心",
        type: 2,
      },
      { time: "14:15 - 14:45", content: "茶敘", type: 0 },
    ],
    [
      {
        time: "15:40 - 17:30",
        content: "海報展覽",
        annotation: "成果交流",
        type: 5,
      },
      { time: "14:45 - 16:00", content: "工業論壇", type: 4 },
    ],
    [
      { time: "18:00 - 20:00", content: "晚宴", type: 0 },
      { time: "16:00 - 17:00", content: "閉幕及頒獎", type: 0 },
    ],
  ],
};

const PcAgendaTable = () => {
  return (
    <div className="hidden w-full sm:flex">
      <div className="-mx-4 flex w-full flex-col border border-gray-600/20 bg-transparent">
        <div className="flex w-full flex-row space-x-0">
          {agendaPCTableBefore.name.map((name, index) => {
            return (
              <time
                key={name}
                className={`w-1/2 border-b-2  border-gray-600 bg-blue-900/60 py-2 pl-4 text-center text-xl text-gray-300/80 font-medium  lg:py-4 lg:pl-8 xl:text-2xl ${index === 0 ? " " : " "
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
              list ,
              index: number
            ) => {
              const type1 = list[0].type 
              const type2 = list[1].type

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
                        <div className="my-1 mx-auto flex items-center text-center font-light text-yellow-600/80 sm:max-w-[8.5rem]  md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem]">
                          {list[0]?.annotation.includes("國家") ? (
                            <div className="mx-auto flex flex-wrap items-center">
                              <span className="mr-1 inline-block grow text-center">
                                {list[0]?.annotation.split(" ")[0]} &
                              </span>
                              <span className="inline-block grow text-center">
                                {list[0]?.annotation.split(" ")[1]}
                              </span>
                            </div>
                          ) : (


                            <div
                              className={`${list[0]?.annotation === "成果交流"
                                  ? "px-4 py-1 md:px-6 md:py-2 rounded-2xl font-normal bg-gradient-to-tr from-emerald-200/80 to-green-100/80 text-emerald-800 shadow-md shadow-green-300/60"
                                  : ""
                                }`}
                            >
                              {" "}
                              {list[0]?.annotation}
                            </div>
                          )}
                        </div>
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
                        <p className="my-1 font-light text-yellow-600/80">
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
  );
};

export default PcAgendaTable;
