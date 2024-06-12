import React from 'react';
import Slider from 'react-slick';
import ProductStore from '../store/ProductStore';
import { Link } from 'react-router-dom';
import ImgSkeleton from '../skeleton/ImgSkeleton';
const BrandsInner = () => {
  const { BrandList } = ProductStore();
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        slidesToShow: 5,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        slidesToShow: 4,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="brands_collection">
      <div className="container">
        <div className="section-header ">
          <h2 className="section-heading primary-color">
            All Brands Collection
          </h2>
        </div>
        {BrandList !== null ? (
          <div>
            <Slider {...settings}>
              {BrandList?.map((item, index) => (
                <Link
                  className="wrap h-100 d-block"
                  to={`/product-by-brands/${item?._id}/1`}
                >
                  <div className="item text-center" key={index}>
                    <img src={item?.brandImg} alt="" />
                    <h3>{item?.brandName}</h3>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        ) : (
          <Slider {...settings}>
            {[...Array(10)].map((item, index) => (
              <div className="mt-4">
                <ImgSkeleton key={index} height={160} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default BrandsInner;
