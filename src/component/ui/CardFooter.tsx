import Link from "next/link";
import React from "react";
import { IData } from "./CardContent";

const CardFooter = (props: { data: IData }) => {
  const { data } = props;
  return (
    <>
      <ul className="-ml-2 hidden text-base xs:flex">
        <li className="">
          <Link
            href={data.abstract}
            scroll={false}
            className="flex items-center font-bold hover:text-sky-300/80"
          >
            <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
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
            <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
              介紹
            </span>
          </Link>
        </li>
      </ul>
      <ul className="my-4 -ml-4 flex text-base xs:-ml-0 xs:hidden">
        <li className="">
          <Link
            href={data.abstract}
            scroll={false}
            className="flex items-center font-bold hover:text-sky-300/80"
          >
            <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
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
            <span className="rounded-md px-4 py-1 text-blue-400/80 hover:bg-blue-400/20">
              介紹
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default CardFooter;
