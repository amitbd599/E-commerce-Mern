import React, { useEffect } from 'react';
import Announcement from '../components/Announcement';
import Header from '../components/Header';

import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Products from '../components/Products';

const ProductByBrands = () => {
  return (
    <>
      {/* Announcement */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={'Product filter by brands'} />

      {/* Products */}
      <Products />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProductByBrands;
