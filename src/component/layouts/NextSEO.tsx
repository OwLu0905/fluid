import React from "react";
import { NextSeo } from "next-seo";

type Seotype = {
  title: string;
  description: string;
};

const NextSEO = (props: Seotype) => {
  return (
    <>
      <NextSeo
        title={props.title}
        titleTemplate="%s - 第28屆全國計算流體力學學術研討會"
        defaultTitle="NCFD 2023"
        description={props.description}
      />
    </>
  );
};

export default NextSEO;
