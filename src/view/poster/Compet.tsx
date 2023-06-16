import React from "react";
import PostContent from "./PostContent";
import PostContentMobile from "./PostContentMobile";

const Compet = () => {
  return (
    <ul className="space-y-4 text-base sm:text-lg md:text-xl xl:text-2xl">
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            1.
            此次全國計算流力大會與流力學會年會合辦，為擴大論文海報參賽題目範圍，除傳統計算流力相關主題外，主辦單位鼓勵流體力學各個領域(包括實驗與理論)的題目參賽。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            2.
            獎項方面，除原有針對計算流力的獎項(由航太學會頒發)外，亦將新增兩個針對一般流力領域(不限實驗，理論或計算)的論文獎項。原有計算流力的獎項，前三名亦提供獎金，分別為新台幣8,000元（第一名）、5,000元（第二名）、及3,000元（第三名）。而本次額外新增的獎項，亦提供獎金，為新台幣8,000元（第一名）、及5,000（第二名），促進活動推廣。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            3.
            <span className="text-red-500">本競賽（海報論文競賽）<strong>分別具有</strong>論文及海報，共兩個的競賽項目</span>。參與者須於規定評分時間中由一代表作者在海報旁負責回答問題與解說。若未出席，則視同放棄競賽。
          </p>
        </div>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            4.
            <span className="text-red-500">參與論文競賽者</span>所繳交的研究內容，需提供：(1)摘要、(2)論文全文、及(3)海報。<span className="text-red-500">參與海報競賽者</span>所繳交的研究內容，僅需提供摘要及海報即可。若缺漏繳交，則視同放棄參賽資格。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            5. 得獎者，大會將提供獎狀及獎金作為鼓勵。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            6. 摘要、論文全文、及海報的撰寫文字，中英文皆可。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            7. 摘要投稿格式，以兩頁內為限，最終會收錄至會議手冊之中。
            <a
              href="/NCFD_abstract_templete.docx"
              className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400"
              download
              // download={"投稿格式.txt"}
            >
              按我下載範例檔案
            </a>
            。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            8. 論文全文投稿格式，以十頁內為限，內容將參與論文競賽。
            <a
              className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400"
              href="/NCFD_full_paper_templete_mandarin.docx"
              download
            >
              按我下載範例檔案（中文）
            </a>
            、
            <a
              className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400"
              href="/NCFD_full_paper_templete.docx"
              download
            >
              按我下載範例檔案（英文）
            </a>
            。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            9.海報競賽投稿格式，
            <span className="text-red-500">無限制</span>
            惟需注意兩點。第一，需張貼大會標誌，
            <a
              className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400"
              href="/LOGO.psd"
              download
            >
              按我下載
            </a>
            。第二，在右上方註明清楚海報編號。內文則請作者自行排版，內容則將參與海報競賽，並於活動當天展出。（會場展板大小
            90cm X 150 cm，一個展版將規劃放置一幅海報。）
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            10.
            海報需自行印製，並提早帶至會場場佈。場佈時間為第一日中午前，撤場時間為第二日中午過後。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            11. 海報參與者，需於海報展覽期間（評分時間），於競賽海報前負責回答問題及解說。
          </p>
        </div>
      </li>
      <li>
        <div className="mb-2 flex flex-wrap lg:mb-4 xl:mb-6">
          <p className="mr-2 font-normal">12. 論文海報競賽主題為下(但不限於)</p>
        </div>
        <div className="-mx-2 mb-6 lg:mb-8 xl:mb-10">
          <PostContent />
          <PostContentMobile />
        </div>
      </li>
    </ul>
  );
};

export default Compet;
