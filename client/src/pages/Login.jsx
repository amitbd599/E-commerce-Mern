import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import LoginInner from '../components/LoginInner'

const Login = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Login"} />

            {/* LoginInner */}
            <LoginInner />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Login