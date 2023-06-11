import { IData } from "@/component/ui/CardContent";
import classNames from "classnames";
import React, { useState } from "react";

const InfoSec = (props: { data: IData }) => {
  const { data } = props;
  const [more, setMore] = useState(false);
  return (
    <div className="relative">
      <p
        className={classNames(
          " overflow-hidden md:h-full md:text-lg lg:text-xl",
          {
            "h-[160px]": !more,
          }
        )}
      >
        {data.about}
      </p>
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

export default InfoSec;
