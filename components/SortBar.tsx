"use client";

import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { SortProps } from "@/types";
import { sorts } from "@/constants";

export const SortBar = ({ sort, setSort }: SortProps) => {
  return (
    <div className="search-brand">
      <Listbox value={sort} onChange={setSort}>
        <div className="relative w-full">
          <Listbox.Button className="search-sort__input">
            <Listbox.Label>Sorting: </Listbox.Label>
            {sort}
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10"
              static
            >
              {sorts.map((item) => (
                <Listbox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-brand__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>

                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-pribg-primary-purple"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
