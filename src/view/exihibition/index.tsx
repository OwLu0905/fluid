import LinkIcon from "@/component/icon/Link";
import Title from "@/component/utils/Title";
import Link from "next/link";
import React from "react";

const ExhibitionPage = () => {
  return (
    <>
      <div className="mb-6 lg:mb-8 xl:mb-10">
        <Title as="h2">流體力學之美展覽：</Title>
        <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
          <li className="font-normal">
            為了推廣流體力學中的美，在本次會議中，額外新增一個畫廊的展覽。並以海報的方式展出。
          </li>
          <li className="font-normal">
            參賽內容可取自作者參加海報論文競賽的內容(但以照片或圖片為主)或獨立主題。
          </li>
          <li className="font-normal">
            展覽海報，內容主要強調視覺化的展現。故內容僅需題目、作者、機構、視覺化過後的研究結果、及部分圖說。排版方式則依照作者創意自由發揮。
          </li>
          <li className="font-normal">
            本次展覽亦有競賽活動，名次則依據現場與會人員投票決定。得獎者亦有獎金作為鼓勵。
          </li>
          <li className="font-normal">
            大會無提供展覽模板，請自行發會創意。
            <br />
            （會場展板大小 90cm X 150
            cm，一個展版將規劃放置一幅海報。）
          </li>
          <li className="font-normal">
            展覽海報需自行印製，並提早帶至會場佈置。場佈時間為第一日中午前，撤場時間為第二日中午過後。
          </li>
          <li className="font-normal">
          流體力學之美獎項，若超過10幅海報張貼，將會有競賽獎金作為鼓勵。歡迎各領域的專家學者一同推廣流體力學之美。獎金分別為新台幣10,000元（第一名）、5,000元（第二名）、及3,000元（第三名）。
          </li>
        </ol>
      </div>

      <div className="mb-6 lg:mb-8 xl:mb-10">
        <Title as="h2">畫廊徵求範圍</Title>
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl">
          與論文海報競賽一致，並且特別歡迎國內進行實驗的流體力學專家也能夠參與此次展覽，共同體現流體力學之美。
        </p>
      </div>

      <div className="mb-6 lg:mb-8 xl:mb-10">
        <Title as="h2">重要日期</Title>
        <p className="text-base sm:text-lg  md:text-xl xl:text-2xl">
          流體力學之美展覽海報上傳截止日：2023年8月7日（星期一）
        </p>
      </div>

      <div className="mb-6 lg:mb-8 xl:mb-10">
        <Title as="h2">投稿流程：</Title>
        <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:text-xl xl:text-2xl">
          <li className="flex flex-wrap font-normal">
            請於8月7日前，由Google表單提交展覽海報檔案，方便大會歸檔所用。
            <Link
              rel="canonical"
              title="流體力學之美提交海報"
              href="https://forms.gle/F2Rw5ic4PCpA5QVx8"
              target="_blank"
              className="flex items-center text-yellow-300/90 hover:text-yellow-300"
            >
              <LinkIcon className="h-4 w-4" />
              請按我提交海報
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default ExhibitionPage;
