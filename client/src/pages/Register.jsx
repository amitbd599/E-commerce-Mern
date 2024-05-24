import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import RegisterInner from '../components/RegisterInner'

const Register = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Register"} />

            {/* RegisterInner */}
            <RegisterInner />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Register