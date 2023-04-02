import Title from "@/component/utils/Title";
import React from "react";
import CustomMap from "./CustomMap";

const trafficWay = [
  {
    name: "自行開車",
    lists: [
      {
        main: "洲美快速道路（往北投）→接大業路→大業路底（新北投捷運站）→溫泉路→溫泉路Y字路口左轉→ (直行接) 幽雅路。",
        anno: [""],
      },
      {
        main: "台北市區→士林→大業路底（新北投捷運站)→直走泉源路→泉源路底右轉→(少帥禪園)右轉幽雅路。",
        anno: [""],
      },
    ],
  },
  {
    name: "大眾交通工具:",
    lists: [
      {
        main: "航空：桃園中正機場，到站須轉搭其他大眾運輸（建議搭乘：計程車，費用約 1,200 元/單程）",
        anno: [""],
      },
      {
        main: "高(台)鐵：搭乘高(台)鐵至台北車站，到站須轉搭其他大眾捷運。",
        anno: [
          "（建議搭乘：搭捷運至北投站，轉搭亞太接駁車；每日 06:20~22:30 提供飯店至 北投捷運站免費接駁服務）",
        ],
      },
      {
        main: "捷運：搭乘捷運至北投站或新北投站下車，轉搭小 25 公車或 230 大公車，至幽雅路35號下車。",
        anno: [
          "（搭乘捷運至北投站或新北投站下車，轉搭亞太接駁車；每日06:20~22:30提供飯店至北投捷運站免費接駁服務)",
          "★ 北投捷運站候車處:捷運站1號出口右側廣場前方接駁車站牌。",
          "★ 新北投捷運站候車處:捷運站出口左後方20公尺接駁車站牌。",
        ],
      },
      { main: "免費接駁車：", anno: ["由北投亞太飯店提供。"] },
    ],
  },
];
const TrafficPage = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      {/* <SimpleMap /> */}

      <div className="mb-4 flex flex-col md:flex-row lg:mb-6 xl:mb-8">
        <div>
          <Title as="h3">會議地點</Title>
          <p className="text-lg md:text-lg lg:text-2xl">
            北投亞太飯店，亞太一廳，5樓。
          </p>
          <br />
          <ul className="space-y-2 text-lg md:text-lg lg:text-xl">
            <li>北投亞太飯店</li>
            <li>地址：台北市北投區幽雅路31號 </li>
            <li>
              <a
                className="hover:text-gray-300/80 hover:underline hover:decoration-cyan-300 hover:underline-offset-2"
                href="tel:02-2898-3088"
              >
                電話：02-2898-3088
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-300/80 hover:underline hover:decoration-cyan-300 hover:underline-offset-2"
                href="https://www.apresort.com.tw/"
                target={"_blank"}
              >
                網址：https://www.apresort.com.tw/
              </a>
            </li>
          </ul>
        </div>
        {/* <div>123</div> */}
      </div>
      <div className="mb-4 lg:mb-6 xl:mb-8">
        <CustomMap />
      </div>
      <div>
        <Title as="h3">交通資訊</Title>
        {trafficWay.map((item) => {
          return (
            <div key={item.name} className="mb-2 lg:mb-4">
              <p className="mb-2 text-lg font-bold  md:text-xl lg:mb-2 lg:text-2xl">
                {item.name}
              </p>
              <ul className="flex  list-disc flex-col space-y-2">
                {item.lists.map((i) => {
                  return (
                    <li key={i.main} className="text-lg md:text-lg lg:text-xl">
                      <p className="my-1">{i.main}</p>
                      {!!i.anno[0] &&
                        i.anno.map((a) => <p className="my-1 text-lg">{a}</p>)}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrafficPage;
