import React, { useRef } from "react";
import UserStore from "../store/UserStore";
import { ErrorToast, SuccessToast, getEmail } from "../helper/helper";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginInner = () => {
  const navigate = useNavigate();
  let { loginUserRequest } = UserStore();
  let location = useLocation();
  let { emailRef, passwordRef } = useRef();

  let from = location.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();

    let email = emailRef.value;
    let password = passwordRef.value;
    await loginUserRequest({ email, password }).then((res) => {
      if (res) {
        SuccessToast("Login successful!");
        navigate(from, { replace: true });
      } else {
        ErrorToast("Login failed!");
      }
    });
  };

  console.log(getEmail("email"));
  return (
    <div className="login-page mt-100">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="login-form common-form mx-auto"
        >
          <div className="section-header mb-3">
            <h2 className="section-heading text-center">Login</h2>
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
              <Link to="/forgot-password" className="text_14 d-block">
                Forgot your password?
              </Link>
              <button
                type="submit"
                className="btn-primary d-block mt-4 btn-signin"
              >
                SIGN IN
              </button>
              <Link to="/register" className="btn-secondary mt-2 btn-signin">
                CREATE AN ACCOUNT
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginInner;
