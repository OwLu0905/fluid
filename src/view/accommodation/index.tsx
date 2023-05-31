import Title from "@/component/utils/Title";
import React from "react";
import mrt from "@/data/mrt.json";
import surrounding from "@/data/surrounding.json";
// import { MapPinIcon, LinkIcon } from "@heroicons/react/20/solid";
import { MapPinIcon, LinkIcon } from "@heroicons/react/24/outline";
import CustomMap from "../traffic/CustomMap";

const AccommodationPage = () => {
  const mrtCenter = mrt.reduce(
    (acc: [number, number], cur) => {
      const lat = cur.position.split(",")[0];
      const lng = cur.position.split(",")[1];
      acc[0] += +lat / 4;
      acc[1] += +lng / 4;
      return acc;
    },
    [0, 0]
  );
  const surroundingCenter = surrounding.reduce(
    (acc: [number, number], cur) => {
      const lat = cur.position.split(",")[0];
      const lng = cur.position.split(",")[1];
      acc[0] += +lat / 5;
      acc[1] += +lng / 5;
      return acc;
    },
    [0, 0]
  );

  return (
    <div className="flex flex-col">
      <div className="mb-6 flex flex-col items-center md:flex-row md:items-start lg:ml-4 lg:mb-8 lg:flex-col lg:items-center xl:mb-10 xl:flex-row xl:items-center">
        <div className="w-full md:w-2/3 lg:w-full xl:w-2/3">
          <Title as="h2">北投亞太飯店周圍</Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            {surrounding.map((i, idx) => {
              return (
                <li key={i.name} className="group flex flex-col">
                  <div className="flex items-start">
                    <span>{idx + 1}.</span>
                    <h3 className="mb-2 group-hover:underline group-hover:decoration-teal-600 group-hover:decoration-2 group-hover:underline-offset-4">
                      {i.name}
                    </h3>
                  </div>

                  <div className="ml-2 lg:ml-6">
                    <div className="mb-1 flex items-center">
                      {/* 地址： */}
                      <MapPinIcon className="mx-1 w-4 text-slate-400 lg:mx-1 lg:w-5" />
                      <address className="text-base md:text-lg xl:text-xl">
                        {i.address}
                      </address>
                    </div>
                    <div className="flex items-center">
                      {/* 網站： */}
                      <LinkIcon className="mx-1 w-4 text-slate-400 lg:mx-1 lg:w-5" />
                      <a
                        href={i.website}
                        target="_blank"
                        className="text-base text-teal-500 group-hover:text-teal-400 md:text-lg xl:text-xl"
                      >
                        {i.website}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="w-full px-0 md:px-2 lg:px-4 xl:px-8">
          <CustomMap
            map={surrounding}
            center={{ lat: surroundingCenter[0], lng: surroundingCenter[1] }}
          />
        </div>
      </div>
      <div className="mb-6 flex flex-col items-center md:flex-row md:items-start lg:ml-4 lg:mb-8 lg:flex-col lg:items-center xl:mb-10 xl:flex-row xl:items-center">
        <div className="w-full md:w-2/3 lg:w-full xl:w-2/3">
          <Title as="h2">新北投捷運站周圍</Title>
          <ol className="mb-6 list-inside list-decimal space-y-4 text-base sm:text-lg md:indent-2 md:text-xl xl:text-2xl">
            {mrt.map((i, idx) => {
              return (
                <li key={i.name} className="group flex flex-col">
                  <div className="flex items-start">
                    <span>{idx + 1}.</span>
                    <h3 className="mb-2 group-hover:underline group-hover:decoration-teal-600 group-hover:decoration-2 group-hover:underline-offset-4">
                      {i.name}
                    </h3>
                  </div>

                  <div className="ml-2 lg:ml-6">
                    <div className="mb-1 flex items-center">
                      {/* 地址： */}
                      <MapPinIcon className="mx-1 w-4 text-slate-400 lg:mx-1 lg:w-5" />
                      <address className="text-base md:text-lg xl:text-xl">
                        {i.address}
                      </address>
                    </div>
                    <div className="flex items-center">
                      {/* 網站： */}
                      <LinkIcon className="mx-1 w-4 text-slate-400 lg:mx-1 lg:w-5" />
                      <a
                        href={i.website}
                        target="_blank"
                        className="text-base text-teal-500 group-hover:text-teal-400 md:text-lg xl:text-xl"
                      >
                        {i.website}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="w-full px-0 md:px-2 lg:px-4 xl:px-8">
          <CustomMap
            map={mrt}
            center={{ lat: mrtCenter[0], lng: mrtCenter[1] }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccommodationPage;
