import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

// 主頁、最新消息、議程、註冊與報名、海報論文競賽、委員會、聯絡資訊、交通資訊

const menuls = [
  { name: "主頁", href: "/" },
  { name: "最新消息", href: "/news" },
  { name: "議程", href: "/agenda" },
  { name: "註冊與報名", href: "/a" },
  { name: "海報論文競賽", href: "/b" },
  { name: "委員會", href: "/c" },
  { name: "聯絡資訊", href: "/d" },
  { name: "交通資訊", href: "/e" },
];
// <li className="peer/home hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-gray-300 hover:bg-sky-400/10">
const Navlist = () => {
  const router = useRouter();
  const { pathname } = router;
  const navActiveLink = useCallback(
    (link: string) => {
      return pathname === link;
    },
    [pathname]
  );
  return (
    <ul className="space-y-4 text-sm md:text-lg">
      {menuls.map((item) => {
        return (
          <li
            key={item.name}
            className={`"bg-gray-500/20  hover:bg-gray-300/20 rounded-lg font-semibold  ${
              navActiveLink(item.href)
                ? "active:bg-gray-300/60 bg-gray-500/20 text-sky-300 transition-all ease-in-out duration-300 rounded-lg hover:bg-gray-100/40 hover:border-none font-semibold"
                : ""
            }`}
          >
            <Link
              className={`px-4 py-2 block w-full  ${
                navActiveLink(item.href) ? "px-8 py-2" : ""
              }`}
              href={item.href}
              scroll={false}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlist;
