import Title from "@/component/utils/Title";
import React from "react";
import Compet from "./Compet";
import Procedure from "./Procedure";
import Example from "./SearchPost";
type DateListType = { id: number; title: string; time: string };
const essentialDate: DateListType[] = [
  { id: 1, title: "論文投稿截止日", time: "2023年6月19日（星期一）" },
  { id: 2, title: "論文審查通知日", time: "2023年7月17日（星期一）" },
];
const PosterList = [
  { id: 1, name: "數值計算法則" },
  { id: 2, name: "網格點生成法" },
  { id: 3, name: "電腦流場顯像" },
  { id: 4, name: "平行計算" },
  { id: 5, name: "不可壓縮流流場" },
  { id: 6, name: "可壓縮流流場" },
  { id: 7, name: "紊流模式" },
  { id: 8, name: "熱傳與質傳" },
  { id: 9, name: "化學反應流" },
  { id: 10, name: "渦輪引擎流場" },
  { id: 11, name: "噴射推進與燃燒" },
  { id: 12, name: "多相及介面流" },
  { id: 13, name: "電漿與半導體製程" },
  { id: 14, name: "稀薄流與真空系統" },
  { id: 15, name: "能源技術" },
  { id: 16, name: "生物與醫學流體力學" },
  { id: 17, name: "奈微米熱流" },
  { id: 18, name: "計算聲學" },
  { id: 19, name: "計算電磁學" },
  { id: 20, name: "一般工業應用" },
  { id: 21, name: "汽電共生" },
  { id: 22, name: "環境工程" },
  { id: 23, name: "地科流體力學" },
  { id: 24, name: "洪水與土石流" },
  { id: 25, name: "GPU計算" },
  { id: 26, name: "流固耦合" },
  { id: 27, name: "其他之計算力學" },
];

const PosterPage = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <Title as="span">
        <p className="text-gray-400 before:mr-2 before:content-['•']">
          (內容未定案)
        </p>
      </Title>
      <div className="mb-6 ">
        <Title as="h2">論文徵求範圍</Title>
        <div className="flex flex-col md:mx-4">
          {/* <div className="mb-6">
            <Example />
          </div> */}
          <ul className="flex flex-wrap text-lg md:text-lg lg:text-2xl">
            {PosterList.map((item) => {
              return (
                <li
                  key={`date-essential-${item.id}`}
                  //   className="mx-1 my-2 border-l-2  border-amber-600 bg-blue-900/20 px-4 py-1 shadow-xl hover:cursor-pointer hover:bg-sky-300/60 hover:text-cyan-900/80 "
                  className="mx-2 my-2 border-l-2 border-amber-600 bg-blue-900/20 px-4 py-2 shadow-xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-300/60 hover:to-gray-300/60 hover:text-amber-900 md:py-1 md:px-4 "
                >
                  <div className="flex flex-wrap">
                    <span className="w-[1.5rem] md:w-[2.5rem]">
                      {item.id}.{" "}
                    </span>
                    <h4 className="mr-2">{item.name}</h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mb-6 ">
        <Title as="h2">重要日期</Title>
        <ul className="space-y-4 text-lg md:text-lg lg:text-2xl">
          {essentialDate.map((item) => {
            return (
              <li key={`date-essential-${item.id}`}>
                <div className="flex flex-wrap">
                  <p className="mr-2 font-semibold">{item.title}：</p>
                  <time className="font-medium">{item.time}</time>
                </div>
              </li>
            );
          })}
        </ul>{" "}
      </div>
      <div className="mb-6 ">
        <Title as="h2">論文海報競賽</Title>
        <Compet />
      </div>
      <div className="mb-6 ">
        <Title as="h2">投稿流程</Title>
        <Procedure />
      </div>
    </section>
  );
};

export default PosterPage;
