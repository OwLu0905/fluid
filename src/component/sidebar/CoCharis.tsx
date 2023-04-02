import React from "react";

const CoChair = {
  // name: "共同主辦",
  name: " ",
};
const field = [
  {
    field: "",
    list: [
      {
        // name: "周逸儒",
        // edu: "國立台灣大學應用力學所",
        name: " ",
        edu: " ",
      },
    ],
  },
  // {
  //   field: "ASME",
  //   list: [
  //     {
  //       name: "Kamran Siddiqui",
  //       edu: "University of Western Ontario",
  //     },
  //     { name: "Marianne Francois", edu: "Los Alamos National Laboratory" },
  //   ],
  // },
  // {
  //   field: "KSME",
  //   list: [
  //     {
  //       name: "Han Seo Ko",
  //       edu: "Sungkyunkwan University",
  //     },
  //     { name: "Gwang Hoon Rhee", edu: "University of Seoul" },
  //   ],
  // },
];

const CoCharis = () => {
  return (
    <div className="">
      <h2 className="bg-gradient-to-r from-cyan-300/80 to-sky-200/80 bg-clip-text pb-2 text-2xl font-semibold text-transparent ">
        {CoChair.name}
      </h2>
      <ul className="list-none space-y-4 ">
        {field.map((item) => {
          return (
            <li
              key={item.field}
              // className="bg-gradient-to-r from-cyan-300/10 to-teal-100/10 rounded-lg px-6 py-5 "
              className="px-2 py-2 "
            >
              {/* <h3 className="mb-2 pb-1 text-cyan-600 border-cyan-100/30 border-b-2 pl-2 text-xl"> */}
              <h3 className="mb-2 pb-1 text-xl font-bold text-cyan-600">
                {item?.field}
              </h3>
              <ul className="list-['-']  ">
                {item.list.map((list) => {
                  return (
                    <li
                      key={list.name}
                      className="flex flex-col bg-gradient-to-r from-gray-300/80 to-slate-300/80 bg-clip-text pb-2 text-transparent"
                    >
                      <h4 className="mb-1 text-lg font-bold sm:text-xl">
                        {list.name}
                      </h4>
                      <p className="indent-0 text-sm sm:text-lg">{list.edu}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoCharis;
