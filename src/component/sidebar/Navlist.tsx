import { ChevronRightIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useCallback, useEffect } from "react";

// 主頁、最新消息、議程、註冊與報名、海報論文競賽、委員會、聯絡資訊、交通資訊

interface IMenuList {
  id: number;
  name: string;
  href: string;
  subMenu?: IMenuList[];
}

const menuls: IMenuList[] = [
  { id: 1, name: "主頁", href: "/" },
  { id: 2, name: "最新消息", href: "/news" },
  { id: 3, name: "議程", href: "/agenda" },
  {
    id: 4,
    name: "大會演講",
    href: "/speech",
    subMenu: [
      { id: 0, name: "大會演講 I", href: "/speech?sub=1" },
      { id: 1, name: "大會演講 II", href: "/speech?sub=2" },
    ],
  },
  { id: 5, name: "論壇發表", href: "/presentation" },
  { id: 6, name: "註冊與報名", href: "/register" },
  { id: 7, name: "流力學會得獎名單", href: "/award" },
  { id: 8, name: "海報論文競賽", href: "/poster" },
  { id: 9, name: "流體力學之美展覽", href: "/exhibition" },
  { id: 10, name: "評審委員名單", href: "/evaluation" },
  { id: 11, name: "委員會", href: "/committee" },
  { id: 12, name: "住宿資訊", href: "/accommodation" },
  { id: 13, name: "聯絡資訊", href: "/contact" },
  { id: 14, name: "交通資訊", href: "/traffic" },
];
// <li className="peer/home hover:border-l-2 px-2 py-2 hover:border-amber-600 hover:text-gray-300 hover:bg-sky-400/10">
const Navlist = () => {
  const router = useRouter();
  const { pathname, query, asPath } = router;

  const navActiveLink = useCallback(
    (link: string) => {
      return pathname === link;
    },
    [pathname, asPath]
  );

  return (
    <ul className="space-y-4">
      {menuls.map((item) => {
        return (
          <Fragment key={item.name}>
            <li
              key={item.name}
              className={`rounded-lg font-semibold hover:bg-gray-300/20 sm:text-lg md:text-xl xl:text-2xl ${navActiveLink(item.href)
                  ? "rounded-lg bg-gray-500/20 font-semibold text-sky-300 transition-all duration-300 ease-in-out hover:border-none hover:bg-gray-100/40 active:bg-gray-300/60"
                  : "text-sky-400/80"
                }`}
            >
              <Link
                className={`flex w-full items-center justify-between px-4 py-2  ${navActiveLink(item.href) ? "px-8 py-2" : ""
                  }`}
                href={item.href}
                scroll={false}
              >
                {item.name}
                {item?.subMenu && (
                  <ChevronRightIcon
                    className={classNames("h-8 w-8 fill-stone-400 stroke-2", {
                      "duration-600 rotate-90 transition-all ": navActiveLink(
                        item.href
                      ),
                    })}
                  />
                )}
              </Link>
            </li>

            {navActiveLink(item.href) &&
              item?.subMenu &&
              item?.subMenu?.map((sub) => {
                const subActive =
                  navActiveLink(item.href) && asPath === sub.href;
                return (
                  <div key={sub.id}>
                    <Link
                      className={classNames(
                        "block w-full py-2 px-12 text-blue-200/80 md:text-base xl:text-xl",
                        {
                          "border-l-4 transition-all duration-300 md:border-lime-300/60 ":
                            subActive,
                        }
                      )}
                      href={sub.href}
                      scroll={false}
                    >
                      {sub.name}
                    </Link>
                  </div>
                );
              })}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Navlist;
