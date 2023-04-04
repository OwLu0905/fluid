import Title from "@/component/utils/Title";
import React from "react";

const RegisterMethod = () => {
  return (
    <>
      <Title
        as="h2"
        className="flex items-center before:mr-2 before:content-['•']"
      >
        報名方式
      </Title>
      <ol className="mb-6 list-inside list-decimal space-y-4 text-lg md:indent-2 md:text-lg lg:text-2xl">
        <li className="font-normal">
          本研討採用google表單來提交線上報名表。（表單需上傳郵政劃撥的收據電子檔，麻煩匯款完成後再掃瞄或拍照檔案上傳，上傳檔案有檔案大小的限制，請注意檔案大小。）
        </li>

        <li className="font-normal">
          線上報名表，表單連結如下：
          <ol className="mt-2 space-y-1 md:space-y-2">
            <li>（1）報名表單，請按此報名（6/26前）、請按此報名（6/27後）。</li>
            <li>
              （2）若您的身份為隨行眷屬，註冊費用，將與會議參與人員合併填寫一份。只要確保最後上傳的劃撥收據金額總數正確即可。
            </li>
          </ol>
        </li>
        <li className="font-normal">
          報名流程。
          <ol className="mt-2 space-y-1 md:space-y-2">
            <li>（1）若您的身份為一般人士，請直接填寫線上報名表即可。</li>
            <li>
              （2）若您的身份為學生且參與論文海報競賽，除了線上填寫報名表之外，需於海報論文競賽的網頁列表之中，填寫表單並上傳(a)摘要、(b)論文全文。細則請參照海報論文競賽的分頁。
            </li>
            <li>
              （3）若您的身份為學生且僅參與會議。請直接填寫線上報名表即可。
            </li>
          </ol>
        </li>
        <li className="font-normal">
          報名完成的判讀。
          <ol className="mt-2 space-y-1 md:space-y-2">
            <li>
              （1）提交表單完成，經大會確認上傳檔案與金額無誤後，則完成報名。人工審核的作業時間，在提交表單後將於兩週內確認完畢。待確認完畢後，大會將以e-mail告知繳費完成。
            </li>
            <li>
              （2）若金額有誤，大會將主動寄信到您所留下的信箱中，再麻煩於提交表單後兩週內注意信件。
            </li>
          </ol>
        </li>
        <li className="font-normal">
          報名完成後，惟仍請保留郵政劃撥收據，以供查詢。
        </li>
        <li className="font-normal">
          每篇論文，必須有一人報名，7月31日前未完成繳費者，一律視為現場報名。
        </li>
      </ol>
    </>
  );
};

export default RegisterMethod;
