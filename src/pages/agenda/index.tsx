import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import AgendaPage from "@/view/agenda";
import NextSEO from "@/component/layouts/NextSEO";

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
        <AgendaPage />
      </section>
    </>
  );
};

Agenda.Layout = AppLayout;
Agenda.displayName = "議程";

export default Agenda;
