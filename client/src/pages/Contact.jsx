import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ContactInner from '../components/ContactInner'

const Contact = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Contact"} />

            {/* ContactInner */}
            <ContactInner />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Contact