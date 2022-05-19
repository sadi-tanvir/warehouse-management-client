import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import classes from "./Login.module.css"
import looog from "../../../images/large_thumbnail -2.jpg"

const Login = () => {
  return (
    <>
      <section className="h-screen">
        <div className="px-16 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src={looog}
                className="w-full rounded-lg"
                alt="Login img"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className={`block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:outline-none ${classes.input_field}`}
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className={`block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:outline-none ${classes.input_field}`}
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex">
                  <button
                    type="button"
                    className="inline-block px-16 py-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0 ml-5">
                    Don't have an account?
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                    >
                      Register
                    </a>
                  </p>
                </div>

                {/* social login */}
                <SocialLogin />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
