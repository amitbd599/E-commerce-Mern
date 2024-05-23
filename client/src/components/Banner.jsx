import React from 'react'

const Banner = () => {
    return (
        <>
            {/* banner start */}
            <div className="grid-banner mt-100 overflow-hidden">
                <div className="collection-tab-inner mt-0">
                    <div className="container">
                        <div className="grid-container-2">
                            <a
                                className="grid-item grid-item-1 position-relative rounded mt-0 d-flex"
                                href="collection-left-sidebar.html"
                                data-aos="fade-right"
                                data-aos-duration={700}
                            >
                                <img
                                    className="banner-img rounded"
                                    src="assets/img/banner/f1.jpg"
                                    alt="banner-1"
                                />
                                <div className="content-absolute content-slide">
                                    <div className="container height-inherit d-flex">
                                        <div className="content-box banner-content p-4">
                                            <h2 className="heading_34 primary-color">
                                                20% Off On <br />
                                                New Chair
                                            </h2>
                                            <p className="text_14 mt-2 primary-color">
                                                Get Instant Cashback
                                            </p>
                                            <span className="text_12 mt-4 link-underline d-block primary-color">
                                                VIEW MORE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                className="grid-item grid-item-2 position-relative rounded mt-0 d-flex"
                                href="collection-left-sidebar.html"
                                data-aos="fade-right"
                                data-aos-duration={700}
                            >
                                <img
                                    className="banner-img rounded"
                                    src="assets/img/banner/f3.jpg"
                                    alt="banner-1"
                                />
                                <div className="content-absolute content-slide">
                                    <div className="container height-inherit d-flex justify-content-end">
                                        <div className="content-box banner-content p-4 text-end">
                                            <h2 className="heading_34 primary-color">
                                                Let’s buy <br />
                                                New Chair
                                            </h2>
                                            <p className="text_14 mt-2 primary-color">
                                                Get Instant Cashback
                                            </p>
                                            <span className="text_12 mt-4 link-underline d-block primary-color">
                                                VIEW MORE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                className="grid-item grid-item-3 position-relative rounded mt-0 d-flex"
                                href="collection-left-sidebar.html"
                                data-aos="fade-left"
                                data-aos-duration={700}
                            >
                                <img
                                    className="banner-img rounded"
                                    src="assets/img/banner/f2.jpg"
                                    alt="banner-1"
                                />
                                <div className="content-absolute content-slide">
                                    <div className="container height-inherit d-flex">
                                        <div className="content-box banner-content p-4">
                                            <h2 className="heading_34 primary-color">
                                                Let’s buy <br />
                                                New Chair
                                            </h2>
                                            <p className="text_14 mt-2 primary-color">
                                                Get Instant Cashback
                                            </p>
                                            <span className="text_12 mt-4 link-underline d-block primary-color">
                                                VIEW MORE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}
        </>

    )
}

export default Banner