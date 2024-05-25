import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ErrorInner from '../components/ErrorInner'

const Error = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Error"} />

            {/* ErrorInner */}
            <ErrorInner />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Error