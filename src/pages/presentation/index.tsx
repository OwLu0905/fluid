import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import React from "react";

const Presentation = () => {
  return (
    <>
      <NextSEO
        title="論壇發表"
        description="第28屆全國計算流體力學學術研討會論壇發表"
      />
      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="py-2 text-base font-semibold sm:text-2xl">建置中</h3>
      </section>
    </>
  );
};

Presentation.Layout = AppLayout;
Presentation.displayName = "論壇發表";

export default Presentation;
