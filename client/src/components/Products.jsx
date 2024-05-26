import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import ProductStore from '../store/ProductStore';
import Slider from 'react-slick';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const Products = () => {
  const navigate = useNavigate();
  const params = useParams();
  let {
    ProductList,
    Products,
    BrandList,
    CategoryList,
    ProductsRequest_Feature,
    ProductListRequest_Feature,
    BrandListRequest,
    CategoryListRequest,
    RemarkListRequest,
    SimilarCategoryListRequest,
    SimilarBrandsListRequest,
    SimilarStockListRequest,
    SimilarColorListRequest,
  } = ProductStore();

  useEffect(() => {
    (async () => {
      await ProductListRequest_Feature(12, params.pageNo);
      await BrandListRequest();
      await CategoryListRequest();
    })();
  }, []);

  let allProductReqFun = async (id) => {
    await ProductListRequest_Feature(12, params.pageNo);
  };

  let categoriesReqFun = async (id) => {
    await SimilarCategoryListRequest(id, 12, params.pageNo);
  };

  let brandsReqFun = async (id) => {
    await SimilarBrandsListRequest(id, 12, params.pageNo);
  };

  let remarkReqFun = async (value) => {
    await RemarkListRequest(value, 12, params.pageNo);
  };

  let stockReqFun = async (value) => {
    await SimilarStockListRequest(value, 12, params.pageNo);
  };

  let colorReqFun = async (value) => {
    await SimilarColorListRequest(value, 12, params.pageNo);
  };

  console.log(ProductList?.totalDocuments);

  let handelClick = async (id) => {
    await ProductsRequest_Feature(id);
  };

  const handelPageClick = async (event) => {
    let pageNo = event.selected;
    await ProductListRequest_Feature(12, pageNo + 1);
    navigate(`/product/all/${pageNo + 1}`);
  };

  const TotalData = ProductList?.totalDocuments;
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
    className: 'thumbSliderSettings',
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
    Products?.img1,
    Products?.img2,
    Products?.img3,
    Products?.img4,
    Products?.img5,
    Products?.img6,
    Products?.img7,
    Products?.img8,
  ];

  const StarRating = ({ rating, totalStars = 5 }) => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return <div>{stars}</div>;
  };
  return (
    <div className="collection mt-100">
      <div className="container">
        <div className="row flex-row-reverse">
          {/* product area start */}
          <div className="col-lg-9 col-md-12 col-12">
            <div className="filter-sort-wrapper d-flex justify-content-between flex-wrap">
              <div className="collection-title-wrap d-flex align-items-end">
                <h2 className="collection-title heading_24 mb-0">
                  All products
                </h2>
                <p className="collection-counter text_16 mb-0 ms-2">
                  ({ProductList?.totalDocuments} items)
                </p>
              </div>
            </div>
            <div className="collection-product-container">
              <div className="row">
                {ProductList?.products?.slice(0, 12).map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-6"
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
                            src={item?.img1}
                            alt="product-img"
                          />
                          <img
                            className="primary-img"
                            src={item?.img2}
                            alt="product-img"
                          />
                        </a>
                        <div className="product-badge">
                          <span className="badge-label badge-percentage rounded">
                            {item?.brandDetails?.brandName}
                          </span>
                        </div>
                        <div className="product-card-action product-card-action-2 justify-content-center">
                          <Link
                            onClick={() => handelClick(item?._id)}
                            to="#quickview-modal"
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
                          </Link>
                          <Link to="#" className="action-card action-wishlist">
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
                          </Link>
                          <Link to="#" className="action-card action-addtocart">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-details">
                        <ul className="color-lists list-unstyled d-flex align-items-center">
                          <li>
                            <Link
                              to="javascript:void(0)"
                              className="color-swatch swatch-black active"
                            />
                          </li>
                          <li>
                            <Link
                              to="javascript:void(0)"
                              className="color-swatch swatch-cyan"
                            />
                          </li>
                          <li>
                            <Link
                              to="javascript:void(0)"
                              className="color-swatch swatch-purple"
                            />
                          </li>
                        </ul>
                        <h3 className="product-card-title">
                          <Link to={`/product-details/${item?._id}`}>
                            {item?.title}
                          </Link>
                        </h3>
                        <div className="product-card-price">
                          <span className="card-price-regular">
                            ${item?.price}
                          </span>
                          <span className="card-price-compare text-decoration-line-through">
                            ${item?.discountPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination d-flex justify-content-center mt-100">
              <ReactPaginate
                className="d-flex"
                previousLabel="<"
                nextLabel=">"
                activeLinkClassName="active_link"
                pageLinkClassName="page_link"
                previousLinkClassName="previous_link"
                nextLinkClassName="next_link"
                breakLabel="..."
                pageCount={TotalData / 12}
                initialPage={params.pageNo - 1}
                pageRangeDisplayed={3}
                onPageChange={handelPageClick}
                type="button"
              />
            </div>
          </div>
          {/* product area end */}
          {/* sidebar start */}
          <div className="col-lg-3 col-md-12 col-12">
            <div className="collection-filter filter-drawer">
              {/* Categories */}
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
                        <input
                          type="radio"
                          id="all"
                          name="Filter"
                          onChange={() => allProductReqFun()}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">All Categories</span>
                      </label>
                    </li>
                    {CategoryList.slice(0, 10).map((item, index) => (
                      <li className="filter-item" key={index}>
                        <label className="filter-label">
                          <input
                            type="radio"
                            id={`index${index}`}
                            name="Filter"
                            value={item?._id}
                            onChange={() => categoriesReqFun(item?._id)}
                          />
                          <span className="filter-checkbox rounded me-2" />
                          <span className="filter-text">
                            {item?.categoryName}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Brands */}
              <div className="filter-widget">
                <div
                  className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                  data-bs-toggle="collapse"
                  data-bs-target="#filter-collection"
                >
                  Brands
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
                        <input
                          type="radio"
                          id="All"
                          name="Filter"
                          value="30"
                          onChange={() => allProductReqFun()}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">All Brands</span>
                      </label>
                    </li>

                    {BrandList.slice(0, 10).map((item, index) => (
                      <li className="filter-item" key={index}>
                        <label className="filter-label">
                          <input
                            type="radio"
                            id={`index${index}`}
                            name="Filter"
                            value={item?._id}
                            onChange={() => brandsReqFun(item?._id)}
                          />
                          <span className="filter-checkbox rounded me-2" />
                          <span className="filter-text">{item?.brandName}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Remark */}
              <div className="filter-widget">
                <div
                  className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                  data-bs-toggle="collapse"
                  data-bs-target="#filter-collection"
                >
                  Remark
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
                        <input
                          type="radio"
                          id="new"
                          name="Filter"
                          value="new"
                          onChange={() => remarkReqFun('new')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">New</span>
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label">
                        <input
                          type="radio"
                          id="old"
                          name="Filter"
                          value="old"
                          onChange={() => remarkReqFun('old')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">Old</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Availability */}
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
                        <input
                          type="radio"
                          id="true"
                          name="Filter"
                          value="true"
                          onChange={() => stockReqFun('true')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">In Stock</span>
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label">
                        <input
                          type="radio"
                          id="false"
                          name="Filter"
                          value="false"
                          onChange={() => stockReqFun('false')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        Out of Stock
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Colors */}
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
                <div
                  id="filter-color"
                  className="accordion-collapse collapse show"
                >
                  <ul className="filter-lists list-unstyled mb-0">
                    <li className="filter-item">
                      <label className="filter-label blue">
                        <input
                          type="radio"
                          id="blue"
                          name="Filter"
                          value="blue"
                          onChange={() => colorReqFun('blue')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label red">
                        <input
                          type="radio"
                          id="red"
                          name="Filter"
                          value="red"
                          onChange={() => colorReqFun('red')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label green">
                        <input
                          type="radio"
                          id="green"
                          name="Filter"
                          value="green"
                          onChange={() => colorReqFun('green')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label purple">
                        <input
                          type="radio"
                          id="purple"
                          name="Filter"
                          value="purple"
                          onChange={() => colorReqFun('purple')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label gold">
                        <input
                          type="radio"
                          id="gold"
                          name="Filter"
                          value="gold"
                          onChange={() => colorReqFun('gold')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label pink">
                        <input
                          type="radio"
                          id="pink"
                          name="Filter"
                          value="pink"
                          onChange={() => colorReqFun('pink')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label orange">
                        <input
                          type="radio"
                          id="orange"
                          name="Filter"
                          value="orange"
                          onChange={() => colorReqFun('orange')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label aqua">
                        <input
                          type="radio"
                          id="aqua"
                          name="Filter"
                          value="aqua"
                          onChange={() => colorReqFun('aqua')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label brown">
                        <input
                          type="radio"
                          id="brown"
                          name="Filter"
                          value="brown"
                          onChange={() => colorReqFun('brown')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label bisque">
                        <input
                          type="radio"
                          id="bisque"
                          name="Filter"
                          value="bisque"
                          onChange={() => colorReqFun('bisque')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label grey">
                        <input
                          type="radio"
                          id="grey"
                          name="Filter"
                          value="grey"
                          onChange={() => colorReqFun('grey')}
                        />
                        <span className="filter-checkbox rounded me-2" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar end */}
        </div>
      </div>

      {/* Quick View */}
      <div className={`modal fade `} tabIndex={-1} id="quickview-modal">
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
                      <span className="product-availability">
                        {Products?.stock}
                      </span>
                    </div>
                    <h2 className="product-title mb-3">{Products?.title}</h2>
                    <div className="product-rating d-flex align-items-center mb-3">
                      <span className="star-rating">
                        <StarRating rating={parseInt(Products?.star)} />
                      </span>
                    </div>
                    <div className="product-price-wrapper mb-4">
                      <span className="product-price regular-price">
                        $
                        {Products?.discount === true
                          ? Products?.discountPrice
                          : Products?.price}
                      </span>
                      <del className="product-price compare-price ms-2">
                        {Products?.discount === true &&
                          Products?.price - Products?.discountPrice}
                      </del>
                    </div>
                    <div className="product-sku product-meta mb-1">
                      <strong className="label">Remark:</strong>{' '}
                      {Products?.remark}
                    </div>
                    <div className="product-vendor product-meta mb-3">
                      <strong className="label">Color:</strong>{' '}
                      {Products?.color}
                    </div>
                    <div className="product-variant-wrapper">
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
    </div>
  );
};

export default Products;
