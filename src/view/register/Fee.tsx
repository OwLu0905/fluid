import Title from "@/component/utils/Title";
import classNames from "classnames";
import React from "react";
import FeeTable from "./FeeTable";

const Fee = () => {
  return (
    <>
      <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
        <Title as="h3" className="flex items-center before:mr-2">
          大會註冊費
          <span className="text-lg sm:text-2xl lg:text-3xl">(劃撥報名)</span>
        </Title>

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
              <p className="font-normal">劃撥帳號 : 19826163</p>
              <p className="mr-2 font-normal">戶名 : 中華民國航空太空學會</p>
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
              註一：註冊費用早鳥優惠截止日：6月19日。
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
