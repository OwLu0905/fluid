import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import React from "react";

const Speech = () => {
  return (
    <>
      <NextSEO
        title="大會演講"
        description="第28屆全國計算流體力學學術研討會註冊與報名"
      />
      <section className="mx-auto block w-full text-gray-300/80">
        <h3 className="py-2 text-base font-semibold sm:text-2xl">建置中</h3>
      </section>
    </>
  );
};

Speech.Layout = AppLayout;
Speech.displayName = "大會演講";

export default Speech;
