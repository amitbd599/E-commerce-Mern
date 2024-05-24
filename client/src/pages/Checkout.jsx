import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CheckoutInner from '../components/CheckoutInner'

const Checkout = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Checkout"} />

            {/* CheckoutInner */}
            <CheckoutInner />


            {/* Footer */}
            <Footer />
        </>
    )
}

export default Checkout