import React from 'react'

const LoginInner = () => {
    return (
        <div className="login-page mt-100">
            <div className="container">
                <form action="#" className="login-form common-form mx-auto">
                    <div className="section-header mb-3">
                        <h2 className="section-heading text-center">Login</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <fieldset>
                                <label className="label">Email address</label>
                                <input type="email" />
                            </fieldset>
                        </div>
                        <div className="col-12">
                            <fieldset>
                                <label className="label">Password</label>
                                <input type="password" />
                            </fieldset>
                        </div>
                        <div className="col-12 mt-3">
                            <a href="#" className="text_14 d-block">
                                Forgot your password?
                            </a>
                            <button type="submit" className="btn-primary d-block mt-4 btn-signin">
                                SIGN IN
                            </button>
                            <a href="register.html" className="btn-secondary mt-2 btn-signin">
                                CREATE AN ACCOUNT
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginInner