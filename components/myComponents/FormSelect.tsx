"use client";

import { UseFormRegister } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type FormSelectProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  options: Option[];
  error?: string[];
};

export default function FormSelect({
  label,
  name,
  register,
  options,
  error,
}: FormSelectProps) {
  return (
    <div className="w-full">
      <p className="text-white w-full">{label}</p>

      <select
        {...register(name, {
          // required: "Please select a gender",
          setValueAs: (value) => (value === "" ? null : value),
        })}
        className="w-full border border-white rounded-md p-1 text-white bg-transparent"
      >
        <option value="" className="text-black">
          Select {label}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-black">
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-sm font-bold bg-red-600 text-white w-fit p-0.5 mt-2 rounded-sm">
          * {error || "Invalid field"}
        </p>
      )}
    </div>
  );
}
