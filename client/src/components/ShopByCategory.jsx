import React, { useEffect } from 'react';
import ProductStore from '../store/ProductStore.js';
import { Link } from 'react-router-dom';
import SliderSkeleton from '../skeleton/SliderSkeleton.jsx';

const ShopByCategory = () => {
  const { CategoryListRequest, CategoryList } = ProductStore();

  useEffect(() => {
    (async () => {
      await CategoryListRequest();
    })();
  }, []);

  return (
    <>
      {/* shop by category start */}
      <div className="shop-category mt-100 overflow-hidden">
        <div className="collection-tab-inner mt-0">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-heading primary-color">
                Our Feature Products
              </h2>
            </div>

            {CategoryList !== null ? (
              <div className="shop-category-2 shop-category-inner">
                <div
                  className="scattered-item"
                  data-aos="fade-left"
                  data-aos-duration={700}
                >
                  <div className="scattered-wrapper">
                    <div className="scattered-content">
                      <img
                        className="scattered-img"
                        src={CategoryList[0]?.categoryImg}
                        alt="img"
                      />
                    </div>
                    <div className="scattered-details">
                      <h2 className="scattered-heading primary-color">
                        {CategoryList[0]?.categoryName}
                      </h2>
                      <Link
                        to={`product-by-categories/${CategoryList[0]?._id}/1`}
                        className="text_12 link-underline d-block primary-color mt-2"
                      >
                        SHOP COLLECTION
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="scattered-item"
                  data-aos="fade-right"
                  data-aos-duration={700}
                >
                  <div className="scattered-wrapper">
                    <div className="scattered-content">
                      <img
                        className="scattered-img"
                        src={CategoryList[1]?.categoryImg}
                        alt="img"
                      />
                    </div>
                    <div className="scattered-details">
                      <h2 className="scattered-heading primary-color">
                        {CategoryList[1]?.categoryName}
                      </h2>
                      <Link
                        to={`product-by-categories/${CategoryList[1]?._id}/1`}
                        className="text_12 link-underline d-block primary-color mt-2"
                      >
                        SHOP COLLECTION
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="scattered-item"
                  data-aos="fade-left"
                  data-aos-duration={700}
                >
                  <div className="scattered-wrapper">
                    <div className="scattered-content">
                      <img
                        className="scattered-img"
                        src={CategoryList[2]?.categoryImg}
                        alt="img"
                      />
                    </div>
                    <div className="scattered-details">
                      <h2 className="scattered-heading primary-color">
                        {CategoryList[2]?.categoryName}
                      </h2>
                      <Link
                        to={`product-by-categories/${CategoryList[2]?._id}/1`}
                        className="text_12 link-underline d-block primary-color mt-2"
                      >
                        SHOP COLLECTION
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <SliderSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* shop by category end */}
    </>
  );
};

export default ShopByCategory;
