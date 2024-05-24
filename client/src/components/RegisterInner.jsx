import React from 'react'

const RegisterInner = () => {
    return (
        <div className="login-page mt-100">
            <div className="container">
                <form action="#" className="login-form common-form mx-auto">
                    <div className="section-header mb-3">
                        <h2 className="section-heading text-center">Register</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <fieldset>
                                <label className="label">First name</label>
                                <input type="text" />
                            </fieldset>
                        </div>
                        <div className="col-12">
                            <fieldset>
                                <label className="label">Last name</label>
                                <input type="text" />
                            </fieldset>
                        </div>
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
                            <button type="submit" className="btn-primary d-block mt-3 btn-signin">
                                CREATE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegisterInner