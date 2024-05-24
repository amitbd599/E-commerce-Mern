import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import BlogDetailsInner from '../components/BlogDetailsInner'

const BlogDetails = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb title={"Blog Details"} />

            {/* BlogDetailsInner */}
            <BlogDetailsInner />


            {/* Footer */}
            <Footer />
        </>
    )
}

export default BlogDetails