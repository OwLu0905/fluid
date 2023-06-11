import React from "react";
import speechSub from "@/data/speechSub.json" assert { type: "json" };
import InfoFirst from "./InfoFirst";
import InfoSec from "./InfoSec";

const Info = (props: { sub: string }) => {
  const { sub } = props;
  const idx = Number(sub) - 1;
  return (
    <div>
      <h3 className="mb-2 bg-transparent bg-gradient-to-br from-blue-400 to-slate-500 bg-clip-text py-2 text-2xl font-semibold md:py-2">
        介紹
      </h3>
      <>
        {idx === 0 ? (
          <InfoFirst data={speechSub[idx]} />
        ) : (
          <InfoSec data={speechSub[idx]} />
        )}
      </>
    </div>
  );
};

export default Info;
