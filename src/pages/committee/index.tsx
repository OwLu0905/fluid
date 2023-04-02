import AppLayout from "@/component/layouts/AppLayout";
import CommitteePage from "@/view/committee";
import React from "react";

const Committee = () => {
  return (
    <>
      <CommitteePage />
    </>
  );
};

Committee.Layout = AppLayout;
Committee.displayName = "委員會";

export default Committee;
