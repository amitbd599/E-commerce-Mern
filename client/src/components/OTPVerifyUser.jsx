import React, { useState } from "react";
import UserStore from "../store/UserStore";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
  getEmail,
} from "../helper/helper";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ReactCodeInput from "react-code-input";

const OTPVerifyUser = () => {
  let { OTPVerifyUserRequest, isSubmit } = UserStore();
  const [code, setCode] = useState("");

  let { email } = useParams();

  let navigate = useNavigate();

  let submitRegistration = async () => {
    if (IsEmail(email)) {
      ErrorToast("Please enter a valid email address");
      return;
    } else if (IsEmpty(email)) {
      ErrorToast("Please enter email address");
      return;
    } else if (IsEmpty(code)) {
      ErrorToast("Please enter otp code");
      return;
    } else {
      await OTPVerifyUserRequest(email, code).then((res) => {
        if (res) {
          SuccessToast("OTP verify successful!");
          navigate(`/reset-password/${email}/${code}`);
        } else {
          ErrorToast("OTP verify fail!");
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
                <ReactCodeInput
                  type="text"
                  fields={6}
                  onChange={(e) => setCode(e)}
                />
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

export default OTPVerifyUser;
