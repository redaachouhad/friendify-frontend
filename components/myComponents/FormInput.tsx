"use client";

import { UseFormRegister } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: string[];
};

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}: FormInputProps) {
  return (
    <div className="w-full">
      <p className="text-white w-full">{label}</p>

      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full border border-white rounded-md p-1 text-white bg-transparent"
      />

      {error && (
        <p className="bg-red-600 text-sm font-bold text-white w-fit p-0.5 mt-2 rounded-sm">
          * {error || "Invalid field"}
        </p>
      )}
    </div>
  );
}
