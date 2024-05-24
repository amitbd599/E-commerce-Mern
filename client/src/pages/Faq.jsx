import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import FaqInner from '../components/FaqInner'

const Faq = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Faq"} />

            {/* FaqInner */}
            <FaqInner />


            {/* Footer */}
            <Footer />
        </>
    )
}

export default Faq