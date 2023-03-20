import React from "react";

const field = [
  {
    field: "JSME",
    list: [
      {
        name: "Takeo Kajishima",
        edu: "Shikoku Polytechnic College / Osaka University",
      },
      { name: "Genta Kawahara", edu: "Osaka University" },
    ],
  },
  {
    field: "ASME",
    list: [
      {
        name: "Kamran Siddiqui",
        edu: "University of Western Ontario",
      },
      { name: "Marianne Francois", edu: "Los Alamos National Laboratory" },
    ],
  },
  {
    field: "KSME",
    list: [
      {
        name: "Han Seo Ko",
        edu: "Sungkyunkwan University",
      },
      { name: "Gwang Hoon Rhee", edu: "University of Seoul" },
    ],
  },
];

const CoCharis = () => {
  return (
    <div className="">
      <h2 className="text-2xl text-transparent bg-gradient-to-r bg-clip-text from-cyan-300/80 to-sky-100/80 pb-2 font-semibold">
        Co-Chairs
      </h2>
      <ul className="text-gray-300 space-y-4 list-none">
        {field.map((item) => {
          return (
            <li
              key={item.field}
              // className="bg-gradient-to-r from-cyan-300/10 to-teal-100/10 rounded-lg px-6 py-5 "
              className="px-2 py-2 "
            >
              {/* <h3 className="mb-2 pb-1 text-cyan-600 border-cyan-100/30 border-b-2 pl-2 text-xl"> */}
              <h3 className="mb-2 pb-1 text-cyan-600 text-xl font-bold">
                {item.field}
              </h3>
              <ul className="list-['-']">
                {item.list.map((list) => {
                  return (
                    <li key={list.name} className="flex flex-col pb-2">
                      <h4 className="text-base mb-1 font-bold">{list.name}</h4>
                      <p className="text-sm indent-0">{list.edu}</p>
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
