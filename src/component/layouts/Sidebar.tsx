import React from "react";
import CoCharis from "../sidebar/CoCharis";
import Navlist from "../sidebar/navlist";

const Sidebar = () => {
  return (
    <section className="space-y-4">
      {/* <div className="px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl bg-sky-100/10 text-sky-600"> */}
      {/* <div className="px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl text-sky-600">
        <Navlist />
      </div> */}
      <hr className="border border-slate-800/60" />
      <div className="px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl">
        <CoCharis />
      </div>
    </section>
  );
};

export default Sidebar;
