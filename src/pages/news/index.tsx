import React from "react";

import AppLayout from "@/component/layouts/AppLayout";

const News = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      {/* <h1 className="pb-4 text-xl sm:text-4xl">
        第28屆全國計算流體力學學術研討會
      </h1> */}
      <h3 className="font-semibold text-base sm:text-2xl py-2">主辦單位</h3>
      <ul className="text-base sm:text-lg lg:text-xl space-y-2">
        <li>(1) 中華民國航空太空學會</li>
        <li>(2) 國立臺灣大學應用力學研究所</li>
      </ul>
    </section>
  );
};

News.Layout = AppLayout;
News.displayName = "最新消息";

export default News;
