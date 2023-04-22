import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import Title from "@/component/utils/Title";
import RegisterPage from "@/view/register";
import NextSEO from "@/component/layouts/NextSEO";

const Register = () => {
  return (
    <>
      <NextSEO
        title="註冊與報名"
        description="第28屆全國計算流體力學學術研討會註冊與報名"
      />

      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/* <Title as="span">
          <p className="text-gray-400 before:mr-2 before:content-['•']">
            (內容未定案)
          </p>
        </Title> */}
        <RegisterPage />
      </section>
    </>
  );
};

Register.Layout = AppLayout;
Register.displayName = "註冊與報名";

export default Register;
