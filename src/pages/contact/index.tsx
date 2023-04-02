import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import Title from "@/component/utils/Title";

const Contact = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <div>
        <Title as="h3">會議聯絡人</Title>
        <ul className="space-y-2 pb-4 text-base sm:text-lg lg:text-xl">
          <li>
            國立臺灣大學應用力學研究所 <p>周逸儒教授</p>
          </li>
          <li>
            <a
              className="block w-full hover:text-gray-300/80 hover:underline hover:decoration-cyan-300 hover:underline-offset-2"
              href="mailto:yjchou@ntu.edu.tw"
            >
              Email： yjchou@ntu.edu.tw
            </a>
          </li>
          <li>
            <a
              className="flex items-center not-italic hover:text-gray-300/80 hover:underline hover:decoration-cyan-300 hover:underline-offset-2"
              href="tel:02-3366-5689"
            >
              電話 : (02)3366-5068
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Title as="h3">會議助理</Title>
        <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
          <li>姓名：鄭哲榮</li>
          <li>
            <a
              className="block w-full hover:text-gray-300/80 hover:underline  hover:decoration-cyan-300 hover:underline-offset-2"
              href="mailto:ncfd2023@gmail.com"
            >
              Email： ncfd2023@gmail.com
            </a>
          </li>
          <li>
            <a
              className="flex items-center not-italic hover:text-gray-300/80 hover:underline hover:decoration-cyan-300 hover:underline-offset-2"
              href="tel:02-3366-5689"
            >
              電話 : (02)3366-5689
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

Contact.Layout = AppLayout;
Contact.displayName = "聯絡資訊";

export default Contact;
