import Title from "@/component/utils/Title";
import Image from "next/legacy/image";

type DateListType = { id: number; title: string; time: string };

const newEssentialDate: DateListType[] = [
  {
    id: 0,
    title: "早鳥優惠報名截止日",
    time: "2023年7月06日（星期四）",
  },
  { id: 1, title: "論文投稿截止日", time: "2023年7月06日（星期四）" },
  { id: 2, title: "論文審查通知日", time: "2023年7月31日（星期一）" },
  { id: 3, title: "海報上傳截止日", time: "2023年8月07日（星期一）" },
];
const essentialDate: DateListType[] = [
  {
    id: 0,
    title: "早鳥優惠報名截止日",
    time: "2023年6月19日（星期一）",
  },
  { id: 1, title: "論文投稿截止日", time: "2023年6月19日（星期一）" },
  { id: 2, title: "論文審查通知日", time: "2023年7月17日（星期一）" },
  { id: 3, title: "海報上傳截止日", time: "2023年8月07日（星期一）" },
];

const HomePage = () => {
  return (
    <section
      className="mx-auto block w-full text-gray-300/80"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <Title as="h2">重要日期</Title>
        <ul className="space-y-4 text-base sm:text-lg md:text-xl xl:text-2xl">
          {newEssentialDate.map((item, index) => {
            return (
              <li key={`date-essential-${item.id}`} className="">
                <div className="flex flex-wrap space-x-1">
                  <h3 className="mr-2">{item.title}：</h3>
                  {index !== 3 && (
                    <>
                      <strong>
                        <del>{essentialDate[index].time}</del>
                      </strong>
                      <strong>
                        <time className="text-rose-700">{item.time}</time>
                      </strong>
                    </>
                  )}
                  {index === 3 && (
                    <strong>
                      <time className="">{item.time}</time>
                    </strong>
                  )}
                </div>
                {index === 0 && (
                  <p className="my-1">
                    (參與會議住宿享飯店優惠價格，於7/06止，詳見住宿資訊）
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {/* <br></br> */}
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <Title as="h2">地點：</Title>
        <h3 className="py-2 text-base font-semibold sm:text-2xl">
          北投亞太飯店
        </h3>
        <div className="">
          <Image
            src="./banner/HotelView.jpg"
            width={1200}
            height={807}
            alt="北投亞太飯店"
            priority={true}
            className="mx-auto block w-full object-scale-down"
          />
        </div>
      </div>
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <Title as="h2">主辦單位</Title>
        <ul className="space-y-2 text-base sm:text-lg lg:text-2xl">
          <li> 中華民國航空太空學會</li>
          <li> 國立臺灣大學應用力學研究所</li>
        </ul>
      </div>
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <Title as="h2">協辦單位</Title>

        <ul className="space-y-2 text-base sm:text-lg lg:text-2xl">
          <li> 臺灣流體力學學會</li>
          <li> 國科會工程司工程科技推廣中心</li>
          <li> 國家高速網路與計算中心</li>
          <li> 國家太空中心</li>
          <li> 國立臺灣科技大學工學院</li>
          <li> 虎門科技股份有限公司</li>
          <li> 易富迪科技有限公司</li>
          <li> 泓崴科技有限公司</li>
          <li> 科盛科技股份有限公司</li>
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
