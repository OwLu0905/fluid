import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import Title from "@/component/utils/Title";
import ExhibitionPage from "@/view/exihibition";
import React from "react";

const Exhibition = () => {
  return (
    <>
      <NextSEO
        title="流體力學之美展覽"
        description="第28屆全國計算流體力學學術研討會流體力學之美展覽"
      />

      <section className="mx-auto block w-full text-gray-300/80">
        {/* <Title as="span">
          <p className="text-gray-400 before:mr-2 before:content-['•']">
            (內容未定案)
          </p>
        </Title> */}
        <ExhibitionPage />
      </section>
    </>
  );
};

Exhibition.Layout = AppLayout;
Exhibition.displayName = "流體力學之美展覽";

export default Exhibition;
