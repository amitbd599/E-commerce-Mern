import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ContactInner from '../components/ContactInner'
import WishlistInner from '../components/WishlistInner'

const Wishlist = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Wishlist"} />

            {/* WishlistInner */}
            <WishlistInner />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Wishlist