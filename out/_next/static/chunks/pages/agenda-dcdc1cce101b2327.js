(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [396],
  {
    2850: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/agenda",
        function () {
          return t(6296);
        },
      ]);
    },
    1989: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return N;
        },
      });
      var l = t(5893),
        r = t(9755),
        a = t.n(r),
        d = t(7294),
        n = t(1664),
        o = t.n(n),
        x = t(1163);
      let c = [
          { name: "主頁", href: "/" },
          { name: "最新消息", href: "/news" },
          { name: "議程", href: "/agenda" },
          { name: "註冊與報名", href: "/a" },
          { name: "海報論文競賽", href: "/b" },
          { name: "委員會", href: "/c" },
          { name: "聯絡資訊", href: "/d" },
          { name: "交通資訊", href: "/e" },
        ],
        i = () => {
          let e = (0, x.useRouter)(),
            { pathname: s } = e,
            t = (0, d.useCallback)((e) => s === e, [s]);
          return (0, l.jsx)("ul", {
            className: "space-y-4 text-sm md:text-lg",
            children: c.map((e) =>
              (0, l.jsx)(
                "li",
                {
                  className:
                    '"bg-gray-500/20  hover:bg-gray-300/20 rounded-lg font-semibold  '.concat(
                      t(e.href)
                        ? "active:bg-gray-300/60 bg-gray-500/20 text-sky-300 transition-all ease-in-out duration-300 rounded-lg hover:bg-gray-100/40 hover:border-none font-semibold"
                        : ""
                    ),
                  children: (0, l.jsx)(o(), {
                    className: "px-4 py-2 block w-full  ".concat(
                      t(e.href) ? "px-8 py-2" : ""
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
          let [e, s] = (0, d.useState)(!0),
            [t, r] = (0, d.useState)(!1),
            [a, n] = (0, d.useState)(0);
          return (
            (0, d.useEffect)(() => {
              let e = (e) => {
                window.scrollY > a && n(window.scrollY);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, l.jsx)(l.Fragment, {
              children:
                e &&
                (0, l.jsxs)("div", {
                  className:
                    "px-2 bg-slate-900 text-gray-300 shadow-2xl sticky flex justify-start z-[10] top-0 md:hidden text-sm  shaodw-xl ",
                  children: [
                    (0, l.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        r((e) => !e);
                      },
                      children: (0, l.jsxs)("svg", {
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
                          (0, l.jsx)("path", {
                            stroke: "none",
                            d: "M0 0h24v24H0z",
                            fill: "none",
                          }),
                          (0, l.jsx)("line", {
                            x1: "4",
                            y1: "6",
                            x2: "20",
                            y2: "6",
                          }),
                          (0, l.jsx)("line", {
                            x1: "4",
                            y1: "12",
                            x2: "14",
                            y2: "12",
                          }),
                          (0, l.jsx)("line", {
                            x1: "4",
                            y1: "18",
                            x2: "18",
                            y2: "18",
                          }),
                        ],
                      }),
                    }),
                    t &&
                      (0, l.jsx)("div", {
                        className:
                          "absolute right-0 px-6 py-4 top-11 bg-gradient-to-r from-cyan-900  to-indigo-900/95 w-full",
                        children: (0, l.jsx)(i, {}),
                      }),
                  ],
                }),
            })
          );
        },
        h = (e) => {
          let { children: s } = e;
          return (0, l.jsx)("div", {
            className: "mx-auto max-w-[1920px] px-8 md:px-8 lg:px-16 2xl:px-16",
            children: s,
          });
        },
        b = () =>
          (0, l.jsx)("footer", {
            children: (0, l.jsxs)("ul", {
              className:
                "h-12 md:h-20 items-center flex bg-slate-900/10 text-gray-300/60 justify-center text-sm space-x-4",
              children: [
                (0, l.jsx)("li", { children: "@Copyright" }),
                (0, l.jsx)("li", { children: "28th conference" }),
              ],
            }),
          }),
        p = { name: "共同主辦" },
        j = [
          {
            field: "",
            list: [{ name: "周逸儒", edu: "國立台灣大學應用力學所" }],
          },
        ],
        f = () =>
          (0, l.jsxs)("div", {
            className: "",
            children: [
              (0, l.jsx)("h2", {
                className:
                  "text-2xl text-transparent bg-gradient-to-r bg-clip-text from-cyan-300/80 to-sky-200/80 pb-2 font-semibold",
                children: p.name,
              }),
              (0, l.jsx)("ul", {
                className: "space-y-4 list-none ",
                children: j.map((e) =>
                  (0, l.jsxs)(
                    "li",
                    {
                      className: "px-2 py-2 ",
                      children: [
                        (0, l.jsx)("h3", {
                          className:
                            "mb-2 pb-1 text-cyan-600 text-xl font-bold",
                          children: null == e ? void 0 : e.field,
                        }),
                        (0, l.jsx)("ul", {
                          className: "list-['-']  ",
                          children: e.list.map((e) =>
                            (0, l.jsxs)(
                              "li",
                              {
                                className:
                                  "flex flex-col pb-2 bg-gradient-to-r  text-transparent bg-clip-text from-gray-300/80 to-slate-300/80",
                                children: [
                                  (0, l.jsx)("h4", {
                                    className:
                                      "text-lg sm:text-xl mb-1 font-bold",
                                    children: e.name,
                                  }),
                                  (0, l.jsx)("p", {
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
        g = () =>
          (0, l.jsxs)("section", {
            className: "space-y-4",
            children: [
              (0, l.jsx)("hr", { className: "border border-slate-300/20" }),
              (0, l.jsx)("div", {
                className:
                  "px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl",
                children: (0, l.jsx)(f, {}),
              }),
            ],
          }),
        u = (e) => {
          let { children: s } = e;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
              className:
                "bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900/90 min-h-screen flex flex-col",
              children: [
                (0, l.jsx)(m, {}),
                (0, l.jsx)("div", {
                  className: "p-2 md:p-6 lg:px-12 lg:py-10 mx-auto ",
                  children: (0, l.jsx)(a(), {
                    src: "./banner/NCFD_600rs.jpeg",
                    width: 1920,
                    height: 480,
                    style: { objectFit: "cover" },
                    alt: "conference",
                    priority: !0,
                    className: "object-cover object-top block w-full",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: " grow",
                  children: (0, l.jsx)(h, {
                    children: (0, l.jsxs)("div", {
                      className:
                        "bg-gray-800/60 rounded-md p-6 shadow-2xl grid grid-cols-12 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-6",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "order-2 col-span-12 md:col-span-4",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "hidden md:order-1 md:block px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl text-sky-600",
                              children: (0, l.jsx)(i, {}),
                            }),
                            (0, l.jsx)(g, {}),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "order-1 md:order-2 col-span-12 md:col-span-8 ",
                          children: (0, l.jsx)("main", {
                            className: "",
                            children: s,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, l.jsx)(b, {}),
              ],
            }),
          });
        };
      var N = u;
    },
    6296: function (e, s, t) {
      "use strict";
      t.r(s);
      var l = t(5893);
      t(7294);
      var r = t(1989);
      let a = [
          ["9:20-9:30", "開幕", "", ""],
          [
            "9:30-10:20",
            "⼤會演講1(蕭述三講座教授)",
            "9:30-10:20",
            "⼤會演講2(Prof.KunihikoTaira,UCLA)",
          ],
          ["10:20-10:45", "茶點", "10:20-10:45", "茶點"],
          [
            "10:45-12:00",
            "迷你論壇1(中科院)",
            "10:45-12:00",
            "迷你論壇2(林洸銓教授)",
          ],
          ["12:00-13:00", "午餐", "12:00-13:00", "午餐"],
          ["13:00-14:30", "海報展⽰", "13:00-14:15", "迷你論壇3(李政賢教授)"],
          ["14:30-15:00", "茶點", "14:15-14:45", "茶點"],
          ["15:00-16:10", "⼯業論壇", "14:45-16:00", "迷你論壇4(吳毓庭教授)"],
          ["18:00-20:00", "晚宴", "16:00-17:00", "閉幕及頒獎"],
        ],
        d = () =>
          (0, l.jsxs)("section", {
            className: "mx-auto block w-full text-gray-300/60",
            children: [
              (0, l.jsx)("h1", {
                className: "pb-4 text-xl sm:text-3xl",
                children: "議程",
              }),
              (0, l.jsxs)("table", {
                className: "border-collapse border border-slate-500 ",
                children: [
                  (0, l.jsx)("thead", {
                    children: (0, l.jsxs)("tr", {
                      children: [
                        (0, l.jsx)("th", {
                          className:
                            "w-2/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left",
                          children: "第一天",
                        }),
                        (0, l.jsx)("th", {
                          className:
                            "w-4/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left",
                        }),
                        (0, l.jsx)("th", {
                          className:
                            "w-2/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left",
                          children: "第二天",
                        }),
                        (0, l.jsx)("th", {
                          className:
                            "w-4/12 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left",
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("tbody", {
                    children: a.map((e) =>
                      (0, l.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, l.jsx)("td", {
                              className:
                                "border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400",
                              children: e[0],
                            }),
                            (0, l.jsx)("td", {
                              className:
                                "border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400",
                              children: e[1],
                            }),
                            (0, l.jsx)("td", {
                              className:
                                "border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400",
                              children: e[2],
                            }),
                            (0, l.jsx)("td", {
                              className:
                                "border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400",
                              children: e[3],
                            }),
                          ],
                        },
                        e[0] + e[1]
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
      (d.Layout = r.Z), (d.displayName = "議程"), (s.default = d);
    },
  },
  function (e) {
    e.O(0, [422, 774, 888, 179], function () {
      return e((e.s = 2850));
    }),
      (_N_E = e.O());
  },
]);
