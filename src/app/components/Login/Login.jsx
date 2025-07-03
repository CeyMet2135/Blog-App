import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-row items-center ">
      <div className="border-none">
        <Link href="/Login" className="flex items-center">
          <FaUserCircle size={28} />
        </Link>
      </div>

      <div>
        <span className="ml-2 text-sm">Login</span>
      </div>
    </div>
  );
};

export default Login;
