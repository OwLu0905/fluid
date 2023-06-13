import React, { Fragment } from "react";

import AbstractFirst from "./AbstractFirst";
import AbstractSec from "./AbstractSec";

const Abstract = (props: { sub: string }) => {
  const { sub } = props;
  const idx = Number(sub) - 1;
  return (
    <>
      <h3  className="mb-2 bg-transparent bg-gradient-to-br from-blue-400 to-slate-500 bg-clip-text py-2 text-2xl font-semibold md:py-4">
        摘要
      </h3>
      {idx === 0 ? <AbstractFirst /> : <AbstractSec />}
    </>
  );
};

export default Abstract;
