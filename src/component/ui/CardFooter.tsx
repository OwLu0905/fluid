import Link from "next/link";
import React from "react";
import { IData } from "./CardContent";

const CardFooter = (props: { data: IData }) => {
  const { data } = props;
  return (
    <>
      <ul className="-ml-2 hidden space-x-4 text-base xs:flex md:text-lg xl:text-xl">
        <li className="">
          <Link
            href={data.abstract}
            scroll={false}
            className="flex items-center font-bold hover:text-sky-300/80"
          >
            {/* <span className="rounded-md px-4 py-1 bg-sky-700/80 hover:bg-sky-700 text-stone-300/80 hover:text-stone-300/90 hover:scale-110 transition-all duration-300 hovber:bg-sky-700"> */}
            <span className="hovber:bg-sky-700 rounded-md bg-sky-700/80 px-4 py-1 text-stone-300/80 transition-all duration-300 hover:scale-110 hover:bg-sky-700 hover:text-stone-300/90">
              摘要
            </span>
          </Link>
        </li>
        <li className="grow">
          <Link
            href={data.descript}
            scroll={false}
            className="flex items-center font-bold "
          >
            <span className="hovber:bg-sky-700 rounded-md bg-sky-700/80 px-4 py-1 text-stone-300/80 transition-all duration-300 hover:scale-110 hover:bg-sky-700 hover:text-stone-300/90">
              介紹
            </span>
          </Link>
        </li>
      </ul>
      <ul className="mt-4 flex space-x-4 text-base xs:-ml-0 xs:hidden">
        <li className="">
          <Link
            href={data.abstract}
            scroll={false}
            className="flex items-center font-bold hover:text-sky-300/80"
          >
            <span className="rounded-md bg-sky-700/80 px-4 py-1 text-stone-300/80">
              摘要
            </span>
          </Link>
        </li>
        <li className="grow">
          <Link
            href={data.descript}
            scroll={false}
            className="flex items-center font-bold "
          >
            <span className="rounded-md bg-sky-700/80 px-4 py-1 text-stone-300/80">
              介紹
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default CardFooter;
