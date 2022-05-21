import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../../images/banner/banner.png";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${banner})`,
            height: "450px",
          }}
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white px-6 md:px-12">
                <h1 class="text-5xl font-bold mt-0 mb-6 uppercase">Welcome to</h1>
                <h3 class="text-xl font-bold mb-8">fresh fruits</h3>
                <button
                  onClick={() => navigate("/inventory")}
                  type="button"
                  class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Check Inventories
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
