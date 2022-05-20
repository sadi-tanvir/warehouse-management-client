import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "./CustomLink/CustomLink";
import Profile from "./Dropdown/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import Button from "../re-usable-component/Button";
import emptyAvatar from "../../../images/empty-avatar.png";

const Header = () => {
  // router
  const navigate = useNavigate();

  // firebase
  const [user, loading, error] = useAuthState(auth);

  // handle signout
  const handleSignOut = () => {
    signOut(auth)
    navigate('/login')
  } 

  return (
    <>
      <header className="w-full shadow-lg bg-gray-100 flex justify-center items-center">
        <nav className="w-12/12 md:w-10/12 flex justify-between items-center py-3">
          <Link className="flex items-center lg:mt-0 mr-1" to="/">
            <img
              src="https://i.ibb.co/Pj3gt1x/logo.png"
              className="w-24"
              alt="logo"
            />
          </Link>

          <div className="flex justify-center items-center">
            <CustomLink className="ml-2 md:ml-5" to="/">
              Home
            </CustomLink>
            <CustomLink className="ml-2 md:ml-5" to="/inventory">
              Manage Inventories
            </CustomLink>
            <CustomLink className="ml-2 md:ml-5" to="/additem">
              Add Item
            </CustomLink>
            <CustomLink className="ml-2 md:ml-5" to="/myitem">
              My Item
            </CustomLink>

            {user ? (
              <>
                <div className="dropdown relative ml-2 md:ml-5">
                  <Profile img={user?.photoURL ? user.photoURL : emptyAvatar} />
                </div>
                <Button
                  onClick={handleSignOut}
                  btnClass="inline-block px-6 ml-3"
                  btnColor="slate"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <CustomLink className=" ml-2 md:ml-5" to="/register">
                  Register
                </CustomLink>
                <CustomLink className=" ml-2 md:ml-5" to="/login">
                  Login
                </CustomLink>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
