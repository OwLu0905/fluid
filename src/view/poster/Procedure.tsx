import LinkIcon from "@/component/icon/Link";
import Link from "next/link";
import React from "react";

const Procedure = () => {
  return (
    <ul className="space-y-4 text-lg md:text-lg lg:text-2xl">
      <li>
        <div className="flex flex-wrap font-normal">
          <p>
            1. 請於6月19日前，請由Google表單提交
            <strong>(a)摘要</strong>與 <strong>(b)論文全文</strong>。
          </p>
          <Link
            rel="canonical"
            title="海報論文競賽提交表單"
            href="https://forms.gle/q925J7LqMnafcPac9"
            target="_blank"
            className="flex items-center text-yellow-300/90 hover:text-yellow-300"
          >
            <LinkIcon className="h-4 w-4" />
            請按我提交表單
          </Link>
          。
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            2. 大會於收件截止後五個工作天內，會寄送論文編號至您所登記的信箱。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            3. 大會將於7月17日，寄送審查通知至您登記的信箱。
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-wrap">
          <p className="mr-2 font-normal">
            4. 請於8月7日前，由Google表單提交海報檔案，方便大會歸檔所用。{" "}
          </p>
          <Link
            rel="canonical"
            title="海報論文競賽提交海報"
            href="https://forms.gle/dsCumWWSuVSSgqUX8"
            target="_blank"
            className="flex items-center text-yellow-300/90 hover:text-yellow-300"
          >
            <LinkIcon className="h-4 w-4" />
            請按我提交海報
          </Link>
          。
          {/* <a className="cursor-pointer font-light text-blue-500 underline hover:text-cyan-400">
              請按我提交海報
            </a> */}
        </div>
      </li>
    </ul>
  );
};

export default Procedure;
