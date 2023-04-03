import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import PosterPage from "@/view/poster";

const Poster = () => {
  return <PosterPage />;
};

Poster.Layout = AppLayout;
Poster.displayName = "海報論文競賽";

export default Poster;
