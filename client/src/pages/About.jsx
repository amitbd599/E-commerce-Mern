import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import AboutInner from '../components/AboutInner'

const About = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"About Us"} />

            {/* AboutInner */}
            <AboutInner />


            {/* Footer */}
            <Footer />
        </>
    )
}

export default About