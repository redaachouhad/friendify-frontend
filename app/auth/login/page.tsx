"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
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
        <div className="w-full">
          <p className="text-white w-full mb-2">Email</p>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>

        <div className="w-full">
          <p className="text-white w-full mb-2">Password</p>
          <input
            {...register("password")}
            type="password"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>

        <div className="col-span-2 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-6 cursor-pointer ">
            Login
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
