import Title from "@/component/utils/Title";
import classNames from "classnames";
import React from "react";
import FeeTable from "./FeeTable";

const Fee = () => {
  const today = new Date().toISOString();
  const early = new Date("2023-06-03").toISOString();
  const normal = new Date("2023-06-27").toISOString();
  return (
    <>
      <div className="mb-6">
        <Title
          as="h3"
          className="flex items-center before:mr-2 before:content-['•']"
        >
          大會註冊費
          <span className="text-lg sm:text-2xl lg:text-3xl">(劃撥報名)</span>
        </Title>

        <ul className="mb-6 space-y-4 text-lg md:text-lg lg:text-2xl">
          <li>
            <div className="flex flex-wrap">
              <p className="mr-2 font-normal">
                本研討報名繳費統一採郵政劃撥方式匯款
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-wrap">
              <p className="mr-2 font-normal">劃撥帳號 : xxxxxxxx</p>
              <p className="mr-2 font-normal">戶名 : xxxxxxxxxx</p>
            </div>
          </li>

          <li>
            <div className="flex flex-wrap">
              <p className="mr-2 font-normal">
                請於通訊欄註明：2023NCFD報名費、姓名、論文編號、收據抬頭(視需要)。
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap space-y-2">
              <p className="mr-2 font-normal">
                註一：註冊費用早鳥優惠截止日：6月26日。
              </p>
              <p className="mr-2 font-normal">
                註二：經繳費報名後恕不退費，收據於大會報到時領取。
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-6 flex w-full justify-center">
        <FeeTable />
      </div>
    </>
  );
};

export default Fee;
