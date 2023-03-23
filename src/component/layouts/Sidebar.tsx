import React from "react";
import CoCharis from "../sidebar/CoCharis";
import Navlist from "../sidebar/Navlist";

const Sidebar = () => {
  return (
    <section className="space-y-4">
      <hr className="border border-slate-300/20" />
      <div className="px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl">
        <CoCharis />
      </div>
    </section>
  );
};

export default Sidebar;
