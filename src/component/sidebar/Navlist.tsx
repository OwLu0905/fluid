import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

// 主頁、最新消息、議程、註冊與報名、海報論文競賽、委員會、聯絡資訊、交通資訊

const menuls = [
  { name: "主頁", href: "/" },
  { name: "最新消息", href: "/news" },
  { name: "議程", href: "/agenda" },
  { name: "大會演講", href: "/speech" },
  { name: "論壇發表", href: "/presentation" },
  { name: "註冊與報名", href: "/register" },
  { name: "海報論文競賽", href: "/poster" },
  { name: "流體力學之美展覽", href: "/exhibition" },
  { name: "委員會", href: "/committee" },
  { name: "聯絡資訊", href: "/contact" },
  { name: "交通資訊", href: "/traffic" },
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
    <ul className="space-y-4">
      {menuls.map((item) => {
        return (
          <li
            key={item.name}
            className={`rounded-lg font-semibold hover:bg-gray-300/20 sm:text-lg md:text-xl xl:text-2xl ${
              navActiveLink(item.href)
                ? "rounded-lg bg-gray-500/20 font-semibold text-sky-300 transition-all duration-300 ease-in-out hover:border-none hover:bg-gray-100/40 active:bg-gray-300/60"
                : ""
            }`}
          >
            <Link
              className={`block w-full px-4 py-2  ${
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
