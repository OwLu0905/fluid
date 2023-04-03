import React from "react";

import AppLayout from "@/component/layouts/AppLayout";

const Poster = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <h3 className="py-2 text-base font-semibold sm:text-2xl">主辦單位</h3>
      <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
        <li>(1) 中華民國航空太空學會</li>
        <li>(2) 國立臺灣大學應用力學研究所</li>
      </ul>
    </section>
  );
};

Poster.Layout = AppLayout;
Poster.displayName = "海報論文競賽";

export default Poster;
