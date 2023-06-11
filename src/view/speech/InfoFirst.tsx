import { IData } from "@/component/ui/CardContent";
import classNames from "classnames";
import React, { useState } from "react";

const InfoFirst = (props: { data: IData }) => {
  const { data } = props;
  const [more, setMore] = useState(false);
  return (
    <div className="relative">
      <div
        className={classNames(
          " overflow-hidden md:h-full md:text-lg lg:text-xl",
          {
            "h-[160px]": !more,
          }
        )}
      >
        <h4 className="mb-2 text-xl font-semibold text-teal-600/80">
          Education
        </h4>
        <ul className="mb-6 space-y-2 md:space-y-4">
          {data.education.map((ele) => {
            return <li key={ele}> - {ele}</li>;
          })}
        </ul>
        <h4 className="mb-2 text-xl font-semibold text-teal-600/80">
          Current Position
        </h4>
        <ul className="mb-6 space-y-2 md:space-y-4">
          {data.position.map((ele) => {
            return <li key={ele}> - {ele}</li>;
          })}
        </ul>
      </div>
      <span className="md:hidden"> {!more ? "..." : ""}</span>
      <button
        onClick={() => setMore((prev) => !prev)}
        className="absolute -bottom-10 left-0 w-20 rounded-xl bg-gray-100/30 px-2 py-1 text-sm text-gray-100 md:hidden"
      >
        {!more ? "詳細" : "收合"}
      </button>
    </div>
  );
};

export default InfoFirst;
