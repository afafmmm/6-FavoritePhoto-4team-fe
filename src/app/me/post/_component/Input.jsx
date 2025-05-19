import clsx from "clsx";
import React from "react";

export default function Input({
  label,
  name,
  placeholder = "",
  value,
  onChange,
  error = "",
}) {
  return (
    <div className="bg-transparent flex flex-col gap-2.5 w-full max-w-[345px] md:max-w-110 lg:max-w-130">
      <label className="text-700-16 lg:text-700-20">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          error ? "border-my-red" : "border-gray-200",
          "border rounded-[2px] px-5 py-[18px] w-full placeholder:text-gray-200 placeholder:text-300-14 lg:placeholder:text-300-16 focus:outline-none text-400-14 lg:text-400-16"
        )}
      />
      {error && (
        <p className="text-my-red text-300-14 lg:text-300-16">{error}</p>
      )}
    </div>
  );
}
