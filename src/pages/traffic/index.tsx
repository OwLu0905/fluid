import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import TrafficPage from "@/view/traffic";

import React from "react";

const Traffic = () => {
  return (
    <>
      <NextSEO
        title="交通資訊"
        description="第28屆全國計算流體力學學術研討會註冊與報名"
      />
      <TrafficPage />
    </>
  );
};

Traffic.Layout = AppLayout;
Traffic.displayName = "交通資訊";

export default Traffic;
