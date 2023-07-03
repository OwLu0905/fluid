import Title from "@/component/utils/Title";
import React, { useEffect } from "react";
import Compet from "./Compet";
import Procedure from "./Procedure";
import PosterList from "@/data/posterlist.json" assert { type: "json" };
import PostContent from "./PostContent";

interface DateListType {
  id: number;
  title: string;
  time: string;
}

const essentialDate: DateListType[] = [
  { id: 1, title: "論文投稿截止日", time: "2023年6月19日（星期一）" },
  { id: 2, title: "論文審查通知日", time: "2023年7月17日（星期一）" },
  { id: 3, title: "海報上傳截止日", time: "2023年8月07日（星期一）" },
];

const newEssentialDate: DateListType[] = [
  { id: 1, title: "論文投稿截止日", time: "2023年7月06日（星期四）" },
  { id: 2, title: "論文審查通知日", time: "2023年7月31日（星期一）" },
  { id: 3, title: "海報上傳截止日", time: "2023年8月07日（星期一）" },
];

const PosterPage = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      {/* <Title as="span">
        <p className="text-gray-400 before:mr-2 before:content-['•']">
          (內容未定案)
        </p>
      </Title> */}
      {/* <div className="mb-6 lg:mb-8 xl:mb-10">
        <Title as="h2">論文徵求範圍</Title>
        <div className="mx-2">
          <ul className="flex flex-col text-lg xs:flex-row xs:flex-wrap md:text-lg lg:text-2xl">
            {PosterList.map((item) => {
              return (
                <li
                  key={`date-essential-${item.id}`}
                  className="duration-400 my-2 mr-2 w-full grow rounded-r-md border-l-4 border-amber-600/80 bg-blue-900/20 px-2 py-2 shadow-xl transition-all xs:mr-0 xs:w-[48%] sm:mr-2 sm:w-[45%] md:mx-2 md:mr-6 md:px-3 hover:md:cursor-pointer hover:md:bg-gradient-to-r hover:md:from-sky-600/40  hover:md:to-teal-300/40  2xl:mr-8 2xl:w-[28%] "
                >
                  <div className="flex w-full">
                    <span className="duration-400 w-[1.5rem] text-cyan-300/80 transition-all  xs:w-[2rem] sm:w-[2.5rem]">
                      {item.id}.
                    </span>
                    <h4 className="ml-2">{item.name}</h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      <div
        className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Title as="h2">重要日期</Title>
        <ul className="space-y-4 text-base sm:text-lg md:text-xl xl:text-2xl">
          {newEssentialDate.map((item, index) => {
            return (
              <li key={`date-essential-${item.id}`}>
                <div className="flex flex-wrap space-x-1">
                  <h3 className="mr-2">{item.title}：</h3>
                  {index !== 2 && (
                    <>
                      <strong>
                        <del>{essentialDate[index].time}</del>
                      </strong>
                      <strong>
                        <time className="text-rose-700">{item.time}</time>
                      </strong>
                    </>
                  )}
                  {index === 2 && (
                    <strong>
                      <time className="">{item.time}</time>
                    </strong>
                  )}
                </div>
              </li>
            );
          })}
        </ul>{" "}
      </div>
      <div
        className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Title as="h2">投稿流程</Title>
        <Procedure />
      </div>
      <div
        className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Title as="h1">論文海報競賽</Title>
        <Compet />
      </div>
    </section>
  );
};

export default PosterPage;
