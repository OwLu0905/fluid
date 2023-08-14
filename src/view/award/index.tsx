import Title from "@/component/utils/Title";
import React from "react";

const AwardPage = () => {
  const awardTitle = [
    {
      name: "理論(含計算)流體力學類別：",
      value: "羅弘岳教授",
      sub: "臺灣大學工程科學及海洋工程學系",
    },
    {
      name: "實驗流體力學類別：",
      value: "張鈞棣教授",
      sub: "臺灣大學機械工程學系",
    },
  ];

  return (
    <section
      className="mx-auto block w-full text-gray-300/80"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <ul>
          {awardTitle.map((item) => {
            return (
              <li key={item.name} className="mb-8 flex flex-col justify-center">
                <Title as="h2" className="!block !pb-4">
                  {item.name}
                </Title>
                <p className="text-lg font-bold text-gray-300/90 sm:mr-2 md:text-2xl">
                  {item.value}
                </p>
                <p className="text-base font-light text-gray-300/80 md:text-xl">
                  {item.sub}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AwardPage;
