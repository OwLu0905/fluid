import Link from "next/link";
import React from "react";

const Navlist = () => {
  return (
    <ul className="space-y-4 text-sm md:text-lg">
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-gray-300 hover:bg-sky-400/10">
        <Link as="" href="/">
          Home
        </Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-gray-300 hover:bg-sky-400/10">
        <Link href="/topics">Topic</Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link href="/">Submission</Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link href="/">Important</Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link href="/">Dates</Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link href="/">Registration</Link>
      </li>
      <li className="hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-white hover:bg-sky-400/10">
        <Link href="/">Free</Link>
      </li>
    </ul>
  );
};

export default Navlist;
