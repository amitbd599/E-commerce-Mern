import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustedBadge from "../components/TrustedBadge";
import Banner from "../components/Banner";
import CollectionProduct from "../components/CollectionProduct";
import ShopByCategory from "../components/ShopByCategory";
import VideoSection from "../components/VideoSection";
import Testimonial from "../components/Testimonial";
import SingleBanner from "../components/SingleBanner";
import BlogItemsSlider from "../components/BlogItemsSlider";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import FeatureStore from "../store/FeatureStore.js";
import ProductStore from "../store/ProductStore.js";
import SliderStore from "../store/SliderStore.js";
import BrandsInner from "../components/BrandsInner.jsx";

const Home = () => {
  const { FeatureListRequest } = FeatureStore();
  const { ProductListRequest_Feature, CategoryListRequest, BrandListRequest } =
    ProductStore();
  const { SliderListRequest } = SliderStore();

  useEffect(() => {
    (async () => {
      await FeatureListRequest();
      await SliderListRequest();
      await CategoryListRequest();
      await BrandListRequest();
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

      {/* BrandsInner */}
      <BrandsInner />

      {/* TrustedBadge */}
      <TrustedBadge />

      {/* Banner */}
      <Banner />

      {/* CollectionProduct */}
      <CollectionProduct item={8} />

      {/* ShopByCategory */}
      <ShopByCategory />

      {/* VideoSection */}
      {/* <VideoSection /> */}

      {/* Testimonial */}
      {/* <Testimonial /> */}

      {/* SingleBanner */}
      <SingleBanner />

      {/* BlogItems */}
      {/* <BlogItemsSlider item={8} /> */}

      {/* Brand */}
      {/* <Brand /> */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
