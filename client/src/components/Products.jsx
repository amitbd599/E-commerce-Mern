import React, { useEffect, useState } from "react";
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
import ProductStore from "../store/ProductStore";
import Slider from "react-slick";
import Select from "react-select";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ImgSkeleton from "../skeleton/ImgSkeleton";
import SkeletonBar from "../skeleton/SkeletonBar";
import CartStore from "../store/CartStore";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/helper";
import WishListStore from "../store/WishListStore";
const Products = () => {
  const navigate = useNavigate();
  const params = useParams();
  let {
    ProductList,
    ProductDetails,
    BrandList,
    CategoryList,
    ProductDetailsRequest,
    ProductListRequest_Feature,
    BrandListRequest,
    CategoryListRequest,
    RemarkListRequest,
    SimilarCategoryListRequest,
    SimilarBrandsListRequest,
    SimilarStockListRequest,
    SimilarColorListRequest,
  } = ProductStore();
  let { isCartSubmit, CartListRequest, CartListGetRequest } = CartStore();
  let { WishListRequest, WishListGetRequest } = WishListStore();

  let [title, setTitle] = useState("All Products");
  useEffect(() => {
    (async () => {
      if (!!params.categoriesID === true) {
        await SimilarCategoryListRequest(
          params.categoriesID,
          12,
          params.pageNo
        );
      } else if (!!params.brandsID === true) {
        await SimilarBrandsListRequest(params.brandsID, 12, params.pageNo);
      } else if (!!params.remark === true) {
        await RemarkListRequest(params.remark, 12, params.pageNo);
      } else if (!!params.stock === true) {
        await RemarkListRequest(params.stock, 12, params.pageNo);
      } else if (!!params.color === true) {
        await RemarkListRequest(params.color, 12, params.pageNo);
      } else {
        await ProductListRequest_Feature(12, params.pageNo);
      }

      await BrandListRequest();
      await CategoryListRequest();
    })();
  }, []);

  useEffect(() => {
    if (!!params.categoriesID === true) {
      setTitle("Product filter by category");
    } else if (!!params.brandsID === true) {
      setTitle("Product filter by brand");
    } else if (!!params.remark === true) {
      setTitle("Product filter by remark");
    } else if (!!params.stock === true) {
      setTitle("Product filter by stock");
    } else if (!!params.color === true) {
      setTitle("Product filter by color");
    }
  }, []);

  let [selectedOptionColor, setSelectedOptionColor] = useState("");
  let [selectedOptionSize, setSelectedOptionSize] = useState("");
  let [qty, setQty] = useState(1);
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
          SuccessToast("Product add success!");
        } else {
          ErrorToast("Something went wrong!");
        }
      });
    }
  };

  let allProductReqFun = async () => {
    navigate(`/product-all/1`);
    await ProductListRequest_Feature(12, params.pageNo);
    setTitle("All products");
  };

  let categoriesReqFun = async (id) => {
    await SimilarCategoryListRequest(id, 12, params.pageNo);
    navigate(`/product-by-categories/${id}/1`);
    setTitle("Product filter by category");
  };

  let brandsReqFun = async (id) => {
    await SimilarBrandsListRequest(id, 12, params.pageNo);
    navigate(`/product-by-brands/${id}/1`);
    setTitle("Product filter by brand");
  };

  let remarkReqFun = async (value) => {
    await RemarkListRequest(value, 12, params.pageNo);
    navigate(`/product-by-remark/${value}/1`);
    setTitle("Product filter by remark");
  };

  let stockReqFun = async (value) => {
    await SimilarStockListRequest(value, 12, params.pageNo);
    navigate(`/product-by-stock/${value}/1`);
    setTitle("Product filter by stock");
  };

  let colorReqFun = async (value) => {
    await SimilarColorListRequest(value, 12, params.pageNo);
    navigate(`/product-by-color/${value}/1`);
    setTitle("Product filter by color");
  };

  let handelClick = async (id) => {
    await ProductDetailsRequest(id);
  };

  let handelWishList = async (productID) => {
    await WishListRequest({ productID }).then(async (res) => {
      if (res) {
        SuccessToast("Wishlist Product add success!");
        await WishListGetRequest();
      }
    });
  };

  const handelPageClick = async (event) => {
    let pageNo = event.selected;

    if (!!params.categoriesID === true) {
      await SimilarCategoryListRequest(params.categoriesID, 12, pageNo + 1);
      navigate(`/product-by-categories/${params.categoriesID}/${pageNo + 1}`);
    } else if (!!params.brandsID === true) {
      await SimilarBrandsListRequest(params.brandsID, 12, pageNo + 1);
      navigate(`/product-by-brands/${params.brandsID}/${pageNo + 1}`);
    } else if (!!params.remark === true) {
      await RemarkListRequest(params.remark, 12, pageNo + 1);
      navigate(`/product-by-remark/${params.remark}/${pageNo + 1}`);
    } else if (!!params.stock === true) {
      await RemarkListRequest(params.stock, 12, pageNo + 1);
      navigate(`/product-by-stock/${params.stock}/${pageNo + 1}`);
    } else if (!!params.color === true) {
      await RemarkListRequest(params.color, 12, pageNo + 1);
      navigate(`/product-by-color/${params.color}/${pageNo + 1}`);
    } else {
      await ProductListRequest_Feature(12, pageNo + 1);
      navigate(`/product-all/${pageNo + 1}`);
    }
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

  return (
    <div className="collection mt-100">
      <div className="container">
        <div className="row flex-row-reverse">
          {/* product area start */}
          <div className="col-lg-9 col-md-12 col-12">
            <div className="filter-sort-wrapper d-flex justify-content-between flex-wrap">
              <div className="collection-title-wrap d-flex align-items-end">
                <h2 className="collection-title heading_24 mb-0">{title}</h2>
                <p className="collection-counter text_16 mb-0 ms-2">
                  ({ProductList?.totalDocuments} items)
                </p>
              </div>
            </div>
            <div className="collection-product-container">
              <div className="row">
                {ProductList !== null
                  ? ProductList?.products?.map((item, index) => (
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
                  : [...Array(20)].map((item, index) => (
                      <div
                        key={index}
                        className="col-lg-3 col-md-6 col-6"
                        data-aos="fade-up"
                        data-aos-duration={700}
                      >
                        <ImgSkeleton key={index} />
                      </div>
                    ))}
              </div>
            </div>

            {TotalData > 12 ? (
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
            ) : (
              ""
            )}
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
                          id="All"
                          name="Filter"
                          value="30"
                          checked={!!params.categoriesID === false && true}
                          onClick={allProductReqFun}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">All Category</span>
                      </label>
                    </li>
                    {CategoryList !== null ? (
                      CategoryList.slice(0, 10).map((item, index) => (
                        <li className="filter-item" key={index}>
                          <label className="filter-label">
                            <input
                              type="radio"
                              id={`index${index}`}
                              name="Filter"
                              value={item?._id}
                              checked={
                                params.categoriesID === item?._id && true
                              }
                              onChange={() => categoriesReqFun(item?._id)}
                            />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">
                              {item?.categoryName}
                            </span>
                          </label>
                        </li>
                      ))
                    ) : (
                      <SkeletonBar count={10} width={200} />
                    )}
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
                    {BrandList !== null ? (
                      BrandList?.slice(0, 10).map((item, index) => (
                        <li className="filter-item" key={index}>
                          <label className="filter-label">
                            <input
                              type="radio"
                              id={`index${index}`}
                              name="Filter"
                              value={item?._id}
                              onChange={() => brandsReqFun(item?._id)}
                              checked={params.brandsID === item?._id && true}
                            />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">
                              {item?.brandName}
                            </span>
                          </label>
                        </li>
                      ))
                    ) : (
                      <SkeletonBar count={10} width={200} />
                    )}
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
                          id="New"
                          name="Filter"
                          value="New"
                          onChange={() => remarkReqFun("New")}
                          checked={params.remark === "New" && true}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">New</span>
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label">
                        <input
                          type="radio"
                          id="Trading"
                          name="Filter"
                          value="Trading"
                          onChange={() => remarkReqFun("Trading")}
                          checked={params.remark === "Trading" && true}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">Trading</span>
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label">
                        <input
                          type="radio"
                          id="Top"
                          name="Filter"
                          value="Top"
                          onChange={() => remarkReqFun("Top")}
                          checked={params.remark === "Top" && true}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">Top</span>
                      </label>
                    </li>
                    <li className="filter-item">
                      <label className="filter-label">
                        <input
                          type="radio"
                          id="Special"
                          name="Filter"
                          value="Special"
                          onChange={() => remarkReqFun("Special")}
                          checked={params.remark === "Special" && true}
                        />
                        <span className="filter-checkbox rounded me-2" />
                        <span className="filter-text">Special</span>
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
                          onChange={() => stockReqFun("true")}
                          checked={params.stock === "true" && true}
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
                          onChange={() => stockReqFun("false")}
                          checked={params.stock === "false" && true}
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
                          onChange={() => colorReqFun("blue")}
                          checked={params.color === "blue" && true}
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
                          onChange={() => colorReqFun("red")}
                          checked={params.color === "red" && true}
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
                          onChange={() => colorReqFun("green")}
                          checked={params.color === "green" && true}
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
                          onChange={() => colorReqFun("purple")}
                          checked={params.color === "purple" && true}
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
                          onChange={() => colorReqFun("gold")}
                          checked={params.color === "gold" && true}
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
                          onChange={() => colorReqFun("pink")}
                          checked={params.color === "pink" && true}
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
                          onChange={() => colorReqFun("orange")}
                          checked={params.color === "orange" && true}
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
                          onChange={() => colorReqFun("aqua")}
                          checked={params.color === "aqua" && true}
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
                          onChange={() => colorReqFun("brown")}
                          checked={params.color === "brown" && true}
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
                          onChange={() => colorReqFun("bisque")}
                          checked={params.color === "bisque" && true}
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
                          onChange={() => colorReqFun("grey")}
                          checked={params.color === "grey" && true}
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
                        {ProductDetails?.stock === true
                          ? "In Stock"
                          : "Stock Out"}{" "}
                      </span>
                    </div>
                    <h2 className="product-title mb-3">
                      {ProductDetails?.title}
                    </h2>
                    <div className="product-rating d-flex align-items-center mb-3">
                      <span className="star-rating">
                        {/* <StarRating /> */}
                      </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
