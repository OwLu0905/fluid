import Image from "next/legacy/image";
const HomePage = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      {/* <h1 className="pb-4 text-xl sm:text-3xl lg:text-4xl">
        第28屆全國計算流體力學學術研討會
      </h1> */}
      <h2 className="font-semibold text-base sm:text-2xl py-2">重要日期：</h2>
      <h2>
      </h2>
      <ul className="text-base sm:text-lg lg:text-xl space-y-2">
        <li>
          <p>早鳥優惠報名截止日 <time>2023年6月19日（星期一）</time></p>
        </li>
        <li>
          <p>論文投稿截止日 <time>2023年6月19日（星期一）</time></p>
        </li>
        <li>
          <p>論文審查通知日 <time>2023年7月17日（星期一）</time></p>
        </li>
      </ul>
      <br></br>
      <h2 className="font-semibold text-base sm:text-2xl py-2">地點：</h2>
      <h3 className="font-semibold text-base sm:text-2xl py-2">北投亞太飯店</h3>
      <div className="">
          <Image
            src="./banner/HotelView.jpg"
            width={1200}
            height={807}
            alt="北投亞太夜景"
            priority={true}
            className="mx-auto object-scale-down  block w-full"
          />
        </div>
      <h2 className="font-semibold text-base sm:text-2xl py-2">主辦單位</h2>
      <ul className="text-base sm:text-lg lg:text-xl space-y-2">
        <li> 中華民國航空太空學會</li>
        <li> 國立臺灣大學應用力學研究所</li>
      </ul>
    </section>
  );
};

export default HomePage;
