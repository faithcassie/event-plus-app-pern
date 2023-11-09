import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-[80%] mt-3 h-fit mx-auto flex justify-between items-center ">
      <Link to="/">
        <div className="text-5xl font-semibold text-orange-400 ">
          <h1>event+</h1>
        </div>
      </Link>
      <div className="flex md:w-[300px] w-auto items-center">
        <input
          placeholder="Search"
          className="hidden md:block w-[300px] bg-gray-200 py-2 px-5 rounded-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" md:hidden w-6 h-6 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <div className="w-fit lg:w-20 text-right py-2">USER</div>
      </div>
    </div>
  );
};

export default NavBar;
