import React, { useEffect } from 'react';
import Announcement from '../components/Announcement';
import Header from '../components/Header';

import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Products from '../components/Products';

const ProductByRemark = () => {
  return (
    <>
      {/* Announcement */}
      <Announcement />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={'Product filter by remark'} />

      {/* Products */}
      <Products />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProductByRemark;
