import React from "react";
import CoCharis from "../sidebar/CoCharis";
import Navlist from "../sidebar/Navlist";

const Sidebar = () => {
  return (
    <section className="space-y-4">
      <hr className="border border-slate-300/20" />
      <div className="rounded-lg px-2 py-2 text-sm shadow-xl md:px-0 md:py-6 md:text-base lg:px-4">
        <CoCharis />
      </div>
    </section>
  );
};

export default Sidebar;
