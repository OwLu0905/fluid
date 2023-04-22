import React, { useEffect } from "react";
import SingleContent from "./SingleContent";
import DualContent from "./DualContent";
const gp1 = [
  "a1. 數值計算法則",
  "a2. 網格點生成法",
  "a3. 電腦流場顯像",
  "a4. 平行計算",
  "a5. 紊流模式與模擬",
  "a6. GPU計算",
  "a7. 流固耦合",
  "a8. 機器學習與資料科學應用",
];
const gp2 = [
  "b1. 流場顯像",
  "b2. 機器學習應用",
  "b3. 能源系統開發",
  "b4. 熱流製造技術",
  "b5. 創新量測技術",
  "b6. 遙測技術與應用",
  "b7. 極端系統應用",
  "b8. 生醫檢測 ",
];

const gp3 = [
  "c1. 熱傳與質傳",
  "c2. 化學反應流",
  "c3. 渦輪引擎",
  "c4. 噴射推進與燃燒",
  "c5. 多相及介面流",
  "c6. 電漿與半導體製程",
  "c7. 稀薄流與真空系統",
  "c8. 能源技術",
  "c9. 生物與醫學流體力學",
  "c10. 奈微米熱流",
  "c11. 工業流體",
  "c12. 汽電共生",
  "c13. 天然災害",
  "c14. 環境與地科流體力學",
  "c15. 流固耦合",
  "c16. 流體穩定性",
];

const gp4 = [
  "c9. 生物與醫學流體力學",
  "c10. 奈微米熱流",
  "c11. 工業流體",
  "c12. 汽電共生",
  "c13. 天然災害",
  "c14. 環境與地科流體力學",
  "c15. 流固耦合",
  "c16. 流體穩定性",
];

const title = ["計算流力:", "實驗流力:", "一般流力（計算、實驗、理論）"];

const PostContent = () => {
  const gp1TextColor = "text-blue-300";
  const gp1BgColor = "bg-blue-900/10";
  const gp1TitleColor =
    "bg-gradient-to-r from-blue-300/60 to-blue-300/80 text-blue-900/80";

  const gp2TextColor = "text-indigo-300";
  const gp2BgColor = "bg-indigo-800/10";
  const gp2TitleColor =
    "bg-gradient-to-r from-indigo-300/60 to-indigo-300/80 text-indigo-900/80";

  const gp3TextColor = "text-teal-300";
  const gp3BgColor = "bg-teal-900/10";
  const gp3TitleColor =
    "bg-gradient-to-r from-teal-300/60 to-teal-300/80 text-teal-900/80";

  return (
    <div className="hidden md:block">
      <div className="flex flex-wrap">
        <div className={`mx-2 w-full grow ${gp1BgColor} sm:w-[48%]`}>
          <SingleContent
            content={gp1}
            title={title[0]}
            textColor={gp1TextColor}
            titleColor={gp1TitleColor}
          />
        </div>
        <div className={`mx-2 w-full grow ${gp2BgColor} sm:w-[48%]`}>
          <SingleContent
            content={gp2}
            title={title[1]}
            textColor={gp2TextColor}
            titleColor={gp2TitleColor}
          />
        </div>
        <div className={`mx-2 w-full grow ${gp3BgColor} mt-6 xl:mt-8`}>
          <DualContent
            content={gp3}
            title={title[2]}
            textColor={gp3TextColor}
            titleColor={gp3TitleColor}
          />
        </div>
      </div>
    </div>
  );
};

export default PostContent;
