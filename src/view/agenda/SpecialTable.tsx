import React from "react";

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

            <div className="flex min-h-[7rem] w-full items-start justify-center py-4">
              <p className="mx-3 mt-2 inline-block h-auto w-1/2 max-w-[170px] grow rounded-2xl bg-gradient-to-tr from-purple-300/80 to-violet-100/80 px-4 py-1 text-purple-800/80 shadow-md shadow-rose-300/60 md:px-3 md:py-2 lg:px-4 xl:px-6">
                海報展⽰
              </p>

              <div className="md:text-md my-2 mx-1 flex w-1/2 max-w-[6rem] shrink items-center rounded-xl px-1 py-1 text-sm font-semibold text-gray-300/80 sm:mx-2 sm:max-w-[6rem] sm:text-base md:max-w-[6rem] lg:max-w-[6rem] lg:text-lg xl:max-w-[8rem] xl:px-2 xl:text-2xl 2xl:max-w-[12rem]">
                流體力學學會會員大會暨年輕學者獎頒獎
              </div>
            </div>
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
              <p className="mx-auto mt-2 inline-block rounded-2xl bg-gradient-to-tr from-sky-300/80 to-slate-300/80 px-4  py-1 text-sky-800 shadow-md shadow-sky-300/60 md:px-3 md:py-2 lg:px-4 xl:px-6">
                迷你論壇 IV
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
