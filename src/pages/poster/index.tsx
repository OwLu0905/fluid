import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import PosterPage from "@/view/poster";
import NextSEO from "@/component/layouts/NextSEO";

const Poster = () => {
  return (
    <>
      <NextSEO
        title="海報論文競賽"
        description="第28屆全國計算流體力學學術研討會海報論文競賽"
      />
      <PosterPage />;
    </>
  );
};

Poster.Layout = AppLayout;
Poster.displayName = "海報論文競賽";

export default Poster;
