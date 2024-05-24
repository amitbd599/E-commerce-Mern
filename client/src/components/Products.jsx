import React from 'react'
import Quickview from './Quickview'

const Products = () => {
    return (
        <div className="collection mt-100">
            <div className="container">
                <div className="row flex-row-reverse">
                    {/* product area start */}
                    <div className="col-lg-9 col-md-12 col-12">
                        <div className="filter-sort-wrapper d-flex justify-content-between flex-wrap">
                            <div className="collection-title-wrap d-flex align-items-end">
                                <h2 className="collection-title heading_24 mb-0">All products</h2>
                                <p className="collection-counter text_16 mb-0 ms-2">(237 items)</p>
                            </div>
                            <div className="filter-sorting">
                                <div className="collection-sorting position-relative d-none d-lg-block">
                                    <div className="sorting-header text_16 d-flex align-items-center justify-content-end">
                                        <span className="sorting-title me-2">Sort by:</span>
                                        <span className="active-sorting">Featured</span>
                                        <span className="sorting-icon">
                                            <svg
                                                className="icon icon-down"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="sorting-lists list-unstyled m-0">
                                        <li>
                                            <a href="#" className="text_14">
                                                Featured
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Best Selling
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Alphabetically, A-Z
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Alphabetically, Z-A
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Price, low to high
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Price, high to low
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Date, old to new
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Date, new to old
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter-drawer-trigger mobile-filter d-flex align-items-center d-lg-none">
                                    <span className="mobile-filter-icon me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-filter"
                                        >
                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                        </svg>
                                    </span>
                                    <span className="mobile-filter-heading">Filter and Sorting</span>
                                </div>
                            </div>
                        </div>
                        <div className="collection-product-container">
                            <div className="row">
                                {
                                    [...Array(12)].map((item, index) =>
                                        <div key={index}
                                            className="col-lg-4 col-md-6 col-6"
                                            data-aos="fade-up"
                                            data-aos-duration={700}
                                        >
                                            <div className="product-card">
                                                <div className="product-card-img">
                                                    <a
                                                        className="hover-switch"
                                                        href="collection-left-sidebar.html"
                                                    >
                                                        <img
                                                            className="secondary-img"
                                                            src="assets/img/products/furniture/9.jpg"
                                                            alt="product-img"
                                                        />
                                                        <img
                                                            className="primary-img"
                                                            src="assets/img/products/furniture/1.jpg"
                                                            alt="product-img"
                                                        />
                                                    </a>
                                                    <div className="product-badge">
                                                        <span className="badge-label badge-percentage rounded">
                                                            -44%
                                                        </span>
                                                    </div>
                                                    <div className="product-card-action product-card-action-2 justify-content-center">
                                                        <a
                                                            href="#quickview-modal"
                                                            className="action-card action-quickview"
                                                            data-bs-toggle="modal"
                                                        >
                                                            <svg
                                                                width={26}
                                                                height={26}
                                                                viewBox="0 0 26 26"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z"
                                                                    fill="#00234D"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="action-card action-wishlist">
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
                                                        <a href="#" className="action-card action-addtocart">
                                                            <svg
                                                                className="icon icon-cart"
                                                                width={24}
                                                                height={26}
                                                                viewBox="0 0 24 26"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z"
                                                                    fill="#00234D"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-card-details">
                                                    <ul className="color-lists list-unstyled d-flex align-items-center">
                                                        <li>
                                                            <a
                                                                href="javascript:void(0)"
                                                                className="color-swatch swatch-black active"
                                                            />
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:void(0)"
                                                                className="color-swatch swatch-cyan"
                                                            />
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:void(0)"
                                                                className="color-swatch swatch-purple"
                                                            />
                                                        </li>
                                                    </ul>
                                                    <h3 className="product-card-title">
                                                        <a href="collection-left-sidebar.html">
                                                            best wood furniture
                                                        </a>
                                                    </h3>
                                                    <div className="product-card-price">
                                                        <span className="card-price-regular">$1529</span>
                                                        <span className="card-price-compare text-decoration-line-through">
                                                            $1759
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                }


                            </div>
                        </div>
                        <div className="pagination justify-content-center mt-100">
                            <nav>
                                <ul className="pagination m-0 d-flex align-items-center">
                                    <li className="item disabled">
                                        <a className="link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={100}
                                                height={100}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-left"
                                            >
                                                <polyline points="15 18 9 12 15 6" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="item active">
                                        <a className="link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="link" href="#">
                                            4
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="link" href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={100}
                                                height={100}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-right"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* product area end */}
                    {/* sidebar start */}
                    <div className="col-lg-3 col-md-12 col-12">
                        <div className="collection-filter filter-drawer">
                            <div className="filter-widget d-lg-none d-flex align-items-center justify-content-between">
                                <h5 className="heading_24">Filter By</h5>
                                <button
                                    type="button"
                                    className="btn-close text-reset filter-drawer-trigger d-lg-none"
                                />
                            </div>
                            <div className="filter-widget d-lg-none">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-mobile-sort"
                                >
                                    <span>
                                        <span className="sorting-title me-2">Sort by:</span>
                                        <span className="active-sorting">Featured</span>
                                    </span>
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    id="filter-mobile-sort"
                                    className="accordion-collapse collapse show"
                                >
                                    <ul className="sorting-lists-mobile list-unstyled m-0">
                                        <li>
                                            <a href="#" className="text_14">
                                                Featured
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Best Selling
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Alphabetically, A-Z
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Alphabetically, Z-A
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Price, low to high
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Price, high to low
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Date, old to new
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text_14">
                                                Date, new to old
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-collection"
                                >
                                    Categories
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    id="filter-collection"
                                    className="accordion-collapse collapse show"
                                >
                                    <ul className="filter-lists list-unstyled mb-0">
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                <span className="filter-text">Womens Bag</span>
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Bottles
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Men's Shoe
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Toddler Dress
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-availability"
                                >
                                    Availability
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    id="filter-availability"
                                    className="accordion-collapse collapse show"
                                >
                                    <ul className="filter-lists list-unstyled mb-0">
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                <span className="filter-text">In Stock</span>
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Out of Stock
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-price"
                                >
                                    Price
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div id="filter-price" className="accordion-collapse collapse show">
                                    <div className="filter-price d-flex align-items-center justify-content-between">
                                        <div className="filter-field">
                                            <input
                                                className="field-input"
                                                type="number"
                                                placeholder="$0"
                                                min={0}
                                                max={2000.0}
                                            />
                                        </div>
                                        <div className="filter-separator px-3">To</div>
                                        <div className="filter-field">
                                            <input
                                                className="field-input"
                                                type="number"
                                                min={0}
                                                placeholder="$595.00"
                                                max={2000.0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget filter-color">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-color"
                                >
                                    Colors
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div id="filter-color" className="accordion-collapse collapse show">
                                    <ul className="filter-lists list-unstyled mb-0">
                                        <li className="filter-item">
                                            <label className="filter-label blue">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label red">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label green">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label purple">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label gold">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label pink">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label orange">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label aqua">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label brown">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label bisque">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label grey">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-size"
                                >
                                    Size
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div id="filter-size" className="accordion-collapse collapse show">
                                    <ul className="filter-lists list-unstyled mb-0">
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                <span className="filter-text">XS</span>
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />S
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />M
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />L
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                XL
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                XXL
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-vendor"
                                >
                                    Vendor
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    id="filter-vendor"
                                    className="accordion-collapse collapse show"
                                >
                                    <ul className="filter-lists list-unstyled mb-0">
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                <span className="filter-text">Bynd</span>
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Huemor
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Jordan Crown
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Hubspot
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Ramotion
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Infosolutions
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Ideo
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Codal
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Salesforce
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div
                                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-type"
                                >
                                    Product Type
                                    <span className="faq-heading-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-down"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div id="filter-type" className="accordion-collapse collapse show">
                                    <ul className="filter-lists list-unstyled mb-0">
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                <span className="filter-text">Bodysuit</span>
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Hoodie
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Jacket
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Legging
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Short
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Top
                                            </label>
                                        </li>
                                        <li className="filter-item">
                                            <label className="filter-label">
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Underwear
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div className="filter-header faq-heading heading_18 d-flex align-items-center border-bottom">
                                    Related products
                                </div>
                                <div className="filter-related">
                                    <div className="related-item d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/products/furniture/21.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading heading_18">
                                                <a href="product.html">Tea Table</a>
                                            </h2>
                                            <div className="related-review-icon product-icon-star d-flex align-items-center">
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                            </div>
                                            <p className="related-price text_16">$2,546</p>
                                        </div>
                                    </div>
                                    <div className="related-item d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/products/furniture/22.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading heading_18">
                                                <a href="product.html">Comfy Sofa</a>
                                            </h2>
                                            <div className="related-review-icon product-icon-star d-flex align-items-center">
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                            </div>
                                            <p className="related-price text_16">$1,526</p>
                                        </div>
                                    </div>
                                    <div className="related-item d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/products/furniture/23.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading heading_18">
                                                <a href="product.html">Cusion Chair</a>
                                            </h2>
                                            <div className="related-review-icon product-icon-star d-flex align-items-center">
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                                <img src="assets/img/icon/star.png" alt="img" />
                                            </div>
                                            <p className="related-price text_16">$1,235</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <a href="product.html">
                                    <img
                                        className="rounded"
                                        src="assets/img/banner/collection.jpg"
                                        alt="img"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* sidebar end */}
                </div>
            </div>
            <Quickview />
        </div>

    )
}

export default Products