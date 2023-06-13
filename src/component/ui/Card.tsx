import { LinkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, PropsWithChildren, ReactElement } from "react";

type CartProps = {
  id?: string;
};
const Card = (props: PropsWithChildren<CartProps>) => {
  const { id } = props;
  return (
    <>
      <div
        id={id}
        className="group mb-4 h-full rounded-lg bg-gradient-to-br from-gray-700 via-gray-700/30 to-gray-700 px-4 py-6 xs:px-6 xs:py-8 md:px-6 md:py-8 lg:px-8 lg:py-10"
      >
        {props.children}
      </div>
    </>
  );
};

export default Card;
