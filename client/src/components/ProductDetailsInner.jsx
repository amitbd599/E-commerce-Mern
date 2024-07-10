import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import moment from "moment";
import ProductStore from "../store/ProductStore";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import SkeletonBar from "../skeleton/SkeletonBar";
import ImgSkeleton from "../skeleton/ImgSkeleton";
import Select from "react-select";
import CartStore from "../store/CartStore";
import ReviewStore from "../store/ReviewStore";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/helper";
import ShareButton from "./ShareButton";
import WishListStore from "../store/WishListStore";
const ProductDetailsInner = () => {
  let navigate = useNavigate();
  let { isCartSubmit, CartListRequest, CartListGetRequest } = CartStore();
  let { GetAllReviewByProductRequest, reviewList } = ReviewStore();
  let {
    ProductList,
    ProductListRequest_Feature,
    ProductDetails,
    ProductDetailsRequest,
  } = ProductStore();
  let { WishListRequest, WishListGetRequest } = WishListStore();

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const defaultOption = { label: "Select", value: "" };
  let [selectedOptionColor, setSelectedOptionColor] = useState(defaultOption);
  let [selectedOptionSize, setSelectedOptionSize] = useState(defaultOption);
  let [qty, setQty] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await ProductDetailsRequest(id);
      await GetAllReviewByProductRequest(id);
      await ProductListRequest_Feature(12, 1);
    })();
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="single-product-icon-prev activate-arrows show-arrows-always arrows-white d-none d-md-flex justify-content-between mt-3">
        <span className="arrow-slider arrow-prev slick-arrow" onClick={onClick}>
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
        </span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="single-product-icon-next activate-arrows show-arrows-always arrows-white d-none d-md-flex justify-content-between mt-3">
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
        </span>
      </div>
    );
  }

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",

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
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  const largeSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: nav2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const thumbSliderSettings = {
    className: "thumbSliderSettings",
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
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

  const StarRating = ({ star }) => {
    star = parseInt(star);
    const totalStars = 5;
    const filledStars = Array(star).fill(<FaStar />);
    const emptyStars = Array(totalStars - star).fill(<FaRegStar />);

    return (
      <div className="star">
        {filledStars.concat(emptyStars).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

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

  let handelWishList = async (productID) => {
    await WishListRequest({ productID }).then(async (res) => {
      if (res) {
        SuccessToast("Wishlist Product add success!");
        await WishListGetRequest();
      }
    });
  };

  let pageClick = async (id) => {
    await ProductDetailsRequest(id).then(async (res) => {
      if (res) {
        navigate(`/product-details/${id}`)
        await GetAllReviewByProductRequest(id);
      }
    })

  };

  return (
    <>
      <div className="product-page mt-100">
        <div className="container">
          {ProductDetails !== null ? (
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
                      <Rating average={average} /> ({!!average === true ? average.toFixed(2) : 0})
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
          ) : (
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <ImgSkeleton height={600} />
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <SkeletonBar count={30} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* product tab start */}
      <div
        className="product-tab-section mt-100"
        data-aos="fade-up"
        data-aos-duration={700}
      >
        <div className="container">
          <div className="tab-list product-tab-list">
            <nav className="nav product-tab-nav">
              <a
                className="product-tab-link tab-link active"
                href="#pdescription"
                data-bs-toggle="tab"
              >
                Description
              </a>
              <a
                className="product-tab-link tab-link"
                href="#pshipping"
                data-bs-toggle="tab"
              >
                Shipping &amp; Returns
              </a>

              <a
                className="product-tab-link tab-link"
                href="#review"
                data-bs-toggle="tab"
              >
                Reviews
              </a>
            </nav>
          </div>
          <div className="tab-content product-tab-content">
            <div id="pdescription" className="tab-pane fade show active">
              {ProductDetails !== null ? (
                <div className="row">
                  <div className=" col-12">
                    <div className="desc-content">
                      {parse(ProductDetails?.des)}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12">
                    <SkeletonBar count={15} />
                  </div>
                  <div className="col-lg-5 col-md-12 col-12">
                    <SkeletonBar count={15} />
                  </div>
                </div>
              )}
            </div>
            <div id="pshipping" className="tab-pane fade">
              <div className="desc-content">
                <h4 className="heading_18 mb-3">
                  Returns within the European Union
                </h4>
                <p className="text_16 mb-4">
                  The European law states that when an order is being returned,
                  it is mandatory for the company to refund the product price
                  and shipping costs charged for the original shipment. Meaning:
                  one shipping fee is paid by us.
                </p>
                <p className="text_16 mb-4">
                  Standard Shipping: If you placed an order using "standard
                  shipping" and you want to return it, you will be refunded the
                  product price and initial shipping costs. However, the return
                  shipping costs will be paid by you.
                </p>
                <p className="text_16">
                  Free Shipping: If you placed an order using "free shipping"
                  and you want to return it, you will be refunded the product
                  price, but since we paid for the initial shipping, you will
                  pay for the return.
                </p>
              </div>
            </div>

            <div id="review" className="tab-pane fade ">
              <div className="review-area accordion-parent">
                <h4 className="heading_18 mb-3">Customer Reviews</h4>
              </div>
              {reviewList.length > 0 ? (
                <div className="review">
                  <ul>
                    {reviewList?.map((item, index) => (
                      <li key={index}>
                        <div className="inner__review">
                          <div className="inner__text">
                            <h3>{item?.profiles?.cus_name}</h3>
                            <div className="d-flex review__star">
                              <p className="time">
                                {moment(item?.createdAt).format("DD-MM-YYYY")}
                              </p>
                              <div className="star">
                                <StarRating star={item?.rating} />
                              </div>
                            </div>
                            <p className="review__text">{item?.des}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <p>No review found! 😢</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* product tab end */}
      {/* you may also like start */}
      <div className="featured-collection-section mt-100 home-section overflow-hidden">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">You may also like</h2>
          </div>
          <div className="product-container position-relative">
            <div className="common-slider">
              <Slider {...settings}>
                {ProductList?.products?.map((item, index) => (
                  <div
                    className="new-item px-3"
                    data-aos="fade-up"
                    data-aos-duration={300}
                    key={index}
                  >
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link
                          to={"#"}
                          className="hover-switch"
                          onClick={() => pageClick(item?._id)}
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
                      </div>
                      <div className="product-card-details text-center">
                        <h3 className="product-card-title">
                          <Link to={"#"} onClick={() => pageClick(item?._id)}>
                            {item?.title}
                          </Link>
                        </h3>
                        <div className="product-card-price">
                          <span className="product-price regular-price">
                            {item?.discount === true
                              ? item?.discountPrice
                              : item?.price}
                          </span>
                          <del className="product-price compare-price ms-2">
                            {item?.discount === false ? "" : "$" + item?.price}
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* you may also lik end */}
    </>
  );
};

export default ProductDetailsInner;
