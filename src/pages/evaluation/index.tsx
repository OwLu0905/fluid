import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import EvaluationPage from "@/view/evaluation";
import React from "react";

const Evaluation = () => {
  return (
    <>
      <NextSEO
        title="評審委員名單"
        description="第28屆全國計算流體力學學術研討會評審委員名單"
      />

      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <EvaluationPage />
      </section>
    </>
  );
};

Evaluation .Layout = AppLayout;
Evaluation .displayName = "評審委員名單";

export default Evaluation ;
