import React, { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import classes from "../../../styles/style.module.css";
import login from "../../../images/large_thumbnail -2.jpg";
import Input from "../../shared/re-usable-component/Input";
import Button from "../../shared/re-usable-component/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ReactHelmet from "../../shared/ReactHelmet/ReactHelmet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { apiBaseUrl } from "../../utils/apiBaseUrl";
import setAuthToken from "../../utils/setAuthToken";

const Login = () => {
    // state
    const [userInfo, setUserInfo] = useState({
      email: "",
      password: "",
    });

    
    // firebase auth
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    // router
    const navigate = useNavigate();
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";


    if(user){
      navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {
      errorElement = <p className='text-danger mt-5'>Error: {error?.message}</p>
      // toast(error?.message)
    }

    //   handle change
    const handleAddChange = (e) => {
      const { name, value } = e.target;
      setUserInfo({ ...userInfo, [name]: value });
    };
  
    //   handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
      const { email, password } = userInfo;
      await signInWithEmailAndPassword(email, password);
      const res = await axios.post(`${apiBaseUrl}/login`, {email})
      // set value to localStorage
    localStorage.setItem('user', JSON.stringify(res.data._user));
    localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));

    // set authentication token
    setAuthToken(res.data.accessToken)
    };
  return (
    <>
    {/* <ToastContainer /> */}
      <ReactHelmet title="Login" />
      <section className="h-screen">
        <div className="px-16 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={login} className="w-full rounded-lg" alt="Login img" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <Input
                  onChange={handleAddChange}
                  name="email"
                  divClass="mb-6"
                  type="email"
                  placeholder="Email address"
                />

                {/* Password input */}
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
                    Login
                  </Button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0 ml-5">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                    >
                      Register
                    </Link>
                  </p>
                </div>
                  {errorElement}
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
