import React from "react";
import type { PropsWithChildren } from "react";

type TitleType = {
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span";
};

type TitleTypeProps = PropsWithChildren<TitleType>;

const Title = (props: TitleTypeProps) => {
  const { as, children } = props;

  const Component = as || "h1";
  const titleClassName =
    "font-semibold bg-gradient-to-r from-cyan-300/80 to-rose-700/80 bg-clip-text text-transparent text-xl sm:text-2xl lg:xl:text-3xl pb-2 sm:pb-4 lg:pb-6";

  // return <Component className={titleClassName}>{children}</Component>;
  return (
    <Component
      className={
        "inline-block bg-gradient-to-r from-cyan-300/60 via-cyan-300/80 to-sky-300/80 bg-clip-text pb-2 text-2xl font-semibold text-transparent sm:pb-4 sm:text-3xl lg:pb-6 lg:xl:text-4xl"
      }
    >
      {children}
    </Component>
  );
};

export default Title;
