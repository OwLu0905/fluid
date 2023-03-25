import React from "react";
import CoCharis from "../sidebar/CoCharis";
import Navlist from "../sidebar/Navlist";

const Sidebar = () => {
  return (
    <section className="space-y-4">
      <hr className="border border-slate-300/20" />
      <div className="px-2 py-2 md:px-0 md:py-6 lg:px-4 text-sm md:text-base rounded-lg shadow-xl">
        <CoCharis />
      </div>
    </section>
  );
};

export default Sidebar;
