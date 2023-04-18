import React from "react";
// import classNames from "classnames";
// type AgendaPageProps = {
//   tableData: [string, string, string, string][];
// };

// const tagStyle = {
//   0: "",
//   1: "bg-emerald-300/80 text-emerald-800 shadow-md",
//   2: "bg-sky-300/80 text-sky-800  shadow-md",
//   3: "bg-violet-300/60 text-violet-800 shadow-md",
// };

// type AgendaTableListType = {
//   time: string;
//   content: string;
//   annotation?: string;
//   type: 0 | 1 | 2 | 3;
// }[];

// type AgendaTableType = {
//   [key: string]: { name: string; list: AgendaTableListType };
// };

// const agendaPCTableMid: {
//   name: string[];
//   list: Array<{
//     time: string;
//     content: string;
//     type: 0 | 1 | 2 | 3;
//     annotation?: string;
//   }>[];
// } = {
//   name: ["第一天", "第二天"],
//   list: [
//     [
//       {
//         time: "12:00 - 13:00",
//         content: "午餐",
//         annotation: "流體力學學會會員大會暨年輕學者獎頒獎",
//         type: 0,
//       },
//       { time: "12:00 - 13:00", content: "午餐", type: 0 },
//     ],
//     [
//       {
//         time: "13:00 - 14:30",
//         content: "海報展⽰",
//         type: 3,
//       },
//       {
//         time: "13:00 - 14:15",
//         content: "迷你論壇3",
//         annotation: "河海工程應用",
//         type: 2,
//       },
//     ],
//   ],
// };

const SpecialAgendaTable = () => {
  return (
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
              <p className="mx-3 mt-2 inline-block grow rounded-2xl bg-gradient-to-tr from-purple-300/80 to-fuchsia-300/80 px-4 py-1 text-purple-800/80 shadow-md shadow-rose-300/60 md:px-3 md:py-2 lg:px-4 xl:px-6">
                海報展⽰
              </p>
            </div>
          </div>
          <div className="md:text-md my-6 mx-2 flex max-w-[6rem] shrink items-center rounded-xl px-2 py-1 text-sm font-semibold text-gray-300/80 sm:mx-4 sm:max-w-[6rem] sm:text-base md:max-w-[6rem] lg:max-w-[6rem] lg:text-lg xl:max-w-[8rem] xl:px-4 xl:text-2xl 2xl:max-w-[12rem]">
            流體力學學會會員大會暨年輕學者獎頒獎
          </div>
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
              <p className="mx-auto mt-2 inline-block rounded-2xl bg-gradient-to-r from-sky-300/80  to-cyan-300/80  px-4 py-1  text-sky-800 shadow-md shadow-sky-300/60 md:px-3 md:py-2 lg:px-4 xl:px-6">
                迷你論壇3
              </p>
              <p className="my-1 mx-auto flex items-center text-center font-light text-yellow-600/80 sm:max-w-[8.5rem]  md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem]">
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
