import React, { useState } from 'react'
import Slider from "react-slick";

const Quickview = ({ show }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const largeSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: nav2,
    };

    const thumbSliderSettings = {
        className: "thumbSliderSettings",
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        cssEase: 'ease',
        focusOnSelect: true,
        swipeToSlide: true,
        vertical: true,
        asNavFor: nav1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,

                },
            },
        ],
    };

    const images = [
        'https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/32.jpg',
        'https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/36.jpg',
        'https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/32.jpg',
        'https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/32.jpg',
        'https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/32.jpg',
        'https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/32.jpg',

    ];

    return (
        <>
            {/* product quickview start */}
            <div className={`modal fade ${show && "show"}`} tabIndex={-1} id="quickview-modal">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="product-gallery product-gallery-vertical d-flex">
                                        <div className="product-img-large">
                                            <Slider
                                                {...largeSliderSettings}
                                                ref={(slider) => setNav1(slider)}
                                                className="qv-large-slider img-large-slider common-slider"
                                            >
                                                {images.map((src, index) => (
                                                    <div key={index} className="img-large-wrapper">
                                                        <img src={src} alt={`Product ${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                        <div className="product-img-thumb">
                                            <Slider
                                                {...thumbSliderSettings}
                                                ref={(slider) => setNav2(slider)}
                                                className="qv-thumb-slider img-thumb-slider common-slider px-2"
                                            >
                                                {images.map((src, index) => (
                                                    <div key={index} className="img-thumb-wrapper">
                                                        <img src={src} alt={`Thumbnail ${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                            <div className="activate-arrows show-arrows-always arrows-white d-none d-lg-flex justify-content-between mt-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="product-details ps-lg-4">
                                        <div className="mb-3">
                                            <span className="product-availability">In Stock</span>
                                        </div>
                                        <h2 className="product-title mb-3">Accesories Lather bag</h2>
                                        <div className="product-rating d-flex align-items-center mb-3">
                                            <span className="star-rating">
                                                <svg
                                                    width={16}
                                                    height={15}
                                                    viewBox="0 0 16 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                        fill="#FFAE00"
                                                    />
                                                </svg>
                                                <svg
                                                    width={16}
                                                    height={15}
                                                    viewBox="0 0 16 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                        fill="#FFAE00"
                                                    />
                                                </svg>
                                                <svg
                                                    width={16}
                                                    height={15}
                                                    viewBox="0 0 16 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                        fill="#FFAE00"
                                                    />
                                                </svg>
                                                <svg
                                                    width={16}
                                                    height={15}
                                                    viewBox="0 0 16 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                        fill="#FFAE00"
                                                    />
                                                </svg>
                                                <svg
                                                    width={16}
                                                    height={15}
                                                    viewBox="0 0 16 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                        fill="#B2B2B2"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="rating-count ms-2">(22)</span>
                                        </div>
                                        <div className="product-price-wrapper mb-4">
                                            <span className="product-price regular-price">$24.00</span>
                                            <del className="product-price compare-price ms-2">$32.00</del>
                                        </div>
                                        <div className="product-sku product-meta mb-1">
                                            <strong className="label">SKU:</strong> 401
                                        </div>
                                        <div className="product-vendor product-meta mb-3">
                                            <strong className="label">Vendor:</strong> leather
                                        </div>
                                        <div className="product-variant-wrapper">
                                            <div className="product-variant product-variant-color">
                                                <strong className="label mb-1 d-block">Color:</strong>
                                                <ul className="variant-list list-unstyled d-flex align-items-center flex-wrap">
                                                    <li className="variant-item">
                                                        <input
                                                            type="radio"
                                                            defaultValue="cyan"
                                                            defaultChecked=""
                                                        />
                                                        <label className="variant-label swatch-cyan" />
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue="black" />
                                                        <label className="variant-label swatch-black" />
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue="purple" />
                                                        <label className="variant-label swatch-purple" />
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue="blue" />
                                                        <label className="variant-label swatch-blue" />
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue="orange" />
                                                        <label className="variant-label swatch-orange" />
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue="teal" />
                                                        <label className="variant-label swatch-teal" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-variant product-variant-other">
                                                <strong className="label mb-1 d-block">Size:</strong>
                                                <ul className="variant-list list-unstyled d-flex align-items-center flex-wrap">
                                                    <li className="variant-item">
                                                        <input
                                                            type="radio"
                                                            defaultValue={34}
                                                            defaultChecked=""
                                                        />
                                                        <label className="variant-label">34</label>
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue={36} />
                                                        <label className="variant-label">36</label>
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue={38} />
                                                        <label className="variant-label">38</label>
                                                    </li>
                                                    <li className="variant-item">
                                                        <input type="radio" defaultValue={40} />
                                                        <label className="variant-label">40</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="misc d-flex align-items-end justify-content-between mt-4">
                                            <div className="quantity d-flex align-items-center justify-content-between">
                                                <button className="qty-btn dec-qty">
                                                    <img src="assets/img/icon/minus.svg" alt="minus" />
                                                </button>
                                                <input
                                                    className="qty-input"
                                                    type="number"
                                                    name="qty"
                                                    defaultValue={1}
                                                    min={0}
                                                />
                                                <button className="qty-btn inc-qty">
                                                    <img src="assets/img/icon/plus.svg" alt="plus" />
                                                </button>
                                            </div>

                                        </div>
                                        <form className="product-form" action="#">
                                            <div className="product-form-buttons d-flex align-items-center justify-content-between mt-4">
                                                <button
                                                    type="submit"
                                                    className="position-relative btn-atc btn-add-to-cart loader"
                                                >
                                                    ADD TO CART
                                                </button>
                                                <a href="#" className="product-wishlist">
                                                    <svg
                                                        className="icon icon-wishlist"
                                                        width={26}
                                                        height={22}
                                                        viewBox="0 0 26 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                                            fill="#00234D"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="buy-it-now-btn mt-2">
                                                <button
                                                    type="submit"
                                                    className="position-relative btn-atc btn-buyit-now"
                                                >
                                                    BUY IT NOW
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product quickview end */}
        </>

    )
}

export default Quickview