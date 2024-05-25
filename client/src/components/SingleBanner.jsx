import React from 'react';
import { Link } from 'react-router-dom';

const SingleBanner = () => {
  return (
    <>
      {/* single banner start */}
      <div className="single-banner-section mt-100 overflow-hidden">
        <div className="position-relative overlay">
          <img
            className="single-banner-img"
            src="assets/img/banner/single-banner-2.jpg"
            alt="slide-1"
          />
          <div className="content-absolute content-slide">
            <div className="container height-inherit d-flex align-items-center justify-content-center">
              <div
                className="content-box single-banner-content py-4 text-center"
                data-aos="fade-up"
                data-aos-duration={700}
              >
                <h2
                  className="single-banner-heading heading_42 text-white animate__animated animate__fadeInUp"
                  data-animation="animate__animated animate__fadeInUp"
                  data-aos="fade-up"
                  data-aos-duration={700}
                >
                  Created Furniture
                </h2>
                <p
                  className="single-banner-text text_16 text-white animate__animated animate__fadeInUp"
                  data-animation="animate__animated animate__fadeInUp"
                  data-aos="fade-up"
                  data-aos-duration={700}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus.
                </p>
                <Link
                  className="btn-primary single-banner-btn animate__animated animate__fadeInUp"
                  to="/product/all"
                  data-animation="animate__animated animate__fadeInUp"
                  data-aos="fade-up"
                  data-aos-duration={700}
                >
                  DISCOVER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* single banner end */}
    </>
  );
};

export default SingleBanner;
