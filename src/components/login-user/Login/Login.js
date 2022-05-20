import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import classes from "../../../styles/style.module.css";
import login from "../../../images/large_thumbnail -2.jpg";
import Input from "../../shared/re-usable-component/Input";
import Button from "../../shared/re-usable-component/Button";

const Login = () => {
  return (
    <>
      <section className="h-screen">
        <div className="px-16 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={login} className="w-full rounded-lg" alt="Login img" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                {/* Email input */}
                <Input
                  divClass="mb-6"
                  type="email"
                  placeholder="Email address"
                />

                {/* Password input */}
                <Input
                  divClass="mb-6"
                  type="password"
                  placeholder="Password"
                />

                <div className="flex">
                  <Button btnClass="inline-block px-16" type="submit" btnColor="green">Login</Button>
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
