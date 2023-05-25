import Title from "@/component/utils/Title";
import React from "react";
import commitData from "@/data/committee.json" assert { type: "json" };

const CommitteePage = () => {
  return (
    <section
      className="mx-auto block w-full text-gray-300/80"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="mb-6 lg:mb-8 xl:mb-10">
        <Title as="h2">主任委員</Title>
        <ul>
          <div className="mb-4 flex flex-col justify-center sm:mr-4 sm:w-[45%]">
            <p className="text-lg font-bold text-gray-300/90 sm:mr-2 md:text-2xl">
              周逸儒
            </p>
            <p className="text-base font-light text-gray-300/80 md:text-xl">
              臺灣大學應用力學研究所
            </p>
            <br></br>
            <p className="text-lg font-bold text-gray-300/90 sm:mr-2 md:text-2xl">
              齊立平
            </p>
            <p className="text-base font-light text-gray-300/80 md:text-xl">
              中山科學研究院
            </p>
          </div>
        </ul>
      </div>
      <div className="mb-6 lg:mb-8 xl:mb-10">
        <Title as="h2">
          籌備委員會
          <span className="block text-lg sm:text-xl md:inline-block lg:text-2xl">
            (按姓氏筆劃排列)
          </span>
        </Title>

        <ul className="flex flex-col sm:flex-row sm:flex-wrap ">
          {commitData.map((item) => {
            return (
              <li
                key={item.id}
                className="mb-4 flex flex-col justify-center sm:mr-4 sm:w-[45%]"
              >
                <p className="text-lg font-bold text-gray-300/90 sm:mr-2 md:text-2xl">
                  {item.name}
                </p>
                <p className="text-base font-light text-gray-300/80 md:text-xl">
                  {item.organize}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CommitteePage;
