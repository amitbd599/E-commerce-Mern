
const LoginInner = () => {
    return (
        <div className="">
            <div className="flex items-center justify-center w-full h-screen lg:p-12 ">
                <div className="flex items-center justify-center xl:p-10">
                    <form className="flex flex-col w-full h-full p-[30px] text-center bg-white shadow-lg rounded-3xl">
                        <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                            Sign In
                        </h3>
                        <p className="mb-4 text-grey-700">Enter your email and password</p>


                        <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">
                            Email*
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="mail@loopple.com"
                            className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                        />
                        <label
                            htmlFor="password"
                            className="mb-2 text-sm text-start text-grey-900"
                        >
                            Password*
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter a password"
                            className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                        />

                        <button className="w-full my_btn">
                            Sign In
                        </button>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginInner