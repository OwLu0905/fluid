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
import Link from "next/link";
const Speech = () => {
  const { query } = useRouter();
  const { sub } = query;

  // if (typeof window !== "undefined") return <></>;
  const seoTitle =
    sub !== undefined && +sub === 1
      ? "大會演講1 蕭述三"
      : sub !== undefined && +sub === 2
        ? "大會演講2 Kunihiko Taira"
        : "大會演講";

  return (
    <>
      <NextSEO
        title={seoTitle}
        description="第28屆全國計算流體力學學術研討會註冊與報名"
      />
      <section
        className="mx-auto block w-full text-gray-300/80"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div id="abstract" className="mb-6 lg:ml-4 lg:mb-8 xl:mb-10">
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
              {sub && +sub === 1 && (
                <ul className="mt-12 flex justify-center space-x-2 hover:cursor-pointer">
                  <li className="">
                    <Link
                      className="rounded-lg bg-teal-200/20 px-4 py-2 text-teal-400/60 hover:bg-teal-300/20 hover:text-teal-500"
                      href={speechSub[1].abstract}
                    >
                      大會演講2
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="rounded-lg bg-teal-200/20 px-4 py-2 text-teal-400/60 hover:bg-teal-300/20 hover:text-teal-500"
                      href={"/speech"}
                    >
                      大會演講
                    </Link>
                  </li>
                </ul>
              )}
              {sub && +sub === 2 && (
                <ul className="mt-12 flex justify-center space-x-2 hover:cursor-pointer">
                  <li className="">
                    <Link
                      className="rounded-lg bg-teal-200/20 px-4 py-2 text-teal-400/60 hover:bg-teal-300/20 hover:text-teal-500"
                      href={speechSub[0].abstract}
                    >
                      大會演講1
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="rounded-lg bg-teal-200/20 px-4 py-2 text-teal-400/60 hover:bg-teal-300/20 hover:text-teal-500"
                      href={"/speech"}
                    >
                      大會演講
                    </Link>
                  </li>
                </ul>
              )}
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
