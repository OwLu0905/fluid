import React, { useEffect, useState } from "react";
import Title from "../utils/Title";
import Navlist from "./Navlist";
import Link from "next/link";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(0);

  function toggleMenuHandler() {
    setToggleNav((prev) => !prev);
  }

  // useEffect(() => {
  //   const handleScroll = (event: any) => {
  //     //   if (window.screenY > 400 && window.scrollY > scrollDirection) {
  //     //     setShowNav(false);
  //     //   }
  //     //   if (window.screenY > 400 && window.scrollY < scrollDirection) {
  //     //     setShowNav(true);
  //     //   }

  //     // if (window.scrollY > scrollDirection) {
  //     //   setScrollDirection(window.scrollY);
  //     // }
  //     setScrollDirection(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {showNav && (
        <div
          className={`shaodw-xl sticky top-0 z-[10] h-12 items-center justify-start bg-slate-900 text-sm text-gray-300 opacity-[95%] shadow-md shadow-cyan-600/30 lg:hidden `}
        >
          <button
            className="absolute top-0 flex h-12 items-center px-2"
            type="button"
            onClick={toggleMenuHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-align-left"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="14" y2="12" />
              <line x1="4" y1="18" x2="18" y2="18" />
            </svg>
          </button>
          <Link href="/">
            <h1 className="flex h-12 cursor-pointer items-center justify-center bg-gradient-to-r from-sky-500 via-cyan-500 to-violet-400 bg-clip-text text-center text-4xl font-extrabold text-transparent ">
              NCFD
            </h1>
          </Link>
          {toggleNav && (
            <aside
              className="absolute right-0 top-11 w-full bg-gradient-to-r from-cyan-900 to-indigo-900/95 px-6  py-4 opacity-100"
              onClick={toggleMenuHandler}
            >
              <Navlist />
            </aside>
          )}
        </div>
      )}
    </>
  );
};

export default MobileNav;
