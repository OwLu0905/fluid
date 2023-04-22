import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import AgendaPage from "@/view/agenda";
import NextSEO from "@/component/layouts/NextSEO";

const table: [string, string, string, string][] = [
  ["9:20-9:30", "開幕", "", ""],
  [
    "9:30-10:20",
    "⼤會演講1(蕭述三講座教授)",
    "9:30-10:20",
    "⼤會演講2 (Prof. KunihikoTaira,UCLA)",
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
    <>
      <NextSEO
        title="議程"
        description="第28屆全國計算流體力學學術研討會議程表格，大會演講、迷你論壇、海報展示、流體力學學會會員大會暨年輕學者獎頒獎、晚宴時間"
      />

      <section
        className="mx-auto block w-full text-gray-300/100"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <AgendaPage tableData={table} />
      </section>
    </>
  );
};

Agenda.Layout = AppLayout;
Agenda.displayName = "議程";

export default Agenda;
