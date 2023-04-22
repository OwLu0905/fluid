import React, { Fragment, useEffect } from "react";
import SingleContent from "./SingleContent";
import DualContent from "./DualContent";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const title = ["計算流力:", "實驗流力:", "一般流力（計算、實驗、理論）"];
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

const PostContentMobile = () => {
  const gp1TextColor = "text-blue-300";
  const gp1TextChovColor = "text-blue-900";
  const gp1TitleColor =
    "bg-gradient-to-r from-blue-300/60 to-blue-300/80 text-blue-900/80";

  const gp2TextColor = "text-purple-300";
  const gp2TextChovColor = "text-purple-900";
  const gp2TitleColor =
    "bg-gradient-to-r from-purple-300/60 to-purple-300/80 text-purple-900/80";

  const gp3TextColor = "text-teal-300";
  const gp3TextChovColor = "text-teal-900";
  const gp3TitleColor =
    "bg-gradient-to-r from-teal-300/60 to-teal-300/80 text-teal-900/80";

  return (
    <div className="block w-full space-y-2 rounded-md md:hidden ">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="div"
              className={`flex w-full items-center justify-between py-2 px-2 text-center text-base font-semibold xs:text-lg md:py-4 md:text-xl xl:text-2xl ${gp1TitleColor}`}
            >
              <h3 className="grow">{title[0]}</h3>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 ${gp1TextChovColor} transition-all duration-300`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel as={"div"}>
                <SingleContent
                  content={gp1}
                  title={"計算流力:"}
                  textColor={gp1TextColor}
                  titleColor={gp1TitleColor}
                />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="div"
              className={`flex w-full items-center justify-between py-2 px-2 text-center text-base font-semibold xs:text-lg md:py-4 md:text-xl xl:text-2xl ${gp2TitleColor}`}
            >
              <h3 className="grow">{title[1]}</h3>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 ${gp2TextChovColor} transition-all duration-300`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel as={"div"}>
                <SingleContent
                  content={gp2}
                  title={"實驗流力:"}
                  textColor={gp2TextColor}
                  titleColor={gp2TitleColor}
                />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="div"
              className={`flex w-full items-center justify-between py-2 px-2 text-center text-base font-semibold xs:text-lg md:py-4 md:text-xl xl:text-2xl ${gp3TitleColor}`}
            >
              <h3 className="flex grow flex-wrap justify-center">
                一般流力
                <span>（計算、實驗、理論）</span>
              </h3>
              {/* <h3 className="grow">{title[2]}</h3> */}
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 ${gp3TextChovColor} transition-all duration-300`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel as={"div"}>
                <SingleContent
                  content={gp3.concat(gp4)}
                  title={"實驗流力:"}
                  textColor={gp3TextColor}
                  titleColor={gp3TitleColor}
                />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PostContentMobile;
