"use client";

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
    const respData = await loginUserApi(data);
    console.log(respData);
    if (respData?.errors != null) {
      setErrorsForm(respData.errors);
    } else {
      // redirect to the home page
      router.push("/");
    }

    // console.log(respData);

    // hiding the spinner
    // setHiddenSpin(true);
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
        <div className="w-full">
          <p className="text-white w-full mb-2">Email</p>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-white rounded-md p-1 text-white"
          />
          <p className="text-red-500">{errorsForm?.email?.[0]}</p>
        </div>

        {/* Password */}
        <div className="w-full">
          <p className="text-white w-full mb-2">Password</p>
          <input
            {...register("password")}
            type="password"
            className="w-full border border-white rounded-md p-1 text-white"
          />
          <p className="text-red-500">{errorsForm?.password?.[0]}</p>
        </div>

        <div className="col-span-2 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 cursor-pointer flex items-center gap-4">
            <FaSpinner
              className={"text-lg animate-spin " + (hiddenSpin && "hidden")}
            />
            <p>Login</p>
          </button>
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
