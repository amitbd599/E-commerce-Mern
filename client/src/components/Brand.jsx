import React, { useEffect } from 'react';
import ProductStore from '../store/ProductStore';

const Brand = () => {
  const { BrandListRequest, BrandList } = ProductStore();

  useEffect(() => {
    (async () => {
      await BrandListRequest();
    })();
  }, []);

  return (
    <>
      {/* brand logo start */}
      <div className="brand-logo-section mt-100">
        <div className="brand-logo-inner">
          <div className="container">
            <div className="brand-logo-container overflow-hidden">
              <div className="scroll-horizontal row align-items-center flex-nowrap">
                {BrandList.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                    data-aos="fade-up"
                    data-aos-duration={700}
                  >
                    <span className="brand-logo d-flex align-items-center justify-content-center">
                      <img src={item?.brandImg} alt="img" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brand logo end */}
    </>
  );
};

export default Brand;
