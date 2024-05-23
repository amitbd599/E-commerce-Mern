import React from 'react'
import Slider from "react-slick";
const Hero = () => {
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="hero-icon-next">
                <span
                    onClick={onClick}
                >
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
                <span
                    onClick={onClick}
                >
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
            {/* slideshow start */}
            <div className="slideshow-section position-relative">
                <div className="slideshow-active activate-slider">
                    <Slider {...settings}>
                        <div className="slide-item slide-item-bag position-relative">
                            <img
                                className="slide-img d-none d-md-block"
                                src="assets/img/slideshow/f1.jpg"
                                alt="slide-1"
                            />
                            <img
                                className="slide-img d-md-none"
                                src="assets/img/slideshow/f1-m.jpg"
                                alt="slide-1"
                            />
                            <div className="content-absolute content-slide">
                                <div className="container height-inherit d-flex align-items-center justify-content-end">
                                    <div className="content-box slide-content slide-content-1 py-4">
                                        <h2
                                            className="slide-heading heading_72 animate__animated animate__fadeInUp"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            Discover The Best Furniture
                                        </h2>
                                        <p
                                            className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            Look for your inspiration here
                                        </p>
                                        <a
                                            className="btn-primary slide-btn animate__animated animate__fadeInUp"
                                            href="collection-left-sidebar.html"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item slide-item-bag position-relative">
                            <img
                                className="slide-img d-none d-md-block"
                                src="assets/img/slideshow/f2.jpg"
                                alt="slide-2"
                            />
                            <img
                                className="slide-img d-md-none"
                                src="assets/img/slideshow/f2-m.jpg"
                                alt="slide-2"
                            />
                            <div className="content-absolute content-slide">
                                <div className="container height-inherit d-flex align-items-center justify-content-end">
                                    <div className="content-box slide-content slide-content-1 py-4 text-center">
                                        <h2
                                            className="slide-heading heading_72 animate__animated animate__fadeInUp"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            Discover The Best Furniture
                                        </h2>
                                        <p
                                            className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            Look for your inspiration here
                                        </p>
                                        <a
                                            className="btn-primary slide-btn animate__animated animate__fadeInUp"
                                            href="collection-left-sidebar.html"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item slide-item-bag position-relative">
                            <img
                                className="slide-img d-none d-md-block"
                                src="assets/img/slideshow/f3.jpg"
                                alt="slide-3"
                            />
                            <img
                                className="slide-img d-md-none"
                                src="assets/img/slideshow/f3-m.jpg"
                                alt="slide-3"
                            />
                            <div className="content-absolute content-slide">
                                <div className="container height-inherit d-flex align-items-center justify-content-center">
                                    <div className="content-box slide-content slide-content-1 py-4 text-center">
                                        <h2
                                            className="slide-heading heading_72 animate__animated animate__fadeInUp"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            Discover The Best Furniture
                                        </h2>
                                        <p
                                            className="slide-subheading heading_24 animate__animated animate__fadeInUp"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            Look for your inspiration here
                                        </p>
                                        <a
                                            className="btn-primary slide-btn animate__animated animate__fadeInUp"
                                            href="collection-left-sidebar.html"
                                            data-animation="animate__animated animate__fadeInUp"
                                        >
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="activate-arrows" />
                <div className="activate-dots dot-tools" />
            </div>
            {/* slideshow end */}
        </>

    )
}

export default Hero