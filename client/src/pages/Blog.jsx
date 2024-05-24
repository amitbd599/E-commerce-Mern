import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import BlogItemsInner from '../components/BlogItemsInner'

const Blog = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Blog"} />

            {/* AboutInner */}
            <BlogItemsInner item={12} />


            {/* Footer */}
            <Footer />
        </>
    )
}

export default Blog