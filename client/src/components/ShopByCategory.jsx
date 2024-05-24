import React from 'react'

const ShopByCategory = () => {
    return (
        <>
            {/* shop by category start */}
            <div className="shop-category mt-100 overflow-hidden">
                <div className="collection-tab-inner mt-0">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="section-heading primary-color">Shop By Category</h2>
                        </div>
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
                                            src="assets/img/banner/f4.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="scattered-details">
                                        <h2 className="scattered-heading primary-color">Home Decor</h2>
                                        <a
                                            href="collection-left-sidebar.html"
                                            className="text_12 link-underline d-block primary-color mt-2"
                                        >
                                            SHOP COLLECTION
                                        </a>
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
                                            src="assets/img/banner/f5.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="scattered-details">
                                        <h2 className="scattered-heading primary-color">
                                            Storage Furniture
                                        </h2>
                                        <a
                                            href="#2"
                                            className="text_12 link-underline d-block primary-color mt-2"
                                        >
                                            SHOP COLLECTION
                                        </a>
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
                                            src="assets/img/banner/f6.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="scattered-details">
                                        <h2 className="scattered-heading primary-color">
                                            Black Cusion Chair
                                        </h2>
                                        <a
                                            href="#3"
                                            className="text_12 link-underline d-block primary-color mt-2"
                                        >
                                            SHOP COLLECTION
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* shop by category end */}
        </>

    )
}

export default ShopByCategory