import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import moment from "moment";
import ProductStore from "../store/ProductStore";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import SkeletonBar from "../skeleton/SkeletonBar";
import ImgSkeleton from "../skeleton/ImgSkeleton";
import Select from "react-select";
import CartStore from "../store/CartStore";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/helper";
const ProductDetailsInner = () => {
  let { isCartSubmit, CartListRequest } = CartStore();
  let {
    ReviewsListRequest,
    ReviewsList,
    ProductDetails,
    ProductDetailsRequest,
  } = ProductStore();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let [selectedOptionColor, setSelectedOptionColor] = useState("");
  let [selectedOptionSize, setSelectedOptionSize] = useState("");
  let [qty, setQty] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await ProductDetailsRequest(id);
      await ReviewsListRequest(id);
    })();
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="testimonial-icon-prev">
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
      <div className="testimonial-icon-next">
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
    arrows: true,
    infinite: true,
    slidesToShow: 4,
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
    let color = selectedOptionColor;
    let size = selectedOptionSize;
    let productID = ProductDetails?._id;

    console.log({ color, size, qty, productID });

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
        qty: qty.toString(),
        productID: productID,
      };
      await CartListRequest(reqBody).then((res) => {
        if (res) {
          SuccessToast("Product add success!");
        } else {
          ErrorToast("Something went wrong!");
        }
      });
    }
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
                    <span className="star-rating">{/* <StarRating /> */}</span>
                    <span className="rating-count ms-2">
                      ({ProductDetails?.star})
                    </span>
                  </div>
                  <div className="product-price-wrapper mb-4">
                    <span className="product-price regular-price">
                      ${ProductDetails?.price}
                    </span>
                    <del className="product-price compare-price ms-2">
                      ${ProductDetails?.discountPrice}
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
                        defaultValue={selectedOptionColor}
                        onChange={(selectedOption) =>
                          setSelectedOptionColor(selectedOption.value)
                        }
                        options={options_color}
                      />
                    </div>
                    <div className="product-variant product-variant-color">
                      <strong className="label mb-1 d-block">Size:</strong>
                      <Select
                        defaultValue={selectedOptionSize}
                        onChange={(selectedOption) =>
                          setSelectedOptionSize(selectedOption.value)
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
                          if (qty > 0) {
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
                          className="position-relative btn-atc btn-add-to-cart loader"
                        >
                          ADD TO CART
                        </button>
                      )}
                    </div>
                    <div className="buy-it-now-btn mt-2">
                      <button
                        type="submit"
                        className="position-relative btn-atc btn-buyit-now"
                      >
                        ADD TO WISH LIST
                      </button>
                    </div>
                  </div>

                  <div className="share-area mt-4 d-flex align-items-center">
                    <strong className="label mb-1 d-block">Share:</strong>
                    <ul className="list-unstyled share-list d-flex align-items-center mb-1 flex-wrap">
                      <li className="share-item">
                        <FaFacebookF />
                      </li>
                      <li className="share-item">
                        <FaTwitter />
                      </li>
                      <li className="share-item">
                        <FaInstagram />
                      </li>
                      <li className="share-item">
                        <FaLinkedinIn />
                      </li>
                    </ul>
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
                      {parse(ProductDetails?.shortDes)}
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
              {ProductDetails !== null ? (
                <div className="desc-content">
                  <h4 className="heading_18 mb-3">
                    Returns within the European Union
                  </h4>
                  <p className="text_16 mb-4">
                    The European law states that when an order is being
                    returned, it is mandatory for the company to refund the
                    product price and shipping costs charged for the original
                    shipment. Meaning: one shipping fee is paid by us.
                  </p>
                  <p className="text_16 mb-4">
                    Standard Shipping: If you placed an order using "standard
                    shipping" and you want to return it, you will be refunded
                    the product price and initial shipping costs. However, the
                    return shipping costs will be paid by you.
                  </p>
                  <p className="text_16">
                    Free Shipping: If you placed an order using "free shipping"
                    and you want to return it, you will be refunded the product
                    price, but since we paid for the initial shipping, you will
                    pay for the return.
                  </p>
                </div>
              ) : (
                <SkeletonBar count={15} />
              )}
            </div>

            <div id="review" className="tab-pane fade ">
              <div className="review-area accordion-parent">
                <h4 className="heading_18 mb-3">Customer Reviews</h4>
              </div>
              <div className="review">
                <ul>
                  {ReviewsList?.map((item, index) => (
                    <li key={index}>
                      <div className="inner__review">
                        <div className="inner__text">
                          <h3>Alex Johan</h3>
                          <div className="d-flex review__star">
                            <p className="time">
                              {moment(item?.createdAt).format("DD-MM-YYYY")}
                            </p>
                            <div className="star">
                              <StarRating star={item?.rating} />
                            </div>
                          </div>
                          <p className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem accusantium
                            obcaecati quos voluptate nesciunt facilis itaque
                            modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
                {[...Array(6)].map((item, index) => (
                  <div
                    className="new-item px-3"
                    data-aos="fade-up"
                    data-aos-duration={300}
                    key={index}
                  >
                    <div className="product-card">
                      <div className="product-card-img">
                        <a
                          className="hover-switch"
                          href="collection-left-sidebar.html"
                        >
                          <img
                            className="secondary-img"
                            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/4.jpg"
                            alt="product-img"
                          />
                          <img
                            className="primary-img"
                            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/bags/26.jpg"
                            alt="product-img"
                          />
                        </a>
                        <div className="product-card-action product-card-action-2">
                          <a
                            href="#quickview-modal"
                            className="quickview-btn btn-primary"
                            data-bs-toggle="modal"
                          >
                            QUICKVIEW
                          </a>
                          <Link to="#" className="addtocart-btn btn-primary">
                            ADD TO CART
                          </Link>
                        </div>
                        <a
                          href="wishlist.html"
                          className="wishlist-btn card-wishlist"
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
                              fill="black"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="product-card-details text-center">
                        <h3 className="product-card-title">
                          <a href="collection-left-sidebar.html">
                            black backpack
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
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* you may also lik end */}
      {/* <Quickview /> */}
    </>
  );
};

export default ProductDetailsInner;
