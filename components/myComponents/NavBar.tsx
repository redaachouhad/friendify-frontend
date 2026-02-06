"use client";

import StyledBadge from "@/helpers/StyledBadge";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";

function NavBar() {
  const router = useRouter();
  return (
    <div className="flex bg-blue-900 p-2 items-center justify-between gap-4 h-12 px-5 sticky top-0 w-full z-10">
      <div className="flex items-center gap-2 flex-1/3">
        <h1 className="text-white text-xl font-bold">FRIENDIFY</h1>
        <div className="flex items-center bg-white rounded-full gap-1 px-2 flex-1">
          <FaSearch />
          <input type="text" className="flex-1 outline-none p-1" />
        </div>
      </div>

      <div className="flex flex-row gap-2 text-white flex-1/3 justify-around text-3xl">
        <IoHome
          className="cursor-pointer"
          onClick={() => router.push("/home")}
        />
        <FaUserGroup className="cursor-pointer" />
        <MdOutlineOndemandVideo className="cursor-pointer" />
      </div>

      <div className="flex flex-row justify-end items-center gap-2 text-white flex-1/3">
        <IoIosNotifications className="cursor-pointer text-2xl" />
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
          onClick={() => router.push("/profile")}
          className="cursor-pointer"
        >
          <Avatar alt="Remy Sharp" src="2.jpg" />
        </StyledBadge>
      </div>
    </div>
  );
}

export default NavBar;
