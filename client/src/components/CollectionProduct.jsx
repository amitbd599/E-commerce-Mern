import React, { useState } from "react";
import ProductStore from "../store/ProductStore.js";
import Select from "react-select";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import ImgSkeleton from "../skeleton/ImgSkeleton.jsx";
import CartStore from "../store/CartStore.js";
import WishListStore from "../store/WishListStore.js";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/helper.js";
import ReviewStore from "./../store/ReviewStore";
import ShareButton from "./ShareButton.jsx";

const CollectionProduct = ({ item }) => {
  let [navActive, setNavActive] = useState("All");
  let {
    ProductList,
    ProductListRequest_Feature,
    ProductDetails,
    RemarkListRequest,
    ProductDetailsRequest,
  } = ProductStore();

  let { isCartSubmit, CartListRequest, CartListGetRequest } = CartStore();
  let { WishListRequest, WishListGetRequest } = WishListStore();
  let { GetAllReviewByProductRequest, reviewList } = ReviewStore();

  const defaultOption = { label: "Select", value: "" };
  let [selectedOptionColor, setSelectedOptionColor] = useState(defaultOption);
  let [selectedOptionSize, setSelectedOptionSize] = useState(defaultOption);
  let [qty, setQty] = useState(1);
  let options_color = ProductDetails?.color.split(",").map((item, i) => {
    return { value: item, label: item };
  });

  let options_size = ProductDetails?.size.split(",").map((item, i) => {
    return { value: item, label: item };
  });

  let submitCartData = async () => {
    let color = selectedOptionColor?.value;
    let size = selectedOptionSize?.value;
    let productID = ProductDetails?._id;

    if (IsEmpty(color)) {
      ErrorToast("Please select color!");
      return;
    } else if (IsEmpty(size)) {
      ErrorToast("Please select size!");
      return;
    } else if (IsEmpty(qty)) {
      ErrorToast("Please select quantity!");
      return;
    } else {
      let reqBody = {
        color: color,
        size: size,
        qty: qty,
        productID: productID,
      };

      await CartListRequest(reqBody).then(async (res) => {
        if (res) {
          await CartListGetRequest();
          setSelectedOptionColor(defaultOption);
          setSelectedOptionSize(defaultOption);
          setQty(1);
          SuccessToast("Product add success!");
        } else {
          ErrorToast("Something went wrong!");
        }
      });
    }
  };

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
    cssEase: "ease",
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

  let handelClick = async (id) => {
    await ProductDetailsRequest(id);
    await GetAllReviewByProductRequest(id);
  };

  let handelWishList = async (productID) => {
    await WishListRequest({ productID }).then(async (res) => {
      if (res) {
        SuccessToast("Wishlist Product add success!");
        await WishListGetRequest();
      }
    });
  };

  const images = [
    ProductDetails?.img1,
    ProductDetails?.img2,
    ProductDetails?.img3,
    ProductDetails?.img4,
    ProductDetails?.img5,
    ProductDetails?.img6,
    ProductDetails?.img7,
    ProductDetails?.img8,
  ].filter((img) => img && img.trim() !== "");

  // Handle Feature product by remark
  let remarkControl = async (remark) => {
    setNavActive(remark);
    await RemarkListRequest(remark, 8, 1);
  };
  let remarkControlAll = async (remark) => {
    setNavActive(remark);
    await ProductListRequest_Feature(8, 1);
  };

  let ratings = reviewList?.map((item) => item?.rating);
  let sum = ratings?.reduce((item, rating) => item + rating, 0);
  let average = sum / ratings?.length;

  const Rating = ({ average }) => {
    const fullStars = Math.floor(average || 0);
    const halfStar = average % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="single__rate">
        {[...Array(fullStars)].fill(<FaStar />)}
        {halfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].fill(<FaRegStar />)}
      </div>
    );
  };

  return (
    <>
      {/* collection start */}
      <div className="featured-collection mt-100 overflow-hidden">
        <div className="collection-tab-inner">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-heading primary-color">
                Products List by Remarks
              </h2>
            </div>

            {/* Nav Items */}
            <div className="item_nav__menu">
              <ul>
                <li>
                  <button
                    className={`${navActive === "All" && "active"}`}
                    onClick={() => remarkControlAll("All")}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    className={`${navActive === "New" && "active"}`}
                    onClick={() => remarkControl("New")}
                  >
                    New
                  </button>
                </li>
                <li>
                  <button
                    className={`${navActive === "Old" && "active"}`}
                    onClick={() => remarkControl("Old")}
                  >
                    Old
                  </button>
                </li>
                <li>
                  <button
                    className={`${navActive === "New Arrival" && "active"}`}
                    onClick={() => remarkControl("New Arrival")}
                  >
                    New Arrival
                  </button>
                </li>
                <li>
                  <button
                    className={`${navActive === "Limited" && "active"}`}
                    onClick={() => remarkControl("Limited")}
                  >
                    Limited
                  </button>
                </li>
              </ul>
            </div>

            <div className="row">
              {ProductList !== null
                ? ProductList?.products?.slice(0, item).map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-6"
                    data-aos="fade-up"
                    data-aos-duration={700}
                  >
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link
                          to={`/product-details/${item?._id}`}
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
                        </Link>
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
                          <Link
                            onClick={() => handelWishList(item?._id)}
                            to="#"
                            className="action-card action-wishlist"
                          >
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
                        </div>
                      </div>
                      <div className="product-card-details">
                        <h3 className="product-card-title">
                          <Link to={`/product-details/${item?._id}`}>
                            {item?.title}
                          </Link>
                        </h3>
                        <div className="product-card-price">
                          <span className="card-price-regular">
                            $
                            {item?.discount === true
                              ? item?.discountPrice
                              : item?.price}
                          </span>
                          <span className="card-price-compare text-decoration-line-through">
                            {item?.discount === false
                              ? ""
                              : "$" + item?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                : [...Array(8)].map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-6 mt-3"
                    data-aos="fade-up"
                    data-aos-duration={700}
                  >
                    <ImgSkeleton key={index} height={250} />
                  </div>
                ))}
            </div>
            {ProductList?.products?.length > 0 ? (
              <div
                className="view-all text-center"
                data-aos="fade-up"
                data-aos-duration={700}
              >
                <Link className="btn-primary" to="/product-all/1">
                  VIEW ALL
                </Link>
              </div>
            ) : (
              <div className="text-center mt-5">
                <p>No product!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* collection end */}

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
                        {ProductDetails?.stock === true
                          ? "In Stock"
                          : "Stock Out"}{" "}
                      </span>
                    </div>
                    <h2 className="product-title mb-3">
                      {ProductDetails?.title}
                    </h2>
                    <div className="product-rating d-flex align-items-center mb-3">
                      <span className="rating-count product  d-flex">
                        <Rating average={average} /> ({average || 0})
                      </span>
                    </div>
                    <div className="product-price-wrapper mb-4">
                      <span className="product-price regular-price">
                        {ProductDetails?.discount === true
                          ? ProductDetails?.discountPrice
                          : ProductDetails?.price}
                      </span>
                      <del className="product-price compare-price ms-2">
                        {ProductDetails?.discount === false
                          ? ""
                          : "$" + ProductDetails?.price}
                      </del>
                    </div>
                    <div className="product-sku product-meta mb-1">
                      <strong className="label">Brand:</strong>{" "}
                      {ProductDetails?.brand?.brandName}
                    </div>
                    <div className="product-sku product-meta mb-1">
                      <strong className="label">Category:</strong>{" "}
                      {ProductDetails?.category?.categoryName}
                    </div>

                    <div className="product-variant-wrapper d-flex gap-3 ">
                      <div className="product-variant product-variant-color">
                        <strong className="label mb-1 d-block">Color:</strong>
                        <Select
                          value={selectedOptionColor}
                          onChange={(selectedOption) =>
                            setSelectedOptionColor(selectedOption)
                          }
                          options={options_color}
                        />
                      </div>
                      <div className="product-variant product-variant-color">
                        <strong className="label mb-1 d-block">Size:</strong>
                        <Select
                          value={selectedOptionSize}
                          onChange={(selectedOption) =>
                            setSelectedOptionSize(selectedOption)
                          }
                          options={options_size}
                        />
                      </div>
                    </div>
                    <div className="misc d-flex align-items-end justify-content-between mt-4">
                      <div className="quantity d-flex align-items-center justify-content-between">
                        <button
                          className="qty-btn dec-qty"
                          onClick={() => {
                            if (qty > 1) {
                              setQty((qty) => qty - 1);
                            }
                          }}
                        >
                          <FaMinus />
                        </button>
                        <input
                          className="qty-input"
                          type="number"
                          name="qty"
                          value={qty}
                        />
                        <button
                          className="qty-btn inc-qty"
                          onClick={() => setQty((qty) => qty + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <div className="product-form">
                      <div className="product-form-buttons d-flex align-items-center justify-content-between mt-4">
                        {isCartSubmit === true ? (
                          <button
                            type="submit"
                            disabled
                            className="position-relative disable__btn btn-atc btn-add-to-cart loader"
                          >
                            <div className="d-flex justify-content-center">
                              <div className="spinner-border" role="status">
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <button
                            onClick={submitCartData}
                            type="submit"
                            className="position-relative btn-atc btn-add-to-cart loader out_stock"
                            disabled={
                              ProductDetails?.stock === false ? true : false
                            }
                          >
                            {ProductDetails?.stock === false
                              ? "OUT OF STOCK"
                              : " ADD TO CART"}
                          </button>
                        )}
                      </div>
                      <div className="buy-it-now-btn mt-2">
                        <button
                          onClick={() => handelWishList(ProductDetails?._id)}
                          type="submit"
                          className="position-relative btn-atc btn-buyit-now"
                        >
                          ADD TO WISH LIST
                        </button>
                      </div>
                    </div>

                    <div className="share-area mt-4 d-flex align-items-center">
                      <strong className="label mb-1 d-block">Share:</strong>

                      <ShareButton
                        shareUrl={`/product-details/${ProductDetails?._id}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionProduct;
