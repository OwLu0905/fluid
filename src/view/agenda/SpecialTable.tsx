import React, { useState } from "react";
import classNames from "classnames";
type AgendaPageProps = {
  tableData: [string, string, string, string][];
};

const tagStyle = {
  0: "",
  1: "bg-emerald-300/80 text-emerald-800 shadow-md",
  2: "bg-sky-300/80 text-sky-800  shadow-md",
  3: "bg-violet-300/60 text-violet-800 shadow-md",
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
  ],
};

const SpecialAgendaTable = () => {
  const type1 = agendaPCTableMid.list[0][0].type as 0 | 1 | 2 | 3;
  const type2 = agendaPCTableMid.list[0][1].type as 0 | 1 | 2 | 3;
  const type3 = agendaPCTableMid.list[1][0].type as 0 | 1 | 2 | 3;
  const type4 = agendaPCTableMid.list[1][1].type as 0 | 1 | 2 | 3;
  return (
    // <div className="flex w-full">
    //   <div className="flex w-1/2 flex-col border-b-2 border-gray-600/30">
    //     <div className="flex w-1/2 text-xl xl:text-2xl">
    //       <p className="flex items-center">
    //         {agendaPCTableMid.list[0][0].time}
    //       </p>
    //       <div className="flex grow flex-col justify-center py-2">
    //         <h4
    //           className={classNames(
    //             `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-6 md:py-2 `,
    //             {
    //               [tagStyle[type1]]: true,
    //             }
    //           )}
    //         >
    //           {agendaPCTableMid.list[0][0].content}
    //         </h4>
    //         {agendaPCTableMid.list[0][0]?.annotation && (
    //           <p className="my-1 font-light text-yellow-600">
    //             {agendaPCTableMid.list[0][0]?.annotation ?? ""}
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //     <div className="flex w-1/2 text-xl xl:text-2xl">
    //       <p className="flex items-center">
    //         {agendaPCTableMid.list[0][1].time}
    //       </p>
    //       <div className="flex grow flex-col justify-center py-2">
    //         <h4
    //           className={classNames(
    //             `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-6 md:py-2 `,
    //             {
    //               [tagStyle[type2]]: true,
    //             }
    //           )}
    //         >
    //           {agendaPCTableMid.list[0][1].content}
    //         </h4>
    //         {agendaPCTableMid.list[0][1]?.annotation && (
    //           <p className="my-1 font-light  text-yellow-600">
    //             {agendaPCTableMid.list[0][1]?.annotation ?? ""}
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex w-1/2 flex-col border-b-2 border-gray-600/30">
    //     <div className="flex text-xl xl:text-2xl">
    //       <p className="flex items-center">
    //         {agendaPCTableMid.list[1][0].time}
    //       </p>
    //       <div className="flex grow flex-col justify-center py-2">
    //         <h4
    //           className={classNames(
    //             `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-6 md:py-2 `,
    //             {
    //               [tagStyle[type3]]: true,
    //             }
    //           )}
    //         >
    //           {agendaPCTableMid.list[1][0].content}
    //         </h4>
    //         {agendaPCTableMid.list[1][0]?.annotation && (
    //           <p className="my-1 font-light text-yellow-600">
    //             {agendaPCTableMid.list[1][0]?.annotation ?? ""}
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //     <div className="flex text-xl xl:text-2xl">
    //       <p className="flex items-center">
    //         {agendaPCTableMid.list[1][1].time}
    //       </p>
    //       <div className="flex grow flex-col justify-center py-2">
    //         <h4
    //           className={classNames(
    //             `mx-auto my-2 inline-block rounded-2xl px-4 py-1 md:px-6 md:py-2 `,
    //             {
    //               [tagStyle[type4]]: true,
    //             }
    //           )}
    //         >
    //           {agendaPCTableMid.list[1][1].content}
    //         </h4>
    //         {agendaPCTableMid.list[1][1]?.annotation && (
    //           <p className="my-1 font-light  text-yellow-600">
    //             {agendaPCTableMid.list[1][1]?.annotation ?? ""}
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex border-b-2 border-gray-600/30  text-xl xl:text-2xl">
      <div className="flex w-1/2">
        <div className="flex flex-col">
          <p className="flex min-h-[7rem] items-center whitespace-nowrap border-b-2  border-gray-600/30 py-4">
            12:00 - 13:00
          </p>

          <p className="flex min-h-[6rem] items-center whitespace-nowrap py-4">
            13:00 - 14:30
          </p>
        </div>
        <div className="flex grow">
          <div className="flex grow flex-col">
            <div className="min-h-[7rem] border-b-2  border-gray-600/30 py-4">
              <p className="mt-6">午餐</p>
            </div>

            <div className="min-h-[7rem] py-4">
              <p className="mx-3 mt-4 inline-block grow rounded-2xl bg-gradient-to-tr from-purple-300/80 to-fuchsia-300/80 px-4 py-1 text-purple-800/80 shadow-md shadow-rose-300/60 md:px-6 md:py-2">
                海報展⽰
              </p>
            </div>
            {/* <div className="mx-auto flex min-h-[7rem] items-center  pt-4 pb-2">
              <p className="text-center">午餐</p>
            </div>

            <p className="mx-auto flex min-h-[7rem] items-center pb-4 pt-2 ">
              海報展示
            </p> */}
          </div>
          <div className="md:text-md my-6 mx-2 flex max-w-[6rem] shrink items-center rounded-2xl bg-gradient-to-b from-stone-300/70 via-stone-300/80 to-zinc-300/60 px-2 py-1 text-sm text-stone-800/80 shadow-md shadow-zinc-500/60 sm:mx-4 sm:max-w-[6rem] sm:text-base md:max-w-[6rem] lg:max-w-[6rem] lg:text-lg xl:max-w-[8rem] xl:px-4 xl:text-2xl 2xl:max-w-[10rem]">
            流體力學學會會員大會暨年輕學者獎頒獎
          </div>
          {/* <div className="my-4 flex min-h-[10rem] max-w-[6rem] shrink items-center rounded-md bg-gradient-to-b from-zinc-600/80 to-zinc-400/80 py-4 px-2 text-stone-300/80 sm:mx-4 sm:max-w-[4rem] sm:text-base md:max-w-[5rem] lg:max-w-[6rem] lg:text-xl xl:max-w-[8rem] 2xl:max-w-[12rem]">
            流體力學學會會員大會暨年輕學者獎頒獎
          </div> */}
        </div>
      </div>
      <div className="flex w-1/2">
        <div className="flex flex-col">
          <p className="flex min-h-[7rem] items-center whitespace-nowrap border-b-2  border-gray-600/30 py-4">
            12:00 - 13:00
          </p>

          <p className="flex min-h-[6rem] items-center whitespace-nowrap py-4">
            13:00 - 14:15
          </p>
        </div>
        <div className="flex grow">
          <div className="flex grow flex-col">
            <div className="min-h-[7rem] border-b-2  border-gray-600/30 py-4">
              <p className="mt-6">午餐</p>
            </div>

            <div className="flex min-h-[7rem] flex-col py-4">
              <p className="mx-auto mt-4 inline-block rounded-2xl bg-gradient-to-r from-sky-300/80  to-cyan-300/80  px-4 py-1  text-sky-800 shadow-md shadow-sky-300/60 md:px-6 md:py-2">
                迷你論壇3
              </p>
              <p className="my-1 mx-auto flex items-center text-center font-light text-yellow-600 sm:max-w-[8.5rem]  md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem]">
                河海工程應用
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialAgendaTable;
