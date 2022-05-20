import React from "react";
import { Link } from "react-router-dom";

const Profile = ({img}) => {
  return (
    <>
      <Link
        class="dropdown-toggle flex items-center hidden-arrow"
        to="#"
        id="dropdownMenuButton2"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={img}
          class="rounded-full"
          style={{ height: "25px", width: "25px" }}
          alt=""
          loading="lazy"
        />
      </Link>
      <ul
        class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
        aria-labelledby="dropdownMenuButton2"
      >
        <li>
          <Link
            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            to="#"
          >
            Action
          </Link>
        </li>
        <li>
          <Link
            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            to="#"
          >
            Another action
          </Link>
        </li>
        <li>
          <Link
            class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            to="#"
          >
            Something else here
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Profile;
