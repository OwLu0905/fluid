import React from "react";

const Compet = () => {
  return (
    <ul className="space-y-4 text-lg md:text-lg lg:text-2xl">
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            1.
            本競賽中，包含兩個項目，分別為(a)論文競賽及(b)海報競賽。其中，兩個競賽的評分將各自獨立進行。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            2.
            參與競賽者所繳交的研究內容，需提供：(1)摘要、(2)論文全文、及(3)海報。其中，(2)及(3)則將分別自動納入各自獨立的競賽項目之中。若缺漏繳交，則視同放棄參賽資格。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            3. 得獎者，大會將提供獎狀及獎金作為鼓勵。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            4. 摘要、論文全文、及海報的撰寫文字，中英文皆可。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            5. 摘要投稿格式，以兩頁內為限，最終會收錄至會議手冊之中。
            <a
              href="/template.txt"
              className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400"
              download={"投稿格式.txt"}
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
            6. 論文全文投稿格式，以十頁內為限，內容將參與論文競賽。
            <a className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400">
              按我下載範例檔案（中文）
            </a>
            、
            <a className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400">
              按我下載範例檔案（英文）
            </a>
            。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            7. 海報競賽投稿格式僅需在右上方註明清楚海報編號即可，其餘皆<span className="text-red-500" >無限制</span>，內文則請作者自行排版，內容則將參與海報競賽，並於活動當天展出。（會場展板大小 90cm X 150 cm，一個展版將規劃放置一幅海報，尺寸最大為A0。）
            {/* <a className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400">
              按我下載.ppt模板
            </a> */}
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            8. 海報需自行印製，並提早帶至會場場佈。場佈時間為第一日中午前，撤場時間為第二日中午過後。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            9. 海報參與者，需於海報展覽期間，於競賽海報前。若未出席，則視同放棄競賽。
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Compet;
