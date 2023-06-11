import AppLayout from "@/component/layouts/AppLayout";
import NextSEO from "@/component/layouts/NextSEO";
import Card from "@/component/ui/Card";
import CardContent from "@/component/ui/CardContent";
import Title from "@/component/utils/Title";
import Abstract from "@/view/speech/Abstract";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

import speechSub from "@/data/speechSub.json" assert { type: "json" };
import CardFooter from "@/component/ui/CardFooter";
import Info from "@/view/speech/Info";
const Speech = () => {
  const { query } = useRouter();
  const { sub } = query;

  // if (typeof window !== "undefined") return <></>;
  return (
    <>
      <NextSEO
        title="大會演講"
        description="第28屆全國計算流體力學學術研討會註冊與報名"
      />
      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
          {sub === undefined ? (
            speechSub.map((e) => {
              return (
                <Fragment key={e.id}>
                  <Title as="h2">{e.category}</Title>
                  <Card>
                    <CardContent data={e}>
                      <CardFooter data={e} />
                    </CardContent>
                  </Card>
                </Fragment>
              );
            })
          ) : (
            <Fragment key={speechSub[(+sub - 1) as number].id}>
              <Title as="h2">{speechSub[(+sub - 1) as number].category}</Title>
              <Card>
                <CardContent data={speechSub[(+sub - 1) as number]} />
                <Abstract sub={sub as string} />
              </Card>
              {/* <Card>
                <Abstract sub={sub as string} />
              </Card> */}
              <Card>
                <Info sub={sub as string} />
              </Card>
            </Fragment>
          )}
        </div>
      </section>
    </>
  );
};

Speech.Layout = AppLayout;
Speech.displayName = "大會演講";

export default Speech;
