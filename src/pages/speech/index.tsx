import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import Card from "@/component/ui/Card";
import Title from "@/component/utils/Title";
import React from "react";

const Speech = () => {
  return (
    <>
      <NextSEO
        title="大會演講"
        description="第28屆全國計算流體力學學術研討會註冊與報名"
      />
      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
          {/* <Title as="h2">大會演講1</Title> */}
          <Card></Card>
          {/* <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
        <br></br>
          講者：蕭述三（中央大學機械工程學系）
          <br></br>
          題目：TBA
          <br></br>
          摘要：TBA
          <br></br>
         </ol>
         <Title as="h2">大會演講2</Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
          <br></br>
          講者: Kunihiko Taira (Department of Mechanical and Aerospace Engineering University of California, Los Angeles) 
          <br></br>
          題目: Data-Driven Analysis and Control of Extreme Aerodynamic Flows
          <br></br>
          <a href="https://drive.google.com/file/d/1FrkW_OcysSg4JircMI01Rx8Lx-3fiyqy/view?usp=share_link">
          Abstract
          </a>
          <br></br>
          <a href="https://drive.google.com/file/d/1FpVMaYVfLQVCZ4RdSpPjgXD28t7fVFAR/view?usp=sharing">
          Biosketch
          </a>
        </ol> */}
        </div>
      </section>
    </>
  );
};

Speech.Layout = AppLayout;
Speech.displayName = "大會演講";

export default Speech;
