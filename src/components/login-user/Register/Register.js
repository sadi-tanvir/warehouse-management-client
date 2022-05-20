import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import register from "../../../images/large_thumbnail.jpg";
import Input from "../../shared/re-usable-component/Input";
import Button from "../../shared/re-usable-component/Button";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  // state
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // router
  const navigate = useNavigate();

  //   handle change
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //   handle submit
  const handleSubmit = async (e) => {
      e.preventDefault()
    const { name, email, password } = userInfo;
    createUserWithEmailAndPassword(email, password,{sendEmailVerification:true});
  };
  return (
    <>
      <section className="h-screen">
        <div className="px-16 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src={register}
                className="w-full rounded-lg"
                alt="Login img"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                <Input
                  onChange={handleAddChange}
                  name="name"
                  divClass="mb-6"
                  type="text"
                  placeholder="Name"
                />
                <Input
                  onChange={handleAddChange}
                  name="email"
                  divClass="mb-6"
                  type="email"
                  placeholder="Email address"
                />
                <Input
                  onChange={handleAddChange}
                  name="password"
                  divClass="mb-6"
                  type="password"
                  placeholder="Password"
                />

                <div className="flex">
                  <Button
                    btnClass="inline-block px-16"
                    type="submit"
                    btnColor="green"
                  >
                    Register
                  </Button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0 ml-5">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                    >
                      Login
                    </Link>
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

export default Register;
