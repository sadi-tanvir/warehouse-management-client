import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink/CustomLink";
import Profile from "./Dropdown/Profile";

const Header = () => {
  return (
    <>
      <header
        class="w-full flex justify-center items-center shadow-lg bg-gray-100 fixed">
        <nav class=" relative w-11/12 flex flex-wrap items-center justify-between py-3 text-gray-500 navbar navbar-expand-lg navbar-light">
          <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
              <Link class="flex items-center lg:mt-0 mr-1" to="/">
                <img
                  src="https://i.ibb.co/Pj3gt1x/logo.png"
                  className="w-24"
                  alt="logo"
                />
              </Link>
              {/* <!-- Left links Start --> */}
                <CustomLink class="mr-2 py-1 px-2" to="/dashboard">
                    Dashboard
                  </CustomLink>
                <CustomLink class="mr-2 py-1 px-2" to="/login">
                    Login
                  </CustomLink>
                <CustomLink class="mr-2 py-1 px-2" to="/login">
                    Login
                  </CustomLink>
            </div>{/* <!-- Left element end --> */}

            {/* <!-- Right elements Start --> */}
              <div class="flex items-center relative">
                <div class="dropdown relativ mr-2">
                    <Profile />
                  </div>
                  <CustomLink class="mr-2 py-1 px-2" to="/register" >
                    Register
                  </CustomLink>
                  <CustomLink class="mr-2 py-1 px-2" to="/login">
                    Login
                  </CustomLink>
                </div>
          </div> {/* <!-- Right elements End --> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
