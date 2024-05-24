import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetailsInner from '../components/ProductDetailsInner'

const ProductDetails = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"ProductDetails"} />

            {/* ProductDetailsInner */}
            <ProductDetailsInner />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default ProductDetails