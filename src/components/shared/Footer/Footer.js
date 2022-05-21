import React from "react";
import Facebook from "./icon/Facebook";
import Google from "./icon/Google";
import Instagram from "./icon/Instagram";
import Twitter from "./icon/Twitter";
import Linkedin from "./icon/Linkedin";
import Github from "./icon/Github";

const Footer = () => {
  return (
    <>
      <footer className="text-center bg-gray-700 text-white mt-20">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6">
            <Facebook />
            <Twitter />
            <Google />
            <Instagram />
            <Linkedin />
            <Github />
          </div>
        </div>

        <div
          className="text-center p-4"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2022 Copyright: fresh fruits ltd.
        </div>
      </footer>
    </>
  );
};

export default Footer;
