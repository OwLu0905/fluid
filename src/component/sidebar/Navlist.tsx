import Link from "next/link";
import React from "react";

// <li className="peer/home hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-gray-300 hover:bg-sky-400/10">
const Navlist = () => {
  return (
    <ul className="space-y-4 text-sm md:text-lg">
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-gray-300 hover:bg-sky-400/10">
        <Link className="block w-full" href="/" scroll={false}>
          Home
        </Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-gray-300 hover:bg-sky-400/10">
        <Link className="block w-full" href="/topic" scroll={false}>
          Topic
        </Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link className="block w-full" href="/submissions" scroll={false}>
          Submission
        </Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link className="block w-full" href="/">
          Important
        </Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link className="block w-full" href="/">
          Dates
        </Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link className="block w-full" href="/">
          Registration
        </Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link className="block w-full" href="/">
          Free
        </Link>
      </li>
    </ul>
  );
};

export default Navlist;
