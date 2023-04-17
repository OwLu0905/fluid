import { DefaultSeo as DefaultNextSEO } from "next-seo";

import React from "react";

const DefaultSEO = () => {
  return (
    <>
      <DefaultNextSEO
        title="NCFD 2023 - 第28屆全國計算流體力學學術研討會"
        description="第28屆全國計算流體力學學術研討會"
        themeColor="#000000"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "favicon.jpg",
          },
          {
            rel: "apple-touch-icon",
            href: "favicon.jpg",
            sizes: "76x76",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "zh_TW",
          url: "https://ncfd2023.tw/",
          siteName: "第28屆全國計算流體力學學術研討會",
        }}
      />
    </>
  );
};

export default DefaultSEO;
