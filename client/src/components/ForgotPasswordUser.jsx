import React, { useRef } from "react";
import UserStore from "../store/UserStore";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
  setEmail,
} from "../helper/helper";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const ForgotPasswordUser = () => {
  let { ForgotPasswordUserRequest, isSubmit } = UserStore();
  let { emailRef } = useRef();

  let navigate = useNavigate();

  let submitRegistration = async () => {
    let email = emailRef.value;

    if (IsEmail(email)) {
      ErrorToast("Please enter a valid email address");
      return;
    } else if (IsEmpty(email)) {
      ErrorToast("Please enter email address");
      return;
    } else {
      await ForgotPasswordUserRequest(email).then((res) => {
        if (res) {
          setEmail(email);
          SuccessToast("OTP code send successful!");
          navigate(`/otp-verify/${email}`);
        } else {
          ErrorToast("OTP code send failed!");
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
                <label className="label">Email address</label>
                <input type="email" ref={(input) => (emailRef = input)} />
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

export default ForgotPasswordUser;
