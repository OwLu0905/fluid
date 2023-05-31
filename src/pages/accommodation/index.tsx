import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import AccommodationPage from "@/view/accommodation";

const Accommodation = () => {
  return (
    <>
      <NextSEO
        title="住宿資訊"
        description="第28屆全國計算流體力學學術研討會住宿資訊"
      />

      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <AccommodationPage  />
      </section>
    </>
  );
};

Accommodation.Layout = AppLayout;
Accommodation.displayName = "住宿資訊";


export default Accommodation;
