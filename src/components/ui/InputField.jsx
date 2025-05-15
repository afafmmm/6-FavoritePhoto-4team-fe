import React from "react";

function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  labelClassName = "",
  error = "",
}) {
  const isError = Boolean(error);

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className={`text-white ${labelClassName}`}>{label}</label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border border-gray-400 rounded bg-my-black text-white placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white
          ${
            isError
              ? "border border-red-500 focus:ring-red-500"
              : "border border-gray-400 focus:ring-white"
          }`}
      />
      {isError && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default InputField;
