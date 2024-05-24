import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CartInner from '../components/CartInner'

const Cart = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Cart"} />

            {/* CartInner */}
            <CartInner />


            {/* Footer */}
            <Footer />
        </>
    )
}

export default Cart