import Title from "@/component/utils/Title";
import React from "react";

const commitData: { id: number; name: string; organize: string }[] = [
  { id: 0, name: "牛仰堯", organize: "淡江大學航空太空工程學系" },
  { id: 1, name: "朱錦洲", organize: "臺灣大學應用力學研究所" },
  { id: 2, name: "吳清森", organize: "宜蘭大學土木工程學系" },
  { id: 3, name: "李弘毅", organize: "華梵大學機械工程學系" },
  { id: 4, name: "李政賢", organize: "中山大學海洋環境及工程學系" },
  { id: 5, name: "吳毓庭", organize: "成功大學工程科學系" },
  { id: 6, name: "吳宗信", organize: "國家太空中心" },
  { id: 7, name: "沈立軒", organize: "科盛科技公司" },
  { id: 8, name: "林昭安", organize: "清華大學動力機械工程學系" },
  { id: 9, name: "林洸銓", organize: "清華大學工程與系統工程系暨研究所" },
  { id: 10, name: "苗志銘", organize: "屏東科技大學生物機電工程學系" },
  { id: 11, name: "范佳銘", organize: "海洋大學河海工程學系" },
  { id: 12, name: "徐子圭", organize: "空軍航空技術學院飛機工程學系" },
  { id: 13, name: "陳志臣", organize: "中央大學機械工程學系" },
  { id: 14, name: "陳明志", organize: "臺灣科技大學機械工程學系" },
  { id: 15, name: "陳炳煇", organize: "臺灣大學機械工程學系" },
  { id: 16, name: "陳慶耀", organize: "交通大學機械工程學系" },
  { id: 17, name: "陳發林", organize: "臺灣大學應用力學研究所" },
  { id: 18, name: "張建成", organize: "臺灣大學應用力學研究所" },
  { id: 19, name: "張克勤", organize: "成功大學航空太空工程學系" },
  { id: 20, name: "張榮語", organize: "科盛科技公司" },
  { id: 21, name: "張朝亮", organize: "國家高速網路與計算中心" },
  { id: 22, name: "許嘉翔", organize: "科盛科技公司" },
  { id: 23, name: "曾子彝", organize: "國家高速網路與計算中心" },
  { id: 24, name: "曾建洲", organize: "成功大學機械工程學系" },
  { id: 25, name: "黃柏文", organize: "逢甲大學航太與系統工程學系" },
  { id: 26, name: "黃美嬌", organize: "臺灣大學機械工程學系" },
  { id: 27, name: "黃楓南", organize: "中央大學數學系" },
  { id: 28, name: "楊馥菱", organize: "臺灣大學機械工程學系" },
  { id: 29, name: "趙修武", organize: "臺灣大學工程科學及海洋工程學系" },
  { id: 30, name: "鄭金祥", organize: "成功大學航空太空工程學系" },
  { id: 31, name: "蕭述三", organize: "中央大學機械工程學系" },
  { id: 32, name: "闕志哲", organize: "成功大學航空太空工程學系" },
];

const CommitteePage = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <Title as="h2">籌備委員會(按姓氏筆劃排列)</Title>
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
    </section>
  );
};

export default CommitteePage;
