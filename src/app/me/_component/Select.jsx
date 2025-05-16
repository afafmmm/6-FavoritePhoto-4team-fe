"use client";

import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import clsx from "clsx";
import {
  Listbox,
  Label,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Field,
} from "@headlessui/react";

export function GradeSelect() {
  const options = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const [selected, setSelected] = useState(options[0]);

  return (
    <Field className="bg-transparent flex flex-col gap-2.5 w-full max-w-[345px] md:max-w-110 lg:max-w-130">
      <Listbox defaultValue={selected} value={selected} onChange={setSelected}>
        <Label className="text-700-16 lg:text-700-20">등급</Label>

        <ListboxButton className="text-left focus:outline-none border border-gray-200 rounded-[2px] px-5 py-[18px] w-full text-400-14 lg:text-400-16 cursor-pointer relative">
          {selected}
          <MdArrowDropDown
            className={clsx(
              "rotate-180 duration-200 absolute right-5 top-4 w-6 h-6 lg:w-7 lg:h-7"
            )}
          />
        </ListboxButton>

        <ListboxOptions className="border border-gray-200 rounded-[2px] px-5 flex flex-col gap-5 h-[192px] justify-center">
          {options.map((opt) => (
            <ListboxOption key={opt} value={opt} className="cursor-pointer">
              {opt}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}

export function GenreSelect({ name }) {
  return (
    <div className="bg-transparent flex flex-col gap-2.5 w-full max-w-[345px] md:max-w-110 lg:max-w-130">
      <label htmlFor="" className="text-700-16 lg:text-700-20">
        장르
      </label>
      <select name={name}>
        <option value="">TRAVEL</option>
        <option value="">LANDSCAPE</option>
        <option value="">PORTRAIT</option>
        <option value="">OBJECT</option>
      </select>
    </div>
  );
}
