"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submitting the form for registration
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="w-[80vmin] h-max bg-[rgba(255,255,255,0.3)] rounded-md flex flex-col justify-start gap-3 p-4 z-10 backdrop-blur-md">
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
        <div className="w-full">
          <p className="text-white w-full">First Name</p>
          <input
            {...register("first_name")}
            type="text"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>
        <div className="w-full">
          <p className="text-white w-full">Last Name</p>
          <input
            {...register("last_name")}
            type="text"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>
        <div className="w-full col-span-2">
          <p className="text-white w-full">Email</p>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>
        <div className="w-full">
          <p className="text-white w-full">Birth Date</p>
          <input
            {...register("birth_date")}
            type="date"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>
        <div className="w-full">
          <p className="text-white w-full">Gender</p>

          <select
            {...register("gender")}
            name="gender"
            className="w-full border border-white rounded-md p-1 text-white"
          >
            <option value="" className="text-black">
              Select Gender
            </option>
            <option value="male" className="text-black">
              Male
            </option>
            <option value="female" className="text-black">
              Female
            </option>
          </select>
        </div>
        <div className="w-full">
          <p className="text-white w-full">Password</p>
          <input
            {...register("password")}
            type="password"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>
        <div className="w-full">
          <p className="text-white w-full">Confirm Password</p>
          <input
            {...register("password_confirmation")}
            type="password"
            className="w-full border border-white rounded-md p-1 text-white"
          />
        </div>

        <div className="col-span-2 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-6 cursor-pointer ">
            Register
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
