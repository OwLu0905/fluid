import React, { Fragment, PropsWithChildren } from "react";

export interface IData {
  id: number;
  category: string;
  name: string;
  sub: string;
  title: string;
  img: string;
  abstract: string;
  descript: string;
  about: string;
  education: string[];
  position: string[];
}

const CardContent = (props: PropsWithChildren<{ data: IData }>) => {
  const { data } = props;
  return (
    <>
      <div className="mb-4 hidden xs:flex">
        <div className="mx-4 flex h-[200px] w-[200px] items-center justify-center overflow-hidden">
          <img
            width={100}
            height={100}
            src={data.img}
            className="mx-auto flex w-full items-center rounded-sm object-scale-down transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex h-full w-full flex-col justify-between rounded-md px-4 py-2">
          <h3 className="py-2 text-2xl font-medium lg:text-3xl">{data.name}</h3>
          <p className="mb-6 text-xl font-medium text-gray-400 lg:text-xl">
            {data.sub}
          </p>

          <h4 className="mb-6 text-xl font-normal italic">
            <span className="text-xl not-italic">題目：</span>

            <span className="text-gray-400">{data.title}</span>
          </h4>

          {props.children}
        </div>
      </div>

      <div className="mb-4 flex flex-col xs:hidden">
        <div className="flex flex-col items-center xs:flex-row">
          <div className="mb-4 flex w-[60%] items-center justify-center overflow-hidden xs:w-1/3 xs:px-4">
            <img
              width={100}
              height={100}
              src={data.img}
              className="flex w-full items-center rounded-sm transition-all duration-500 group-hover:scale-110"
            />
          </div>
          <div className="w-full xs:w-2/3">
            <h3 className="py-2 text-xl font-medium">{data.name}</h3>
            <p className="mb-4 whitespace-pre-line text-lg font-medium text-gray-400 xs:mb-6">
              {data.sub}
            </p>
          </div>
        </div>

        <h4 className="text-base font-normal italic xs:mb-4 xs:px-4 xs:text-xl">
          <span className="text-base not-italic">題目：</span>
          <br />

          <span className="text-gray-400 xs:text-xl">{data.title}</span>
        </h4>

        {props.children}
      </div>
    </>
  );
};

export default CardContent;
