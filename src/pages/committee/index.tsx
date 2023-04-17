import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import CommitteePage from "@/view/committee";
import React from "react";

const Committee = () => {
  return (
    <>
      <NextSEO
        title="委員會"
        description="第28屆全國計算流體力學學術研討會委員會列表"
      />
      <CommitteePage />
    </>
  );
};

Committee.Layout = AppLayout;
Committee.displayName = "委員會";

export default Committee;
