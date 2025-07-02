import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="capitalize bg-gray-700 text-orange-300  rounded px-2 py-1">
        blog Page
      </div>
    </Link>
  );
};

export default Logo;
