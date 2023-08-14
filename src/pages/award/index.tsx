import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import Title from "@/component/utils/Title";
import AwardPage from "@/view/award";

const Award = () => {
  return (
    <>
      <NextSEO
        title="流力學會得獎名單"
        description="第28屆全國計算流體力學學術研討會流力學會得獎名單"
      />

      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/*  <h3 className="text-2xl font-medium">建置中</h3> */}
        <AwardPage />
      </section>
    </>
  );
};

Award.Layout = AppLayout;
Award.displayName = "流力學會得獎名單";

export default Award;
