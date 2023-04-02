(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, s, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(3738);
        },
      ]);
    },
    1989: function (e, s, l) {
      "use strict";
      l.d(s, {
        Z: function () {
          return y;
        },
      });
      var t = l(5893),
        n = l(9755),
        a = l.n(n),
        r = l(7294),
        c = l(1664),
        i = l.n(c),
        d = l(1163);
      let x = [
          { name: "主頁", href: "/" },
          { name: "最新消息", href: "/news" },
          { name: "議程", href: "/agenda" },
          { name: "註冊與報名", href: "/a" },
          { name: "海報論文競賽", href: "/b" },
          { name: "委員會", href: "/c" },
          { name: "聯絡資訊", href: "/d" },
          { name: "交通資訊", href: "/e" },
        ],
        o = () => {
          let e = (0, d.useRouter)(),
            { pathname: s } = e,
            l = (0, r.useCallback)((e) => s === e, [s]);
          return (0, t.jsx)("ul", {
            className: "space-y-4 text-sm md:text-lg",
            children: x.map((e) =>
              (0, t.jsx)(
                "li",
                {
                  className:
                    '"bg-gray-500/20  hover:bg-gray-300/20 rounded-lg font-semibold  '.concat(
                      l(e.href)
                        ? "active:bg-gray-300/60 bg-gray-500/20 text-sky-300 transition-all ease-in-out duration-300 rounded-lg hover:bg-gray-100/40 hover:border-none font-semibold"
                        : ""
                    ),
                  children: (0, t.jsx)(i(), {
                    className: "px-4 py-2 block w-full  ".concat(
                      l(e.href) ? "px-8 py-2" : ""
                    ),
                    href: e.href,
                    scroll: !1,
                    children: e.name,
                  }),
                },
                e.name
              )
            ),
          });
        },
        m = () => {
          let [e, s] = (0, r.useState)(!0),
            [l, n] = (0, r.useState)(!1),
            [a, c] = (0, r.useState)(0);
          return (
            (0, r.useEffect)(() => {
              let e = (e) => {
                window.scrollY > a && c(window.scrollY);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, t.jsx)(t.Fragment, {
              children:
                e &&
                (0, t.jsxs)("div", {
                  className:
                    "px-2 bg-slate-900 text-gray-300 shadow-2xl sticky flex justify-start z-[10] top-0 md:hidden text-sm  shaodw-xl ",
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        n((e) => !e);
                      },
                      children: (0, t.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "icon icon-tabler icon-tabler-align-left",
                        width: "44",
                        height: "44",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          (0, t.jsx)("path", {
                            stroke: "none",
                            d: "M0 0h24v24H0z",
                            fill: "none",
                          }),
                          (0, t.jsx)("line", {
                            x1: "4",
                            y1: "6",
                            x2: "20",
                            y2: "6",
                          }),
                          (0, t.jsx)("line", {
                            x1: "4",
                            y1: "12",
                            x2: "14",
                            y2: "12",
                          }),
                          (0, t.jsx)("line", {
                            x1: "4",
                            y1: "18",
                            x2: "18",
                            y2: "18",
                          }),
                        ],
                      }),
                    }),
                    l &&
                      (0, t.jsx)("div", {
                        className:
                          "absolute right-0 px-6 py-4 top-11 bg-gradient-to-r from-cyan-900  to-indigo-900/95 w-full",
                        children: (0, t.jsx)(o, {}),
                      }),
                  ],
                }),
            })
          );
        },
        h = (e) => {
          let { children: s } = e;
          return (0, t.jsx)("div", {
            className: "mx-auto max-w-[1920px] px-8 md:px-8 lg:px-16 2xl:px-16",
            children: s,
          });
        },
        p = () =>
          (0, t.jsx)("footer", {
            children: (0, t.jsxs)("ul", {
              className:
                "h-12 md:h-20 items-center flex bg-slate-900/10 text-gray-300/60 justify-center text-sm space-x-4",
              children: [
                (0, t.jsx)("li", { children: "@Copyright" }),
                (0, t.jsx)("li", { children: "28th conference" }),
              ],
            }),
          }),
        u = { name: "共同主辦" },
        g = [
          {
            field: "",
            list: [{ name: "周逸儒", edu: "國立台灣大學應用力學所" }],
          },
        ],
        j = () =>
          (0, t.jsxs)("div", {
            className: "",
            children: [
              (0, t.jsx)("h2", {
                className:
                  "text-2xl text-transparent bg-gradient-to-r bg-clip-text from-cyan-300/80 to-sky-200/80 pb-2 font-semibold",
                children: u.name,
              }),
              (0, t.jsx)("ul", {
                className: "space-y-4 list-none ",
                children: g.map((e) =>
                  (0, t.jsxs)(
                    "li",
                    {
                      className: "px-2 py-2 ",
                      children: [
                        (0, t.jsx)("h3", {
                          className:
                            "mb-2 pb-1 text-cyan-600 text-xl font-bold",
                          children: null == e ? void 0 : e.field,
                        }),
                        (0, t.jsx)("ul", {
                          className: "list-['-']  ",
                          children: e.list.map((e) =>
                            (0, t.jsxs)(
                              "li",
                              {
                                className:
                                  "flex flex-col pb-2 bg-gradient-to-r  text-transparent bg-clip-text from-gray-300/80 to-slate-300/80",
                                children: [
                                  (0, t.jsx)("h4", {
                                    className:
                                      "text-lg sm:text-xl mb-1 font-bold",
                                    children: e.name,
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "text-sm sm:text-lg indent-0",
                                    children: e.edu,
                                  }),
                                ],
                              },
                              e.name
                            )
                          ),
                        }),
                      ],
                    },
                    e.field
                  )
                ),
              }),
            ],
          }),
        f = () =>
          (0, t.jsxs)("section", {
            className: "space-y-4",
            children: [
              (0, t.jsx)("hr", { className: "border border-slate-300/20" }),
              (0, t.jsx)("div", {
                className:
                  "px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl",
                children: (0, t.jsx)(j, {}),
              }),
            ],
          }),
        b = (e) => {
          let { children: s } = e;
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className:
                "bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900/90 min-h-screen flex flex-col",
              children: [
                (0, t.jsx)(m, {}),
                (0, t.jsx)("div", {
                  className: "p-2 md:p-6 lg:px-12 lg:py-10 mx-auto ",
                  children: (0, t.jsx)(a(), {
                    src: "./banner/NCFD_600rs.jpeg",
                    width: 1920,
                    height: 480,
                    style: { objectFit: "cover" },
                    alt: "conference",
                    priority: !0,
                    className: "object-cover object-top block w-full",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: " grow",
                  children: (0, t.jsx)(h, {
                    children: (0, t.jsxs)("div", {
                      className:
                        "bg-gray-800/60 rounded-md p-6 shadow-2xl grid grid-cols-12 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-6",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "order-2 col-span-12 md:col-span-4",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "hidden md:order-1 md:block px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl text-sky-600",
                              children: (0, t.jsx)(o, {}),
                            }),
                            (0, t.jsx)(f, {}),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "order-1 md:order-2 col-span-12 md:col-span-8 ",
                          children: (0, t.jsx)("main", {
                            className: "",
                            children: s,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsx)(p, {}),
              ],
            }),
          });
        };
      var y = b;
    },
    3738: function (e, s, l) {
      "use strict";
      l.r(s),
        l.d(s, {
          default: function () {
            return c;
          },
        });
      var t = l(5893),
        n = l(1989);
      let a = () =>
          (0, t.jsxs)("section", {
            className: "mx-auto block w-full text-gray-300/60",
            children: [
              (0, t.jsx)("h1", {
                className: "pb-4 text-xl sm:text-3xl",
                children: "第28屆全國計算流體力學學術研討會",
              }),
              (0, t.jsx)("h3", {
                className: "font-semibold text-md sm:text-xl py-2",
                children: "主辦單位",
              }),
              (0, t.jsxs)("ul", {
                className: "text-sm sm:text-base space-y-2",
                children: [
                  (0, t.jsx)("li", { children: "(1) 中華民國航空太空學會" }),
                  (0, t.jsx)("li", {
                    children: "(2) 國立臺灣大學應用力學研究所",
                  }),
                ],
              }),
            ],
          }),
        r = () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(a, {}) });
      r.Layout = n.Z;
      var c = r;
    },
  },
  function (e) {
    e.O(0, [422, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
