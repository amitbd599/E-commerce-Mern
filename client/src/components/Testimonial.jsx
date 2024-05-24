import React from 'react'
import Slider from "react-slick";
const Testimonial = () => {
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="testimonial-icon-prev"><span
                className="arrow-slider arrow-prev slick-arrow"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={100}
                    height={100}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FEFEFE"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-arrow-left"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </span></div>


        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className='testimonial-icon-next'>
                <span
                    className="arrow-slider arrow-next slick-arrow "
                    onClick={onClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FEFEFE"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-arrow-right"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </span></div>


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
                breakpoint: 1200,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <>
            {/* testimonial start */}
            <div className="testimonial-section mt-100 overflow-hidden home-section">
                <div className="testimonial-inner">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-5 col-md-12 col-12"
                                data-aos="fade-right"
                                data-aos-duration={700}
                            >
                                <div className="section-header">
                                    <h2 className="section-heading primary-color">
                                        What customer say
                                    </h2>
                                    <p className="section-subheading">
                                        The services provided by the officials was smooth and
                                        satisfactory. Products and goods delivered were up to
                                        satisfaction.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 offset-lg-1 col-md-12 col-12"
                                data-aos="fade-left"
                                data-aos-duration={700}
                            >
                                <div className="testimonial-container position-relative">
                                    <div
                                        className="testimonial-slideshow common-slider">
                                        <Slider {...settings}>
                                            <div className="testimonial-item">
                                                <div className="testimonial-icon-wrap d-flex align-items-center">
                                                    <div className="testimonial-icon-quote">
                                                        <svg
                                                            width={40}
                                                            height={29}
                                                            viewBox="0 0 40 29"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="testimonial-icon-star d-flex align-items-center ms-3">
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                    </div>
                                                </div>
                                                <p className="testimonial-review my-4 text_16">
                                                    “ I am purchasing furniture from Bisum since the last 6
                                                    years. I love their prompt service and so far I have faced
                                                    no complaints with their furniture.”
                                                </p>
                                                <div className="testimonial-reviewer d-flex align-items-center">
                                                    <div className="reviewer-img">
                                                        <img src="assets/img/testimonial/john.jpg" alt="img" />
                                                    </div>
                                                    <div className="reviewer-info ms-4">
                                                        <h4 className="reviewer-name heading_18 mb-2 primary-color">
                                                            Floyd Miles
                                                        </h4>
                                                        <p className="reviewer-desig text_14 m-0">
                                                            Executive, Hypebeast
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial-item">
                                                <div className="testimonial-icon-wrap d-flex align-items-center">
                                                    <div className="testimonial-icon-quote">
                                                        <svg
                                                            width={40}
                                                            height={29}
                                                            viewBox="0 0 40 29"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="testimonial-icon-star d-flex align-items-center ms-3">
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                    </div>
                                                </div>
                                                <p className="testimonial-review my-4 text_16">
                                                    “ I am purchasing furniture from Bisum since the last 6
                                                    years. I love their prompt service and so far I have faced
                                                    no complaints with their furniture.”
                                                </p>
                                                <div className="testimonial-reviewer d-flex align-items-center">
                                                    <div className="reviewer-img">
                                                        <img src="assets/img/testimonial/john.jpg" alt="img" />
                                                    </div>
                                                    <div className="reviewer-info ms-4">
                                                        <h4 className="reviewer-name heading_18 mb-2 primary-color">
                                                            Floyd Miles
                                                        </h4>
                                                        <p className="reviewer-desig text_14 m-0">
                                                            Executive, Hypebeast
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial-item">
                                                <div className="testimonial-icon-wrap d-flex align-items-center">
                                                    <div className="testimonial-icon-quote">
                                                        <svg
                                                            width={40}
                                                            height={29}
                                                            viewBox="0 0 40 29"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="testimonial-icon-star d-flex align-items-center ms-3">
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                        <img src="assets/img/icon/star.png" alt="img" />
                                                    </div>
                                                </div>
                                                <p className="testimonial-review my-4 text_16">
                                                    “ I am purchasing furniture from Bisum since the last 6
                                                    years. I love their prompt service and so far I have faced
                                                    no complaints with their furniture.”
                                                </p>
                                                <div className="testimonial-reviewer d-flex align-items-center">
                                                    <div className="reviewer-img">
                                                        <img src="assets/img/testimonial/john.jpg" alt="img" />
                                                    </div>
                                                    <div className="reviewer-info ms-4">
                                                        <h4 className="reviewer-name heading_18 mb-2 primary-color">
                                                            Floyd Miles
                                                        </h4>
                                                        <p className="reviewer-desig text_14 m-0">
                                                            Executive, Hypebeast
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="activate-arrows show-arrows-always article-arrows arrows-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial end */}
        </>

    )
}

export default Testimonial