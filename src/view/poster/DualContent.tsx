import React from "react";

const gp3 = [
  "c1. 熱傳與質傳",
  "c2. 化學反應流",
  "c3. 渦輪引擎",
  "c4. 噴射推進與燃燒",
  "c5. 多相及介面流",
  "c6. 電漿與半導體製程",
  "c7. 稀薄流與真空系統",
  "c8. 能源技術",
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

type PosterContentType = {
  content: string[];
  title: string;
  textColor: string;
  titleColor?: string;
};

const DualContent = (props: PosterContentType) => {
  const { content, title, textColor, titleColor } = props;
  return (
    <section className="mb-4 w-full text-base md:text-lg lg:text-2xl">
      <div className="flex w-full flex-col">
        <div
          className={`hidden w-full items-center rounded-t-sm px-2 py-2 text-center text-base font-semibold xs:text-lg md:flex md:py-4 md:text-xl xl:text-2xl ${titleColor}`}
        >
          <p className="w-full">{title}</p>
        </div>
        <div className="flex">
          <ul className="w-1/2 space-y-2">
            {content.slice(0, 8).map((item) => (
              <li
                key={item}
                className="duration-400 flex w-full grow py-2 px-2 text-blue-100/80 transition-all  hover:cursor-pointer  hover:bg-gray-300/40 hover:bg-gradient-to-r hover:from-sky-600/40 hover:to-teal-300/40 lg:py-3"
              >
                <span className={`${textColor} mr-4`}>
                  {item.split(" ")[0]}
                </span>
                <h4>{item.split(" ")[1]}</h4>
              </li>
            ))}
          </ul>
          <ul className="w-1/2 grow space-y-2">
            {content.slice(8).map((item) => (
              <li
                key={item}
                className="duration-400 flex w-full grow py-2 px-2 text-blue-100/80 transition-all  hover:cursor-pointer  hover:bg-gray-300/40 hover:bg-gradient-to-r hover:from-sky-600/40 hover:to-teal-300/40 lg:py-3"
              >
                <span className={`${textColor} mr-4`}>
                  {item.split(" ")[0]}
                </span>
                <h4>{item.split(" ")[1]}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DualContent;
