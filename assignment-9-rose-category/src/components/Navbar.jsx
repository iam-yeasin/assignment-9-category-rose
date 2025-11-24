import React from "react";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/services"}>Services</MyLink>
              </li>
              <li>
                <MyLink to={"/profile"}>Profile</MyLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-xl flex flex-col items-center gap-0 lg:flex-row lg:gap-2">
            <img
              src="/logo.png"
              alt=""
              className="w-18 h-8 lg:w-[94px] lg:h-[46px]"
            />
            <span className="text-[#F19020] italic">Warm Paws</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>
            <li>
              <MyLink to={"/services"}>Services</MyLink>
            </li>
            <li>
              <MyLink to={"/profile"}>Profile</MyLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Name</a>
              </li>
              <li>
                <a>Email Address</a>
              </li>
              <li>
                <a>Update Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <Link to={"/login"} className="btn">
            Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
