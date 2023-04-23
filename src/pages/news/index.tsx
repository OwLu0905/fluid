import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import NewsPage from "@/view/news";

const News = () => {
  return (
    <>
      <NextSEO
        title="最新消息"
        description="第28屆全國計算流體力學學術研討會最新消息"
      />

      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <NewsPage />
      </section>
    </>
  );
};

News.Layout = AppLayout;
News.displayName = "最新消息";

export default News;
