import React from "react";

const Procedure = () => {
  return (
    <ul className="space-y-4 text-lg md:text-lg lg:text-2xl">
      <li>
        <div className="flex flex-wrap">
          <div className="mr-2 font-normal">
            <p>1. 請於6月19日前，請由Google表單提交(a)摘要與(b)論文全文。</p>
            <a className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400">
              請按我提交表單
            </a>
            。
          </div>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            2. 大會將於7月17日，寄送審查通知至您登記的信箱。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            3. 請於8月7日前，由Google表單提交海報檔案，方便大會歸檔所用。
            <a className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400">
              請按我提交海報
            </a>
            。
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Procedure;
