import Logo from "@/app/Logo/page";
import Link from "next/link";
import React from "react";
import Login from "../../Login/Login";

const Navbar = () => {
  return (
    <div className="bg-gray-200 p-4 shadow-md  border-b-2 border-gray-200">
      <div className="container flex items-center justify-between mx-auto">
        <Logo />
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
