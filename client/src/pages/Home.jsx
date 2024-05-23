import React from 'react'
import Announcement from '../components/Announcement'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustedBadge from '../components/TrustedBadge'
import Banner from '../components/Banner'
import CollectionProduct from '../components/CollectionProduct'

const Home = () => {
    return (
        <>
            {/* Announcement */}
            <Announcement />

            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero />

            {/* TrustedBadge */}
            <TrustedBadge />

            {/* Banner */}
            <Banner />

            {/* CollectionProduct */}
            <CollectionProduct item={10} />
        </>
    )
}

export default Home