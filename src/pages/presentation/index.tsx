import AppLayout from "@/component/layouts/AppLayout";
import React from "react";

const Presentation = () => {
  return (
    <section className="mx-auto block w-full text-gray-300/80">
      <h3 className="py-2 text-base font-semibold sm:text-2xl">建置中</h3>
    </section>
  );
};

Presentation.Layout = AppLayout;
Presentation.displayName = "論壇發表";

export default Presentation;
