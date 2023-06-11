import classNames from "classnames";
import React, { useState } from "react";

const AbstractFirst = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="relative">
      <article
        className={classNames(
          "overflow-hidden md:h-full md:text-lg lg:text-xl",
          {
            "h-[160px]": !more,
          }
        )}
      >
        <p className="mb-4 indent-8">
          Powder flow is a kind of two- or multi- phase flow. It is widely
          defined as large conglomerations of discrete particles dispersed in a
          fluid. They are ubiquitous in nature and can be seen in many
          industrial processes. However, regardless of the wide use of these
          materials and the obvious simplicity of their definition, a complete
          understanding of their mechanics and their behavior is far from being
          achieved.
        </p>
        <p className="mb-4 indent-8">
          For modelling powder flows, dense-gas kinetic theory has been revised
          for powder flow to build the constitutive relations. The governing
          equations could be solved numerically by Computational Fluid Dynamics
          (CFD) method. This talk will introduce this tool with several
          industrial applications.
        </p>

        <p className="mb-4 indent-8">
          Due to the characteristics of discrete particles, recently, Discrete
          Element Method (DEM) modelling becomes a modern tool to simulate the
          powder flows. This talk will also introduce the applications of DEM to
          some industrial applications. Besides the CFD/DEM, some interesting
          experiments will also be demonstrated in this talk.
        </p>
      </article>

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

export default AbstractFirst;
