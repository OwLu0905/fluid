import React from "react";
type PosterContentType = {
  content: string[];
  title: string;
  textColor: string;
  titleColor?: string;
};
const SingleContent = (props: PosterContentType) => {
  const { content, title, textColor, titleColor } = props;
  return (
    <section className="mb-4 w-full text-base md:text-lg lg:text-2xl">
      <div className="flex w-full flex-col">
        <div
          className={`hidden w-full items-center rounded-t-sm px-2 py-2 text-center text-base font-semibold xs:text-lg md:flex md:py-4 md:text-xl xl:text-2xl ${titleColor}`}
        >
          <p className="w-full">{title}</p>
        </div>
        <ul className="space-y-2">
          {content.map((item) => (
            <li
              key={item}
              className="duration-400 flex w-full grow py-2 px-2 text-blue-100/80 transition-all  hover:cursor-pointer  hover:bg-gray-300/40 hover:bg-gradient-to-r hover:from-sky-600/40 hover:to-teal-300/40 lg:py-3"
            >
              <span className={`${textColor} mr-4`}>{item.split(" ")[0]}</span>
              <h4>{item.split(" ")[1]}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleContent;
