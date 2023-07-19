import Title from "@/component/utils/Title";
import classNames from "classnames";
import React, { useState } from "react";
import FeeTable from "./FeeTable";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/20/solid";

const Fee = () => {
  const [isCopy, setIsCopy] = useState(false);
  const bancAccount = "19826163";
  async function clickToCopyHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      // const buttonText = e.currentTarget.innerText;
      // await navigator.clipboard.writeText(buttonText);
      await navigator.clipboard.writeText(bancAccount);
      setIsCopy(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
    } catch (err) {
      console.log(err);
    } finally {
      setIsCopy(false);
    }
  }
  return (
    <>
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <Title as="h3" className="flex items-center before:mr-2">
          大會註冊費
          <span className="text-lg sm:text-2xl lg:text-3xl">(劃撥報名)</span>
        </Title>

        <ul className="mb-6 space-y-4 text-base sm:text-lg md:text-xl lg:ml-4 lg:mb-8 xl:mb-10 xl:text-2xl">
          <li>
            <div className="flex flex-wrap text-rose-700">
              <p className="font-normal">新增匯款方式(網路銀行)，流程如下：</p>
            </div>
          </li>
          <li>
            <div className="flex flex-wrap">
              <p className="mr-2 font-normal">1. 登入行動郵局</p>
            </div>
          </li>

          <li>
            <p className="mr-2 font-normal">
              2. 轉入銀行選擇:
              <span className="mx-2 font-bold text-gray-200/80">
                700中華郵政
              </span>
            </p>
          </li>

          <li>
            <div
              className={classNames(
                "mr-2 flex w-full flex-wrap items-center font-normal"
              )}
            >
              3. 輸入劃撥帳號:
              <button
                type="button"
                onClick={clickToCopyHandler}
                className={classNames("mx-2 font-bold text-gray-200/80", {
                  "border-none ring-0 ring-cyan-600 ring-offset-2 ring-offset-cyan-600":
                    isCopy,
                })}
              >
                19826163
              </button>
              {!isCopy && (
                <span
                  onClick={clickToCopyHandler}
                  className="flex cursor-pointer items-center pr-2 text-sm text-slate-500/80"
                >
                  <ClipboardIcon className="mx-1 h-4 w-4" /> 複製
                </span>
              )}
              {isCopy && (
                <span className="flex items-center text-sm text-cyan-600 ">
                  <CheckIcon className="mr-1 h-4 w-4 rounded-full bg-cyan-600 stroke-2 p-0.5 text-xl font-medium  text-gray-300" />
                  <span>已複製到剪貼簿</span>
                </span>
              )}
            </div>
          </li>

          <li>
            <div className="flex flex-wrap">
              <p className="mr-2 font-normal">4. 輸入備註: 麻煩填寫姓名</p>
            </div>
          </li>
        </ul>

        <ul className="mb-6 space-y-4 text-base sm:text-lg md:text-xl lg:ml-4 lg:mb-8 xl:mb-10 xl:text-2xl">
          <li>
            <div className="flex flex-wrap">
              <p className="font-normal">
                本研討報名繳費統一採郵政劃撥方式匯款
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-wrap">
              <p className="mr-2 font-normal">劃撥帳號 : 19826163</p>
              <p className="font-normal">戶名 : 中華民國航空太空學會</p>
            </div>
          </li>

          <li>
            <div className="flex flex-wrap">
              <p className="mr-2 font-normal">
                請於通訊欄註明：2023NCFD報名費、姓名、收據抬頭(視需要)。
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-6 flex w-full justify-center lg:ml-4 lg:mb-8 xl:mb-10">
        <FeeTable />
      </div>
      <div>
        <ul className="mb-6 space-y-4 indent-2 text-base sm:text-lg md:indent-4 md:text-xl lg:mb-8 lg:ml-4 xl:mb-10 xl:text-2xl">
          <div className="flex flex-col flex-wrap space-y-2">
            <p className="mr-2 font-normal">
              註一：註冊費用早鳥優惠截止日：<del>6月19日</del>{" "}
              <span className="font-bold text-rose-700">7月06日</span>。
            </p>
            <p className="mr-2 font-normal">
              註二：經繳費報名後恕不退費，收據於大會報到時領取。
            </p>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Fee;
