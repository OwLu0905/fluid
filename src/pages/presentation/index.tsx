import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import Title from "@/component/utils/Title";
import React from "react";

const Presentation = () => {
  return (
    <>
      <NextSEO
        title="論壇發表"
        description="第28屆全國計算流體力學學術研討會論壇發表"
      />
      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
          <Title as="h2">迷你論壇1：中山科學研究院</Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            TBA
          </ol>
          <Title as="h2">
            迷你論壇2：國家太空中心 ＆ 國家高速網路與計算中心
          </Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            TBA
          </ol>

          <Title as="h2">迷你論壇3：紊流模擬</Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：李崇綱（國立成功大學機械工程學系）
            <br></br>
            題目： Numerical Estimation of Indoor Air Quality in Crowded
            Environments Based on a Compressible Flow Solver Using Supercomputer
          </ol>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：阮于軒（國立臺北科技大學機械工程系）
            <br></br>
            題目： Numerical Analysis of Urban Wind Energy Potential in Compact
            High-Rise Buildings for Sustainable Urban Development
          </ol>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：葉啟安 （North Carolina State University, Mechanical and
            Aerospace Engineering ）<br></br>
            題目：Towards higher-order statistics of turbulent flows from the
            first-order: the resolvent mode
          </ol>

          <Title as="h2">迷你論壇4：河海工程應用</Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：戴義欽（成大水利及海洋工程學系）
            <br></br>
            題目： Advancing Debris Flow Modeling and Large-Scale Simulation:
            Exploring Key Aspects
          </ol>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：陳佳琳（成大水利及海洋工程學系）
            <br></br>
            題目： A numerical investigation on the transport process of density
            currents over steep slopes and its implications for subsea cable
            breaks
          </ol>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：吳清森（宜蘭大學土木工程學系）
            <br></br>
            題目： Large-eddy simulations of gravity currents flow interacting
            with densified obstacles in a channel
          </ol>

          <Title as="h2">工業論壇</Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：林健文 技術副理（虎門科技）
            <br></br>
            題目： 1D到3D：由系統分析到元件設計
          </ol>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            <br></br>
            講者：簡志明 總經理
            <br></br>
            題目： 飲水機制冷分析
          </ol>
        </div>
      </section>
    </>
  );
};

Presentation.Layout = AppLayout;
Presentation.displayName = "論壇發表";

export default Presentation;
