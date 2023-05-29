import React from "react";

const titleTable = [
  {
    title: "6/19之前",
    anno: "(早鳥優惠)",
    date: new Date("2023-03-26").toISOString(),
  },
  {
    title: "6/20之後",
    anno: "",
    date: new Date("2023-06-27").toISOString(),
  },
];
const feeTable: [string, number, number][] = [
  ["一般人士", 6000, 6500],
  ["學生身分", 3000, 4000],
  ["隨行眷屬", 1200, 1200],
];

const FeeTable = () => {
  return (
    <div className="w-full md:my-8 lg:w-3/4">
      {/* <div className="-mx-4 flex flex-col bg-transparent md:mx-2 xl:mx-4">
        <div className="flex w-full text-base xs:text-lg md:text-xl xl:text-2xl">
          <span className="relative mb-1 ">
            <span className="relative mr-2 inline-flex h-3 w-3 rounded-full bg-teal-300"></span>
            <span>當前方案</span>
          </span>
        </div>
      </div> */}
      <div className="-mx-4 flex flex-col border border-gray-600/20 bg-transparent xl:mx-4">
        <div className="flex w-full items-center rounded-t-sm bg-gradient-to-r from-sky-500/60 to-sky-400/60 py-2 text-center text-base font-semibold xs:text-lg md:py-4 md:text-xl xl:text-2xl ">
          <p className="w-full text-amber-100/80">註冊費</p>
        </div>
        <div className="flex border-b-2 border-gray-600/30">
          <div className="flex w-full text-base xs:text-lg md:text-xl xl:text-2xl">
            <div className="flex w-1/3 items-center px-2 md:w-1/5">
              <p className="w-full text-center">身分/費用(NTD)</p>
            </div>

            {titleTable.map((row) => {
              return (
                <div
                  key={row.title}
                  className={`my-2 flex w-1/3 flex-col items-center justify-center rounded-2xl px-1 py-1 md:my-4 md:w-2/5 lg:my-6 `}
                >
                  {/* {row.date && today > row.date && (
                    <span className="relative mb-1 flex h-3 w-3 items-center md:mb-2 ">
                      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-teal-300 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-300"></span>
                    </span>
                  )} */}
                  <p>{row.title}</p>
                  <p className="font-medium text-amber-300/80">{row.anno}</p>
                </div>
              );
            })}
          </div>
        </div>
        {feeTable.map((name, index) => {
          return (
            <div
              key={name[0]}
              className="flex border-b-2 border-gray-600/30 last:border-none"
            >
              <div className="flex w-full text-base xs:text-lg md:text-xl xl:text-2xl">
                <div className="flex w-1/3 items-center px-2 md:w-1/5">
                  <p className="w-full text-center">{name[0]}</p>
                </div>

                <div
                  className={`my-2 flex w-1/3 flex-col items-center justify-center rounded-2xl px-1 py-1 md:my-4 md:w-2/5 lg:my-6 `}
                >
                  <p>
                    {new Intl.NumberFormat("zh-TW", {
                      style: "currency",
                      currency: "TWD",
                      maximumFractionDigits: 0,
                    }).format(name[1])}
                  </p>
                </div>

                <div
                  className={`my-2 flex w-1/3 flex-col items-center justify-center rounded-2xl px-1 py-1 md:my-4 md:w-2/5 lg:my-6 `}
                >
                  <p>
                    {" "}
                    {new Intl.NumberFormat("zh-TW", {
                      style: "currency",
                      currency: "TWD",
                      maximumFractionDigits: 0,
                    }).format(name[2])}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeeTable;
