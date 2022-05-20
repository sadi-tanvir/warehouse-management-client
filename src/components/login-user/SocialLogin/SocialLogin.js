import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import GithubIcon from "./icon/GithubIcon";
import GoogleIcon from "./icon/GoogleIcon";


const SocialLogin = () => {
  // google signin
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
console.log(googleUser);

    // router
    const navigate = useNavigate();

  // github signin
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  if(googleUser || githubUser){
    navigate('/')
  }

  return (
    <>
        {/* {googleError && <small className="mt-10 inline-block text-red-600">{googleError}</small>} */}
      <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p class="text-center font-semibold mx-4 mb-0">Or Login With</p>
      </div>

      {/* social login */}
      <div class="w-full flex justify-center items-center">
        <div class="flex flex-row items-center justify-center lg:justify-start">
          {/* google icon */}
          <GoogleIcon onClick={() => signInWithGoogle()} />

          {/* github icon */}
          <GithubIcon onClick={() => signInWithGithub()} />
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
