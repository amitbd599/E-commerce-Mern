import React from 'react';
import Announcement from '../components/Announcement';
import Header from '../components/Header';

import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Products from '../components/Products';

const ProductByColor = () => {
  return (
    <>
      {/* Announcement */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={'Product filter by color'} />

      {/* Products */}
      <Products />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProductByColor;
