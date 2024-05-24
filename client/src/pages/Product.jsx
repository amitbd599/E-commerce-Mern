import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Products from '../components/Products'

const Product = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"ProductDetails"} />

            {/* Products */}
            <Products />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Product