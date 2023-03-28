

import React from "react";

import AppLayout from "@/component/layouts/AppLayout";

const Contact = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <h3 className="font-semibold text-base sm:text-2xl py-2">會議聯絡人：</h3>
      <ul className="text-base sm:text-lg lg:text-xl space-y-2 pb-4">
        <li>
          國立臺灣大學應用力學研究所 周逸儒教授
        </li>
        <li><a className="hover:text-gray-300/80 hover:underline w-full block hover:underline-offset-2 hover:decoration-cyan-300" href="mailto:yjchou@ntu.edu.tw">Email： yjchou@ntu.edu.tw</a></li>
        <li>
          <a className="flex items-center not-italic hover:text-gray-300/80 hover:underline hover:underline-offset-2 hover:decoration-cyan-300" href="tel:02-3366-5689">電話 : (02)3366-5068</a>
        </li>
      </ul>
      <h3 className="font-semibold text-base sm:text-2xl py-2">會議助理：</h3>
      <ul className="text-base sm:text-lg lg:text-xl space-y-2">
        <li>
          姓名：鄭哲榮
        </li>
        <li><a className="hover:text-gray-300/80 hover:underline w-full block  hover:underline-offset-2 hover:decoration-cyan-300" href="mailto:ncfd2023@gmail.com">Email： ncfd2023@gmail.com</a></li>
        <li>
          <a className="flex items-center not-italic hover:text-gray-300/80 hover:underline hover:underline-offset-2 hover:decoration-cyan-300" href="tel:02-3366-5689">電話 : (02)3366-5689</a>
        </li>
      </ul>
    </section>
  );
};

Contact.Layout = AppLayout;
Contact.displayName = "聯絡資訊";

export default Contact;
