import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import Title from "@/component/utils/Title";

const table = [
  ["一般人士", "4000", "4500"],
  ["學生身分", "2000", "2500"],
  ["隨行眷屬", "1200", "1200"],
];

const Register = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <Title as="span">
        <p className="text-gray-400 before:mr-2 before:content-['•']">
          (內容未定案)
        </p>
      </Title>
      <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
        <li>
          <h2 className="py-2 text-base font-semibold sm:text-2xl">
            大會註冊費(劃撥報名)
          </h2>
          <p>本研討報名繳費統一採郵政劃撥方式匯款</p>
          <p>劃撥帳號 : xxxxxxxx</p>
          <p>戶名 : xxxxxxxxxx</p>
          <p className="font-bold">
            請於通訊欄註明：2023NCFD報名費、姓名、論文編號、收據抬頭(視需要)。
          </p>

          <table className="border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="w-4/12 border border-slate-300 p-4 text-left font-semibold text-slate-900 text-cyan-300/80 dark:border-slate-600 dark:text-slate-200 sm:text-2xl">
                  身分/費用
                </th>
                <th className="w-4/12 border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">
                  註冊費
                  <br />
                  早鳥優惠(6/26之前)
                </th>
                <th className="w-4/12 border border-slate-300 p-4 text-left font-semibold text-slate-900 text-cyan-300/80 dark:border-slate-600 dark:text-slate-200 sm:text-2xl">
                  註冊費
                  <br />
                  (6月27日之後)
                </th>
              </tr>
            </thead>
            <tbody>
              {table.map((item) => {
                return (
                  <tr key={item[0] + item[1]}>
                    <td className="border border-slate-300 p-4 text-slate-500 text-cyan-300/80 dark:border-slate-700 dark:text-slate-400 sm:text-2xl">
                      {item[0]}
                    </td>
                    <td className="border border-slate-300 p-4 text-slate-500 text-cyan-300/80 dark:border-slate-700 dark:text-slate-400 sm:text-2xl">
                      {item[1]}
                    </td>
                    <td className="border border-slate-300 p-4 text-slate-500 text-cyan-300/80 dark:border-slate-700 dark:text-slate-400 sm:text-2xl">
                      {item[2]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p>註一：註冊費用早鳥優惠截止日：6月26日。</p>
          <p>註二：經繳費報名後恕不退費，收據於大會報到時領取。</p>
        </li>

        <li>
          <h2 className="py-2 text-base font-semibold sm:text-2xl">報名方式</h2>
          <ul className="list-none space-y-6">
            <li>
              <p>
                本研討採用Google表單來提交線上報名表。表單需上傳郵政劃撥的收據電子檔，麻煩匯款完成後再掃瞄或拍照檔案上傳，上傳檔案有檔案大小的限制，請注意檔案大小。
              </p>
            </li>
            <li className="space-y-2">
              <p>2. 線上報名表，表單連結如下：</p>
              <ul className="list-none space-y-2 indent-2">
                <li className="">
                  若您的身份為一般人士，請按此報名（6/26前）、請按此報名（6/27後）。
                </li>
                <li>
                  若您的身份為學生，請按此報名（6/26前）、請按此報名（6/27後）。
                </li>
                <li>
                  若您的身份為隨行眷屬，註冊費用，將與會議參與人員合併填寫一份。只要確保最後上傳的劃撥收據金額總數正確即可。
                </li>
              </ul>
            </li>
            <li>
              <p>3. 報名流程。</p>
              <ul>
                <li>（1）若您的身份為一般人士，請直接填寫線上報名表即可。</li>
                <li>
                  （2）若您的身份為學生且參與論文海報競賽。請提交摘要後，並獲得論文編號後再填寫線上報名表即可。請按此提交摘要，摘要提交的表單，亦列於海報論文競賽，再麻煩在網頁中確認。
                </li>
                <li>
                  （3）若您的身份為學生且僅參與會議。請直接填寫線上報名表即可。
                </li>
              </ul>
            </li>
            <li>
              <p>4. 報名完成的判讀。</p>
              <ul>
                <li>
                  （1）提交表單完成，經大會確認上傳檔案與金額無誤後，則完成報名。人工審核的作業時間，在提交表單後將於兩週內確認完畢。待確認完畢後，大會將以e-mail告知繳費完成。
                </li>
                <li>
                  （2）若金額有誤，大會將主動寄信到您所留下的信箱中，再麻煩於提交表單後兩週內注意信件。
                </li>
              </ul>
            </li>
            <li>
              <p>5. 報名完成後，惟仍請保留郵政劃撥收據，以供查詢。</p>
            </li>
            <li>
              <p>
                6.
                每篇論文，必須有一人報名，7月31日前未完成繳費者，一律視為現場報名。
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

Register.Layout = AppLayout;
Register.displayName = "註冊與報名";

export default Register;
