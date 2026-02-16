"use client";

import FormInput from "@/components/myComponents/FormInput";
import { loginUserApi } from "@/services/user.service";
import { UserLoginType } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaUserAlt } from "react-icons/fa";

function Login() {
  // States
  const { register, handleSubmit } = useForm<UserLoginType>();

  const [errorsForm, setErrorsForm] = useState<any>();
  const [hiddenSpin, setHiddenSpin] = useState<boolean>(true);
  const router = useRouter();

  const onSubmit = async (data: UserLoginType) => {
    // showing the spinner
    setHiddenSpin(false);

    // login the user and get the response
    const resData = await loginUserApi(data);

    if (resData.status === 200) {
      // Registration successful, redirect to login page
      // router.push("/home");
    } else {
      // Validation errors from the server
      if (resData?.errors) {
        setErrorsForm(resData.errors);
      }
    }

    // console.log(respData);

    // hiding the spinner
    setHiddenSpin(true);
  };

  return (
    <div className="w-[70vmin] bg-[rgba(255,255,255,0.2)] rounded-md flex flex-col gap-8 p-6 z-10">
      <div className="text-white flex justify-center items-center gap-4">
        <p className="text-5xl font-bold">FRIENDIFY</p>
      </div>
      <hr className="border-white" />
      <div className="text-white flex justify-center items-center gap-4">
        <FaUserAlt className="text-4xl" />
        <p className="text-3xl">Login</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Email */}

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="your email"
          register={register}
          error={errorsForm?.email}
        />

        {/* Password */}
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="your password"
          register={register}
          error={errorsForm?.password}
        />

        <div className="col-span-2 flex justify-center flex-col items-center gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 cursor-pointer flex items-center gap-4">
            <FaSpinner
              className={"text-lg animate-spin " + (hiddenSpin && "hidden")}
            />
            <p>Login</p>
          </button>
          {errorsForm?.authError && (
            <p className="text-white font-semibold bg-red-500 p-0.5 rounded-md">
              {"* " + errorsForm.authError}
            </p>
          )}
        </div>
      </form>
      <hr className="border-white" />
      <div className="w-full text-white">
        <p className="text-lg font-medium">
          Are you a new member?{" "}
          <Link
            href={"/auth/register"}
            className="text-blue-300 font-medium underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
