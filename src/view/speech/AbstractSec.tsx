import classNames from "classnames";
import React, { useState } from "react";

const AbstractSec = () => {
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
        <p>
          An air vehicle trying to operate in adverse weather or wakes of urban
          canyons and mountainous terrains would be hit by strong large-scale
          atmospheric disturbances. In such extreme aerodynamic conditions,
          flight control becomes a great challenge, if not impossible, due to
          the enormous transient forces that the vehicle experiences. Currently,
          encounters with these extreme flow phenomena limit operations of fixed
          and rotating wing aircraft, especially those that are small to medium
          in size. The present study is focused on the analysis, modeling, and
          control of extreme aerodynamic flows, with unsteadiness far larger in
          amplitudes than those considered in traditional aerodynamics on a time
          scale comparable to that of the flow instabilities. The high
          dimensionality, strong nonlinearity, and multi-scale properties of
          these extreme flows make effective analysis and control a tremendous
          challenge. Without the reduction of the state variable dimension and
          extraction of dominant dynamics, the application of dynamical systems
          and control theory for flow control remains a difficult task. This
          talk will discuss modern approaches to model and control such complex
          fluid flows by leveraging data-driven techniques and high-performance
          computing. We in particular will present unsupervised and supervised
          machine learning techniques and how they can be embedded in existing
          flow analysis techniques. Equipped with these toolsets, we extract
          essential dynamics to facilitate the development of sparse and
          reduced-order models to design flow control techniques for
          high-dimensional unsteady fluid flows. We discuss some of the
          challenges and successes in characterizing, modeling, and controlling
          extreme aerodynamic flows.
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

export default AbstractSec;
