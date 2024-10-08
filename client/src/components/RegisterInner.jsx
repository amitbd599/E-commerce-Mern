import React, { useRef } from "react";
import UserStore from "../store/UserStore";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const RegisterInner = () => {
  let { RegisterUserRequest, isSubmit } = UserStore();
  let { emailRef, passwordRef } = useRef();

  let navigate = useNavigate();

  let submitRegistration = async () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmail(email)) {
      ErrorToast("Please enter a valid email address");
      return;
    } else if (IsEmpty(email)) {
      ErrorToast("Please enter email address");
      return;
    } else if (IsEmpty(password)) {
      ErrorToast("Please enter password");
      return;
    } else {
      await RegisterUserRequest({ email, password }).then((res) => {
        if (res) {
          SuccessToast("Registration successful!");
          navigate("/login");
        } else {
          ErrorToast("Registration failed!");
        }
      });
    }
  };
  return (
    <div className="login-page mt-100">
      <div className="container">
        <div action="#" className="login-form common-form mx-auto">
          <div className="section-header mb-3">
            <h2 className="section-heading text-center">Register</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <fieldset>
                <label className="label">Email address</label>
                <input type="email" ref={(input) => (emailRef = input)} />
              </fieldset>
            </div>
            <div className="col-12">
              <fieldset>
                <label className="label">Password</label>
                <input type="password" ref={(input) => (passwordRef = input)} />
              </fieldset>
            </div>
            <div className="col-12 mt-3">
              {isSubmit === true ? (
                <button
                  className="btn-primary d-block mt-3 btn-signin"
                  disabled
                >
                  <Spinner />
                </button>
              ) : (
                <button
                  onClick={submitRegistration}
                  type="submit"
                  className="btn-primary d-block mt-3 btn-signin"
                >
                  CREATE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterInner;
