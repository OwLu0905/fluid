import { LinkIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import Title from "../utils/Title";
import Link from "next/link";
// （中央大學機械工程學系/）
//(Department of Mechanical and Aerospace Engineering University of California, Los Angeles)
const speech = [
  {
    id: 0,
    category: "大會演講1",
    name: "蕭述三",
    sub: "中央大學機械工程學系",
    title: "Mechanics of Powder Flows in Industrial Applications",
    img: "/speech/image1.jpg",
    abstract: "",
    descript: "",
  },
  {
    id: 1,
    category: "大會演講２",
    name: "Kunihiko Taira",
    sub: "Department of Mechanical and Aerospace Engineering University of California, Los Angeles",
    title: "Data-Driven Analysis and Control of Extreme Aerodynamic Flows",
    img: "/speech/image2.jpg",
    abstract: "",
    descript: "",
  },
];
// <div className="flex flex-col items-stretch lg:flex-row lg:space-x-4">
const Card = () => {
  return (
    <>
      {speech.map((e) => {
        return (
          <Fragment key={e.id}>
            <Title as="h2">{e.category}</Title>
            <div className="group mb-4 hidden h-full rounded-lg bg-gradient-to-br from-gray-700 via-gray-700/30 to-gray-700 px-8 py-6 xs:flex">
              <div className="mx-4 flex h-[200px] w-[200px] items-center justify-center overflow-hidden">
                <img
                  width={100}
                  height={100}
                  src={e.img}
                  className="mx-auto flex w-full items-center rounded-sm object-scale-down transition-all duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex h-full w-full flex-col justify-between rounded-md px-4 py-2">
                <h3 className="py-2 text-2xl font-medium">{e.name}</h3>
                <p className="mb-6 text-lg  font-medium text-gray-400">
                  {e.sub}
                </p>

                <h4 className="mb-6 text-xl font-normal italic">
                  <span className="text-xl not-italic">題目：</span>

                  <span className="text-gray-400">{e.title}</span>
                </h4>

                <ul className="-ml-2 flex text-base">
                  <li className="">
                    <Link
                      href="/speech"
                      className="flex items-center font-bold hover:text-sky-300/80"
                    >
                      <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
                        摘要
                      </span>
                    </Link>
                  </li>
                  <li className="grow">
                    <Link
                      href="/speech"
                      className="flex items-center font-bold "
                    >
                      <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
                        介紹
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group mb-4 flex h-full flex-col rounded-lg bg-gradient-to-br from-gray-700 via-gray-700/30 to-gray-700 px-4 py-6 xs:hidden xs:px-4 xs:py-8">
              <div className="flex flex-col items-center xs:flex-row">
                <div className="mb-4 flex w-[60%] items-center justify-center overflow-hidden xs:w-1/3 xs:px-4">
                  <img
                    width={100}
                    height={100}
                    src={e.img}
                    className="flex w-full items-center rounded-sm transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="w-full xs:w-2/3">
                  <h3 className="py-2 text-2xl font-medium">{e.name}</h3>
                  <p className="mb-4 whitespace-pre-line text-base font-medium text-gray-400 xs:mb-6">
                    {e.sub}
                  </p>
                </div>
              </div>

              <h4 className="text-base font-normal italic xs:mb-4 xs:px-4 xs:text-xl">
                <span className="text-base not-italic">題目：</span>
                <br />

                <span className="text-gray-400 xs:text-xl">{e.title}</span>
              </h4>

              <ul className="my-4 -ml-4 flex text-base xs:-ml-0">
                <li className="">
                  <Link
                    href="/speech"
                    className="flex items-center font-bold hover:text-sky-300/80"
                  >
                    <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
                      摘要
                    </span>
                  </Link>
                </li>
                <li className="grow">
                  <Link href="/speech" className="flex items-center font-bold ">
                    <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
                      介紹
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default Card;
