import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Fuse from "fuse.js";

const options = {
  keys: ["name"],
  includeScore: true,
  threshold: 1,
  location: 0,
  distance: 100,
  includeMatches: true,
  minMatchCharLength: 1,
};

const PosterList = [
  { id: 1, name: "數值計算法則" },
  { id: 2, name: "網格點生成法" },
  { id: 3, name: "電腦流場顯像" },
  { id: 4, name: "平行計算" },
  { id: 5, name: "不可壓縮流流場" },
  { id: 6, name: "可壓縮流流場" },
  { id: 7, name: "紊流模式" },
  { id: 8, name: "熱傳與質傳" },
  { id: 9, name: "化學反應流" },
  { id: 10, name: "渦輪引擎流場" },
  { id: 11, name: "噴射推進與燃燒" },
  { id: 12, name: "多相及介面流" },
  { id: 13, name: "電漿與半導體製程" },
  { id: 14, name: "稀薄流與真空系統" },
  { id: 15, name: "能源技術" },
  { id: 16, name: "生物與醫學流體力學" },
  { id: 17, name: "奈微米熱流" },
  { id: 18, name: "計算聲學" },
  { id: 19, name: "計算電磁學" },
  { id: 20, name: "一般工業應用" },
  { id: 21, name: "汽電共生" },
  { id: 22, name: "環境工程" },
  { id: 23, name: "地科流體力學" },
  { id: 24, name: "洪水與土石流" },
  { id: 25, name: "GPU計算" },
  { id: 26, name: "流固耦合" },
  { id: 27, name: "其他之計算力學" },
];

const fuse = new Fuse(PosterList, options);
export default function Example() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === "" ? PosterList : fuse.search(query).map((i) => i.item);

  return (
    <div className="w-full md:w-1/2">
      查詢範圍
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-blue-900 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-sky-900 focus:ring-0"
              displayValue={(person: any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  無
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.id + ".  " + person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
