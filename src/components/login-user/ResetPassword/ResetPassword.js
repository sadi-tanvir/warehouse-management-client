import React, { useState } from "react";
import Input from "../../shared/re-usable-component/Input";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  // firebase
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  // reset password
  const resetPassword = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(email);
    toast("Sent email")
  };
  return (
    <div>
      <p className="text-sm font-semibold mt-2 pt-1 mb-0 ml-5">
        Forgot Password ?
        <span
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          href="#"
          className="text-green-600 cursor-pointer hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out ml-1"
        >
          reset
        </span>
      </p>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-green-800 font-bold text-2xl"
                id="exampleModalLabel"
              >
                Reset Password
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              {/* modal body start */}
              <div className="px-3">
                <form>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    divClassName="mb-6"
                    type="email"
                    placeholder="Email address"
                  />
                </form>
              </div>
              {/* modal body end */}
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={resetPassword}
                type="button"
                className="px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
