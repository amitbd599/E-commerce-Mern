import React, { useEffect } from 'react';
import Announcement from '../components/Announcement';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBadge from '../components/TrustedBadge';
import Banner from '../components/Banner';
import CollectionProduct from '../components/CollectionProduct';
import ShopByCategory from '../components/ShopByCategory';
import VideoSection from '../components/VideoSection';
import Testimonial from '../components/Testimonial';
import SingleBanner from '../components/SingleBanner';
import BlogItemsSlider from '../components/BlogItemsSlider';
import Brand from '../components/Brand';
import Footer from '../components/Footer';
import FeatureStore from '../store/FeatureStore.js';
import ProductStore from '../store/ProductStore.js';

const Home = () => {
  const { FeatureListRequest } = FeatureStore();
  const { ProductListRequest_Feature } = ProductStore();

  useEffect(() => {
    (async () => {
      await FeatureListRequest();
      await ProductListRequest_Feature(8, 1);
    })();
  }, []);

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
      <CollectionProduct item={8} />

      {/* ShopByCategory */}
      <ShopByCategory />

      {/* VideoSection */}
      <VideoSection />

      {/* Testimonial */}
      <Testimonial />

      {/* SingleBanner */}
      <SingleBanner />

      {/* BlogItems */}
      <BlogItemsSlider item={8} />

      {/* Brand */}
      <Brand />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
