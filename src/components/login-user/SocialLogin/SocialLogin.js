import axios from "axios";
import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { apiBaseUrl } from "../../utils/apiBaseUrl";
import setAuthToken from "../../utils/setAuthToken";
import GithubIcon from "./icon/GithubIcon";
import GoogleIcon from "./icon/GoogleIcon";

const SocialLogin = () => {
  // google signin
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // router
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // github signin
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }

  // handle google signin
  const handleGoogleSignIn = async () => {
    await signInWithGoogle()
    
  }

  return (
    <>
      {/* error message */}
      {googleError && (
        <p className="text-danger mt-5">Error: {googleError?.message}</p>
      )}
      {githubError && (
        <p className="text-danger mt-5">Error: {githubError?.message}</p>
      )}
      {/* {googleError && <small className="mt-10 inline-block text-red-600">{googleError}</small>} */}
      <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p class="text-center font-semibold mx-4 mb-0">Or Login With</p>
      </div>

      {/* social login */}
      <div class="w-full flex justify-center items-center">
        <div class="flex flex-row items-center justify-center lg:justify-start">
          {/* google icon */}
          <GoogleIcon onClick={handleGoogleSignIn} />

          {/* github icon */}
          <GithubIcon onClick={() => signInWithGithub()} />
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
