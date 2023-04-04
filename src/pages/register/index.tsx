import React from "react";

import AppLayout from "@/component/layouts/AppLayout";
import Title from "@/component/utils/Title";
import RegisterPage from "@/view/register";

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
      <RegisterPage />
    </section>
  );
};

Register.Layout = AppLayout;
Register.displayName = "註冊與報名";

export default Register;
