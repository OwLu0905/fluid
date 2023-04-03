import AppLayout from "@/component/layouts/AppLayout";
import React from "react";

const Speech = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <h3 className="py-2 text-base font-semibold sm:text-2xl">建置中</h3>
    </section>
  );
};

Speech.Layout = AppLayout;
Speech.displayName = "大會演講";

export default Speech;
