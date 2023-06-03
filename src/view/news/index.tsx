import Title from "@/component/utils/Title";
import CalendarIconOutline from "@heroicons/react/24/outline/CalendarIcon";
import React from "react";

const newTable = [
  {
    time: "2023.06.03",
    content:
      "[更新] 大會議程中部分迷你論壇及工業論壇的順序有些微調整，目前已更新完畢。",
  },
  {
    time: "2023.05.11.",
    content:
      "為了促進競賽活動，大會在「論文海報競賽」及「流體力學之美展覽」中，公佈了競賽獎項所對應的獎金，歡迎各個領域的專家學者，一同推廣。",
  },
  {
    time: "2023.04.23.",
    content:
      "網頁中僅「大會演講」及「論壇發表」正在建置中，其餘項目皆已完成。歡迎全國各個領域的專家學者一同共襄盛舉。",
  },
];
const NewsPage = () => {
  return (
    <div
      className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <Title as="h2">最新消息</Title>
      {/* note : size/2 + ml-"4" = size + "4" = size+"4"/4 rem */}

      <ol className="mx-0 border-l border-gray-700 pt-1.5 sm:mx-2 md:mx-4 xl:mx-6">
        {newTable.map((i) => {
          return (
            <li
              key={i.time}
              className="relative mb-6 ml-4 sm:ml-6 md:ml-8 xl:ml-12"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {/* sm:2+6  md: 2.5+8 xl:3+12 */}
              <div className="absolute -left-[1.375rem] mt-0.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700 sm:-left-[2rem] sm:h-4 sm:w-4 md:-left-[2.625rem] md:h-5 md:w-5 xl:-left-[3.75rem] xl:mt-1 xl:h-6 xl:w-6">
                {/* <CalendarIconOutline className="" /> */}
              </div>
              <time className="mb-2 block text-base font-medium leading-none text-gray-400/80 sm:text-lg md:text-xl xl:text-2xl">
                {i.time}
              </time>
              <p className="block text-base text-gray-300/80 sm:text-lg md:text-xl xl:text-2xl">
                {i.content}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default NewsPage;
