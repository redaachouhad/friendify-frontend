"use client";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function NavBar() {
  return (
    <div className="flex bg-blue-900 p-2 items-center justify-between gap-4 h-12">
      <h1 className="text-white text-3xl font-bold">FRIENDIFY</h1>
      <div className="flex items-center bg-white rounded-full w-[70vmin] gap-1 px-2">
        <FaSearch />
        <input type="text" className="flex-1 outline-none p-1" />
      </div>
      <div className="flex flex-row gap-2 text-white">
        <Link href={"/home"} className={"underline"}>
          HomePage
        </Link>
        <Link href={"/profile"}>Profile</Link>
      </div>

      <div className="flex flex-row items-center gap-2 text-white">
        <IoIosNotifications className="cursor-pointer text-2xl" />
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src="2.jpg" />
        </StyledBadge>
      </div>
    </div>
  );
}

export default NavBar;
