import React from "react";

import AppLayout from "@/component/layouts/AppLayout";

const table = [
  ["9:20-9:30", "開幕", "", ""],
  [
    "9:30-10:20",
    "⼤會演講1(蕭述三講座教授)",
    "9:30-10:20",
    "⼤會演講2 (Prof.KunihikoTaira,UCLA)",
  ],
  ["10:20-10:45", "茶點", "10:20-10:45", "茶點"],
  ["10:45-12:00", "迷你論壇1(中科院)", "10:45-12:00", "迷你論壇2 : 熱流應用"],
  ["12:00-13:00", "午餐", "12:00-13:00", "午餐"],
  ["13:00-14:30", "海報展⽰", "13:00-14:15", "迷你論壇3 : 河海工程應用"],
  ["14:30-15:00", "茶點", "14:15-14:45", "茶點"],
  ["15:00-16:10", "⼯業論壇", "14:45-16:00", "迷你論壇4 : 紊流模擬"],
  ["18:00-20:00", "晚宴", "16:00-17:00", "閉幕及頒獎"],
];

const Agenda = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/100">

      <h1 className="pb-4 text-xl sm:text-4xl">
        議程
      </h1>
      <table className="border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="w-2/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left text-cyan-300/100 sm:text-2xl">
              第一天
            </th>
            <th className="w-4/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left"></th>
            <th className="w-2/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left text-cyan-300/100 sm:text-2xl">
              第二天
            </th>
            <th className="w-4/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {table.map((item) => {
            return (
              <tr key={item[0] + item[1]}>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-cyan-300/100 sm:text-2xl">
                  {item[0]}
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-cyan-300/100 sm:text-2xl">
                  {item[1]}
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-cyan-300/100 sm:text-2xl">
                  {item[2]}
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-cyan-300/100 sm:text-2xl">
                  {item[3]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

Agenda.Layout = AppLayout;
Agenda.displayName = "議程";

export default Agenda;
