import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import MyLink from "./MyLink";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
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
          <a
            href="/"
            className="btn btn-ghost lg:text-xl flex flex-col items-center gap-0 lg:flex-row lg:gap-2"
          >
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
          {user ? (
            <div className="dropdown dropdown-end relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar relative group"
              >
                {/* HOVER */}
                <div
                  className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2
                   flex flex-col justify-center
                   bg-white text-black rounded-md
                   px-2 h-16
                   wrap-break-word
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-150"
                >
                  <h3 className="text-[11px] font-medium leading-none pb-2">
                    <span>
                      Hi <br />
                    </span>
                    {user.displayName || user.email}
                  </h3>

                  {/* next feature */}
                  {/* <p className="text-[10px] leading-none opacity-90">
                  Click to see more
                </p> */}
                </div>

                {/* AVATAR */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    alt="User avatar"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* next feature*/}
              {/* DROPDOWN */}
              {/* <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Name</a>
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
            </ul> */}
            </div>
          ) : null}

          <div>
            {loading ? (
              <span className="loading loading-spinner text-black"></span>
            ) : user ? (
              <button className="btn ml-5 mr-5" onClick={handleLogout}>
                Sign Out
              </button>
            ) : (
              <Link to="/login" className="btn ml-5 mr-5">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
