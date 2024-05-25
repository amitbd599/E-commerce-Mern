import React from 'react';
import Slider from 'react-slick';
import SliderSkeleton from '../skeleton/SliderSkeleton';
import FeatureStore from '../store/FeatureStore';
import { Link } from 'react-router-dom';
const Hero = () => {
  const { FeatureList } = FeatureStore();
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="hero-icon-next">
        <span onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            height={100}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-arrow-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="hero-icon-prev">
        <span onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            height={100}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-arrow-right"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
    );
  }

  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* slideshow start */}
      <div className="slideshow-section position-relative">
        <div className="slideshow-active activate-slider">
          {FeatureList.length > 0 ? (
            <Slider {...settings}>
              <div className="slide-item slide-item-bag position-relative">
                <img
                  className="slide-img d-none d-md-block"
                  src={FeatureList[0]?.slide_img_big}
                  alt="slide-1"
                />
                <img
                  className="slide-img d-md-none"
                  src={FeatureList[0]?.slide_img_small}
                  alt="slide-1"
                />
                <div className="content-absolute content-slide">
                  <div className="container height-inherit d-flex align-items-center justify-content-end">
                    <div className="content-box slide-content slide-content-1 py-4">
                      <h2
                        className="slide-heading heading_72 animate__animated animate__fadeInUp"
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[0]?.title}
                      </h2>
                      <p
                        className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[0]?.sub_title}
                      </p>
                      <Link
                        className="btn-primary slide-btn animate__animated animate__fadeInUp"
                        to={FeatureList[0]?.button_link}
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[0]?.button_title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item slide-item-bag position-relative">
                <img
                  className="slide-img d-none d-md-block"
                  src={FeatureList[1]?.slide_img_big}
                  alt="slide-2"
                />
                <img
                  className="slide-img d-md-none"
                  src={FeatureList[1]?.slide_img_small}
                  alt="slide-2"
                />
                <div className="content-absolute content-slide">
                  <div className="container height-inherit d-flex align-items-center justify-content-end">
                    <div className="content-box slide-content slide-content-1 py-4 text-center">
                      <h2
                        className="slide-heading heading_72 animate__animated animate__fadeInUp"
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[1]?.title}
                      </h2>
                      <p
                        className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[1]?.sub_title}
                      </p>
                      <Link
                        className="btn-primary slide-btn animate__animated animate__fadeInUp"
                        to={FeatureList[1]?.button_link}
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[1]?.button_title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item slide-item-bag position-relative">
                <img
                  className="slide-img d-none d-md-block"
                  src={FeatureList[2]?.slide_img_big}
                  alt="slide-3"
                />
                <img
                  className="slide-img d-md-none"
                  src={FeatureList[2]?.slide_img_small}
                  alt="slide-3"
                />
                <div className="content-absolute content-slide">
                  <div className="container height-inherit d-flex align-items-center justify-content-center">
                    <div className="content-box slide-content slide-content-1 py-4 text-center">
                      <h2
                        className="slide-heading heading_72 animate__animated animate__fadeInUp"
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[2]?.title}
                      </h2>
                      <p
                        className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[2]?.sub_title}
                      </p>
                      <Link
                        className="btn-primary slide-btn animate__animated animate__fadeInUp"
                        to={FeatureList[2]?.button_link}
                        data-animation="animate__animated animate__fadeInUp"
                      >
                        {FeatureList[2]?.button_title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          ) : (
            <SliderSkeleton />
          )}
        </div>
      </div>
      {/* slideshow end */}
    </>
  );
};

export default Hero;
