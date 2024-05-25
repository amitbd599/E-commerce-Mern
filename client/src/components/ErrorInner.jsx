import React from 'react'
import { Link } from 'react-router-dom'

const ErrorInner = () => {
    return (
        <div className="error-page mt-100">
            <div className="container">
                <div className="error-content text-center">
                    <div className="error-img mx-auto">
                        <img src="assets/img/error/error.png" alt="error" />
                    </div>
                    <p className="error-subtitle">Page Not Found</p>
                    <Link to="/" className="btn-primary mt-4">
                        BACK TO HOMEPAGE
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ErrorInner