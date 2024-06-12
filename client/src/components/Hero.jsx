import React from "react";
import Slider from "react-slick";
import SliderSkeleton from "../skeleton/SliderSkeleton";
import { Link } from "react-router-dom";
import SliderStore from "../store/SliderStore";
const Hero = () => {
  const { SliderList } = SliderStore();
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
    cssEase: "linear",
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
          {SliderList !== null ? (
            <Slider {...settings}>
              {SliderList.map((item, index) => (
                <div
                  className="slide-item slide-item-bag position-relative"
                  key={index}
                >
                  <img
                    className="slide-img d-none d-md-block"
                    src={item?.img}
                    alt="slide-1"
                  />

                  <div className="content-absolute content-slide">
                    <div className="container height-inherit d-flex align-items-center justify-content-end">
                      <div className="content-box slide-content slide-content-1 py-4">
                        <h2
                          className="slide-heading heading_72 animate__animated animate__fadeInUp"
                          data-animation="animate__animated animate__fadeInUp"
                        >
                          {item?.title}
                        </h2>
                        <p
                          className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                          data-animation="animate__animated animate__fadeInUp"
                        >
                          {item?.des}
                        </p>
                        <Link
                          className="btn-primary slide-btn animate__animated animate__fadeInUp"
                          to="/product-all/1"
                          data-animation="animate__animated animate__fadeInUp"
                        >
                          See All Products
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
