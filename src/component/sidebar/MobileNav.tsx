import React, { useEffect, useState } from "react";
import Navlist from "./Navlist";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(0);

  function toggleMenuHandler() {
    setToggleNav((prev) => !prev);
  }
  useEffect(() => {
    const handleScroll = (event: any) => {
      //   if (window.screenY > 400 && window.scrollY > scrollDirection) {
      //     setShowNav(false);
      //   }
      //   if (window.screenY > 400 && window.scrollY < scrollDirection) {
      //     setShowNav(true);
      //   }

      if (window.scrollY > scrollDirection) {
        setScrollDirection(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   if (typeof window === "undefined") {
  //     return (
  //       <>
  //         <div>123</div>
  //       </>
  //     );
  //   }

  return (
    <>
      {showNav && (
        <div className="bg-slate-900 text-gray-300 shadow-2xl sticky flex justify-start z-[10] top-0 md:hidden text-sm  shaodw-xl ">
          <button type="button" onClick={toggleMenuHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-align-left"
              width="44"
              height="44"
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
          {toggleNav && (
            <div className="absolute right-0 px-6 py-4 top-11 bg-gradient-to-r from-cyan-900  to-indigo-900/95 w-full">
              <Navlist />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MobileNav;
