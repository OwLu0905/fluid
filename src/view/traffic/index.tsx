import Title from "@/component/utils/Title";
import Image from "next/legacy/image";
import React from "react";
import CustomMap from "./CustomMap";

const trafficWay = [
  {
    name: "自行開車",
    lists: [
      {
        main: "洲美快速道路（往北投）→ 接大業路 → 大業路底（新北投捷運站）→ 溫泉路 → 溫泉路Y字路口左轉 → (直行接) 幽雅路。",
        anno: [""],
        image: undefined,
      },
      {
        main: "台北市區 → 士林 → 大業路底（新北投捷運站) → 直走泉源路 → 泉源路底右轉 → (少帥禪園)右轉幽雅路。",
        anno: [""],
        image: undefined,
      },
    ],
  },
  {
    name: "大眾交通工具:",
    lists: [
      {
        main: "航空：桃園中正機場，到站須轉搭其他大眾運輸",
        anno: [
          `（建議搭乘：計程車，費用約 ${new Intl.NumberFormat("zh-TW", {
            style: "currency",
            currency: "TWD",
            maximumFractionDigits: 0,
          }).format(1200)} 元 / 單程）`,
        ],
        image: undefined,
      },
      {
        main: "高(台)鐵：搭乘高(台)鐵至台北車站，到站須轉搭其他大眾捷運。",
        anno: [
          "（建議搭乘：搭捷運至北投站，轉搭亞太接駁車；每日 06:20~22:30 提供飯店至 北投捷運站免費接駁服務）",
        ],
        image: undefined,
      },
      {
        main: "捷運：捷搭乘捷運至北投站或新北投站下車，轉搭小 25 公車或 230 大公車，至幽雅路35號下車。",
        anno: [
          "（搭乘捷運至北投站或新北投站下車，轉搭亞太接駁車；每日06:20~22:30提供飯店至北投捷運站免費接駁服務)",
          "★ 北投捷運站候車處：運站1號出口右側廣場前方接駁車站牌。",
          "★ 新北投捷運站候車處：捷運站出口左後方20公尺接駁車站牌。",
          "★ 新北投捷運站步行至北投亞太飯店，約20-30分鐘，路程經數段上坡。",
        ],
        image: undefined,
      },
      {
        main: "免費接駁車：",
        anno: ["由北投亞太飯店提供。"],
        image: "./banner/traffic1.png",
      },
    ],
  },
];
const TrafficPage = () => {
  return (
    <section
      className="mx-auto block w-full text-gray-300/80"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {/* <SimpleMap /> */}

      <div className="mb-6 flex flex-col lg:mb-8 lg:ml-4 xl:mb-10">
        <div>
          <Title as="h3">會議地點</Title>
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl">
            北投亞太飯店，亞太一廳，5樓。
          </p>
          <br />
        </div>
        <div className="flex flex-col items-start md:flex-row">
          <ul className="space-y-2 text-base sm:text-lg md:text-xl xl:text-2xl">
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
          <div className="mx-auto mb-6 block w-full grow md:mb-10 md:max-w-[50%]">
            <a
              href={"./banner/traffic2.png"}
              target="_blank"
              className="flex flex-col items-center"
            >
              <Image
                src="./banner/traffic2.png"
                width={1100}
                height={512}
                alt="第二十八屆計算流體力學晚宴地點：北投亞太飯店路線"
                // priority={true}
                className="mx-auto block w-full object-scale-down md:max-w-[50%]"
              />
              <p className="text-lg">（擷取自北投亞太飯店網站）</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.960201565933!2d121.51210067605304!3d25.137036334133704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af6ebfe943cd%3A0x9f5ef36489bbe33c!2z5YyX5oqV5Lqe5aSq6aOv5bqX77yN5Y-w5YyXIOWMl-aKlSDmuqvms4npo6_lupfvvZzlj7DljJfpoILntJrms6Hmua_vvZzms6Hmua_kvY_lrr_vvZzml4XpgYrkvY_lrr_vvZzmnIPorbDloLTlnLDnp5_lgJ_vvZzljJfmipXkvY_miL_mjqjolqY!5e0!3m2!1szh-TW!2stw!4v1685537426949!5m2!1szh-TW!2stw"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <Title as="h3">交通資訊</Title>
        {trafficWay.map((item) => {
          return (
            <div key={item.name} className="mx-0 mb-4 lg:mb-6 xl:mb-8">
              <p className="mb-4 text-lg font-bold text-blue-400  md:text-xl lg:mb-6 lg:text-2xl ">
                {item.name}
              </p>
              <ul className="flex flex-col space-y-2 text-base sm:text-lg md:space-y-4 md:text-xl lg:space-y-2 xl:text-2xl">
                {item.lists.map((i) => {
                  return (
                    <li key={i.main} className="mb-2">
                      <p className="my-1 mb-4 border-l border-l-[#ffd000] bg-blue-900/20 py-4 pl-4 md:border-l-2">
                        {i.main}
                      </p>
                      {i.image && (
                        <div className="mx-auto mb-6 block w-full md:mb-10">
                          <a
                            href={i.image}
                            target="_blank"
                            className="flex flex-col items-center"
                          >
                            <Image
                              src={i.image}
                              width={950}
                              height={700}
                              alt="第二十八屆計算流體力學晚宴地點：北投亞太飯店接駁資訊"
                              // priority={true}
                              className="mx-auto block w-full object-scale-down"
                            />
                            <p>（由北投亞太飯店提供）</p>
                          </a>
                        </div>
                      )}
                      {!!i.anno[0] &&
                        !i.image &&
                        i.anno.map((a) => (
                          <p
                            key={a}
                            className="mb-4 text-base sm:text-lg md:text-xl xl:text-2xl"
                          >
                            {a}
                          </p>
                        ))}
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
