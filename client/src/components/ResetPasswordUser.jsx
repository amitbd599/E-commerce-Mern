import React, { useRef } from "react";
import UserStore from "../store/UserStore";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
  setEmail,
} from "../helper/helper";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";

const ResetPasswordUser = () => {
  let { ResetPasswordRequest, isSubmit } = UserStore();
  let { passwordRef, rePasswordRef } = useRef();
  let { email, code } = useParams();

  let navigate = useNavigate();

  let submitRegistration = async () => {
    let password = passwordRef.value;
    let rePassword = rePasswordRef.value;

    if (IsEmpty(password)) {
      ErrorToast("Please enter password");
      return;
    } else if (IsEmpty(rePassword)) {
      ErrorToast("Please re-enter password");
      return;
    } else if (password !== rePassword) {
      ErrorToast("Password not match!");
      return;
    } else {
      await ResetPasswordRequest(email, code, password).then((res) => {
        if (res) {
          SuccessToast("Password change successful!");
          navigate("/login");
        } else {
          ErrorToast("Password change unsuccessful!");
        }
      });
    }
  };
  return (
    <div className="login-page mt-100">
      <div className="container">
        <div action="#" className="login-form common-form mx-auto">
          <div className="section-header mb-3">
            <h2 className=" text-center">Enter your email</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <fieldset>
                <label className="label">Enter new password</label>
                <input type="email" ref={(input) => (passwordRef = input)} />
              </fieldset>
            </div>
            <div className="col-12">
              <fieldset>
                <label className="label">Re-enter this password</label>
                <input type="email" ref={(input) => (rePasswordRef = input)} />
              </fieldset>
            </div>
            <div className="col-12 mt-3">
              {isSubmit === true ? (
                <button className="btn-primary d-block mt-3 btn-signin">
                  <Spinner />
                </button>
              ) : (
                <button
                  onClick={submitRegistration}
                  type="submit"
                  className="btn-primary d-block mt-3 btn-signin"
                >
                  Send OTP Code
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordUser;
