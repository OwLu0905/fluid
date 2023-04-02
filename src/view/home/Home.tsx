import Title from "@/component/utils/Title";
import Image from "next/legacy/image";

type DateListType = { id: number; title: string; time: string };
const essentialDate: DateListType[] = [
  { id: 0, title: "早鳥優惠報名截止日", time: "2023年6月19日（星期一）" },
  { id: 1, title: "論文投稿截止日", time: "2023年6月19日（星期一）" },
  { id: 2, title: "論文審查通知日", time: "2023年7月17日（星期一）" },
];

const HomePage = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <Title as="h2">重要日期</Title>
      <ul className="space-y-4 text-lg md:text-lg lg:text-xl">
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
      </ul>
      <br></br>
      <Title as="h2">地點：</Title>
      <h3 className="py-2 text-base font-semibold sm:text-2xl">北投亞太飯店</h3>
      <div className="">
        <Image
          src="./banner/HotelView.jpg"
          width={1200}
          height={807}
          alt="北投亞太夜景"
          priority={true}
          className="mx-auto block  w-full object-scale-down"
        />
      </div>
      <br></br>
      <Title as="h2">主辦單位</Title>
      <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
        <li> 中華民國航空太空學會</li>
        <li> 國立臺灣大學應用力學研究所</li>
      </ul>
    </section>
  );
};

export default HomePage;
