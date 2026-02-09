"use client";

import FormInput from "@/components/myComponents/FormInput";
import FormSelect from "@/components/myComponents/FormSelect";
import { registerUserApi } from "@/services/user.service";
import { UserRegisterType } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaUserPlus } from "react-icons/fa";

function Register() {
  // States
  const { register, handleSubmit } = useForm();
  const [errorsForm, setErrorsForm] = useState<any>();
  const [hiddenSpin, setHiddenSpin] = useState<boolean>(true);
  const router = useRouter();

  // submitting the form for registration
  const onSubmit = async (data: UserRegisterType) => {
    // Clear previous errors before a new attempt
    setErrorsForm(null);

    // make the spin visible
    setHiddenSpin(false);

    const resData = await registerUserApi(data);

    if (resData?.errors) {
      setErrorsForm(resData.errors);
    } else {
      // Handle success (e.g., redirect to login or show success message)
      router.push("/auth/login");
    }

    // hide the spin
    setHiddenSpin(true);
  };
  return (
    <div className="w-[80vmin] h-max bg-[rgba(255,255,255,0.2)] rounded-md flex flex-col justify-start gap-3 p-4 z-10 backdrop-blur-3xl">
      <div className="text-white flex justify-center items-center">
        <p className="text-sm md:text-5xl font-bold">FRIENDIFY</p>
      </div>
      <hr className="border-white" />
      <div className="text-white flex justify-center items-center gap-3">
        <FaUserPlus className="text-4xl" />
        <p className="text-3xl">Register</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="flex justify-between col-span-2 gap-4">
          <FormInput
            label="First Name"
            placeholder="you first name"
            type="text"
            name="first_name"
            register={register}
            error={errorsForm?.first_name}
          />

          <FormInput
            label="Last Name"
            placeholder="your last name"
            type="text"
            name="last_name"
            register={register}
            error={errorsForm?.last_name}
          />
        </div>
        <div className="flex justify-between col-span-2 gap-4">
          <FormInput
            label="Username"
            placeholder="you username"
            name="username"
            type="text"
            register={register}
            error={errorsForm?.username}
          />

          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            placeholder="your phone number +212 6XXXXXXX"
            register={register}
            error={errorsForm?.phone}
          />
        </div>

        <div className="col-span-2">
          {/* Email */}
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="your email"
            register={register}
            error={errorsForm?.email}
          />
        </div>
        <div className="col-span-2 flex justify-between gap-4">
          <FormInput
            label="Birth Date"
            name="birth_date"
            type="date"
            register={register}
            error={errorsForm?.birth_date}
          />
          <FormSelect
            label="Gender"
            name="gender"
            register={register}
            error={errorsForm?.gender}
            options={[
              { label: "Man", value: "man" },
              { label: "Woman", value: "woman" },
            ]}
          />
        </div>
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="your password"
          register={register}
          error={errorsForm?.password}
        />

        <FormInput
          label="Confirm Password"
          name="password_confirmation"
          type="password"
          placeholder="confirm your password"
          register={register}
          error={errorsForm?.password_confirmation}
        />

        <div className="col-span-2 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-6 cursor-pointer flex items-center gap-2">
            <FaSpinner
              className={"text-lg animate-spin " + (hiddenSpin && "hidden")}
            />
            <p>Register</p>
          </button>
        </div>
      </form>
      <hr className="border-white" />
      <div className="w-full text-white">
        <p className="text-lg font-medium">
          Do you have already an account ?{" "}
          <Link
            href={"/auth/login"}
            className="text-blue-300 font-medium underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
