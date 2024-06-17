import React, { useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import UserStore from "../store/UserStore";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/helper";
import CartStore from "../store/CartStore";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoMdClose } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import {
  FaExpand,
  FaFeather,
  FaGg,
  FaRegSun,
  FaUserCheck,
} from "react-icons/fa6";
import ProductStore from "../store/ProductStore";
import ReviewStore from "../store/ReviewStore";
const OrderInner = () => {
  let { ProfileDetailsRequest, ProfileDetails, ProfileUpdateRequest } =
    UserStore();

  let { ReviewListCreateRequest } = ReviewStore();
  let { ProductDetailsRequest } = ProductStore();
  let [active, setActive] = useState(false);
  let [id, setId] = useState("");
  let [rating, setRating] = useState(4);
  let [invoiceID, setInvoiceID] = useState("");

  let {
    InvoiceListGetRequest,
    InvoiceList,
    InvoiceSingleGetRequest,
    InvoiceSingle,
    GetAllOrderRequest,
    allOrder,
  } = CartStore();

  useEffect(() => {
    (async () => {
      await ProfileDetailsRequest();
      await InvoiceListGetRequest();
      await GetAllOrderRequest();
    })();
  }, []);

  let {
    cus_addRef,
    cus_cityRef,
    cus_countryRef,
    cus_faxRef,
    cus_nameRef,
    cus_phoneRef,
    cus_postcodeRef,
    cus_stateRef,
    ship_addRef,
    ship_cityRef,
    ship_countryRef,
    ship_nameRef,
    ship_phoneRef,
    ship_postcodeRef,
    ship_stateRef,
    reviewRef,
  } = useRef();

  const columns = [
    {
      name: "Tran id",
      selector: (row) => row?.tran_id,
      sortable: true,
      wrap: true,
      width: "200px",
    },

    {
      name: "Customer Name",
      selector: (row) => row?.cus_details?.[0]?.Name,
      sortable: true,
      wrap: true,
      width: "200px",
    },

    {
      name: "deliver_status",
      selector: (row) => row?.deliver_status,
      sortable: true,
      wrap: true,
      width: "150px",
    },
    {
      name: "payment_status",
      selector: (row) => (
        <span
          className={
            row?.payment_status === "success"
              ? "green_badge"
              : row?.payment_status === "pending"
              ? "yellow_badge"
              : "red_badge"
          }
        >
          {row?.payment_status}
        </span>
      ),
      sortable: true,
      wrap: true,
      width: "150px",
    },
    {
      name: "Total",
      selector: (row) => row?.payable,
      sortable: true,
      wrap: true,
      width: "100px",
    },
    {
      name: "Action",
      with: "200px",

      selector: (row) => (
        <div className="d-flex gap-2 ">
          <div className="view_invoice">
            <Link target="_blank" to={`/invoice/${row?._id}`}>
              View Invoice
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const columns_order = [
    {
      name: "Title",
      selector: (row) => row?.product?.[0]?.title,
      sortable: true,
      wrap: true,
      width: "400px",
    },

    {
      name: "Color",
      selector: (row) => row?.color,
      sortable: true,
      wrap: true,
      width: "80px",
    },
    {
      name: "Image",
      selector: (row) => (
        <div className="order__img">
          <img src={row?.product?.[0]?.img1} alt="" />
        </div>
      ),
      sortable: true,
      wrap: true,
      width: "100px",
    },

    {
      name: "Price",
      selector: (row) => row?.price,
      sortable: true,
      wrap: true,
      width: "80px",
    },
    {
      name: "QTY",
      selector: (row) => row?.qty,
      sortable: true,
      wrap: true,
      width: "80px",
    },

    {
      name: "Action",
      with: "100px",

      selector: (row) => (
        <div className="d-flex gap-2 ">
          <div className="view_invoice">
            <Link
              onClick={() => {
                openPopup(row?.productID);
                setInvoiceID(row?.invoiceID);
              }}
            >
              Give review
            </Link>
          </div>
        </div>
      ),
    },
  ];

  let submitProfile = () => {
    let cus_add = cus_addRef.value;
    let cus_city = cus_cityRef.value;
    let cus_country = cus_countryRef.value;
    let cus_fax = cus_faxRef.value;
    let cus_name = cus_nameRef.value;
    let cus_phone = cus_phoneRef.value;
    let cus_postcode = cus_postcodeRef.value;
    let cus_state = cus_stateRef.value;
    let ship_add = ship_addRef.value;
    let ship_city = ship_cityRef.value;
    let ship_country = ship_countryRef.value;
    let ship_name = ship_nameRef.value;
    let ship_phone = ship_phoneRef.value;
    let ship_postcode = ship_postcodeRef.value;
    let ship_state = ship_stateRef.value;

    ProfileUpdateRequest({
      cus_add,
      cus_city,
      cus_country,
      cus_fax,
      cus_name,
      cus_phone,
      cus_postcode,
      cus_state,
      ship_add,
      ship_city,
      ship_country,
      ship_name,
      ship_phone,
      ship_postcode,
      ship_state,
    }).then((res) => {
      if (res) {
        SuccessToast("Profile updated successfully");
      } else {
        ErrorToast("Profile update failed");
      }
    });
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  let openPopup = async (productID) => {
    await ProductDetailsRequest(productID);
    setActive(true);
    setId(productID);
  };
  let reviewSubmit = async () => {
    let des = reviewRef.value;
    let productID = id;
    if (IsEmpty(des)) {
      ErrorToast("Please give review");
      return;
    } else {
      await ReviewListCreateRequest({ des, rating, productID, invoiceID }).then(
        (res) => {
          if (res) {
            SuccessToast("Review add successfully!");
            setRating(4);
            reviewRef.value = "";
            setActive(false);
          }
        }
      );
    }
  };

  console.log(invoiceID);

  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="tab__btn">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-Dashboard-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Dashboard"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-Dashboard"
                  aria-selected="true"
                >
                  {" "}
                  <FaFeather className="me-2" />
                  Dashboard
                </button>
                <button
                  className="nav-link"
                  id="v-pills-Invoice-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Invoice"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-Invoice"
                  aria-selected="false"
                >
                  {" "}
                  <FaGg className="me-2" />
                  All Invoice
                </button>
                <button
                  className="nav-link"
                  id="v-pills-Order-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Order"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-Order"
                  aria-selected="false"
                >
                  {" "}
                  <FaGg className="me-2" />
                  All ordered products
                </button>
                <button
                  className="nav-link"
                  id="v-pills-information-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-information"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-information"
                  aria-selected="false"
                >
                  {" "}
                  <FaUserCheck className="me-2" />
                  Edit profile
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  {" "}
                  <FaRegSun className="me-2" />
                  Settings
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="inner__tab">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-Dashboard"
                  role="tabpanel"
                  aria-labelledby="v-pills-Dashboard-tab"
                >
                  <div className="view dashboard">
                    <div className="wrapper">
                      <h5>
                        Hello Rosie! <strong>{ProfileDetails?.email}</strong>{" "}
                      </h5>
                      <p>
                        From your account dashboard. you can easily check & view
                        your recent orders, manage your shipping and billing
                        addresses and edit your password and account details.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Invoice"
                  role="tabpanel"
                  aria-labelledby="v-pills-Invoice-tab"
                >
                  <div className="title__invoice">
                    <h2>All invoice data</h2>
                  </div>
                  <div className="view order">
                    <div className="wrapper">
                      <DataTable
                        columns={columns}
                        data={InvoiceList}
                        pagination
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Order"
                  role="tabpanel"
                  aria-labelledby="v-pills-Order-tab"
                >
                  <div className="title__invoice">
                    <h2>All ordered products</h2>
                  </div>
                  <div className="view order">
                    <div className="wrapper">
                      <DataTable
                        columns={columns_order}
                        data={allOrder}
                        pagination
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-information"
                  role="tabpanel"
                  aria-labelledby="v-pills-information-tab"
                >
                  <div className="title__invoice">
                    <h2>Update customer details and shipping details</h2>
                  </div>
                  <div className="view information">
                    <div className="wrapper">
                      <h3>Customer details:</h3>
                      <div className="row">
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer Name</label>
                            <input
                              type="text"
                              ref={(input) => (cus_nameRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_name
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer address</label>
                            <input
                              type="text"
                              ref={(input) => (cus_addRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_add
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer city</label>
                            <input
                              type="text"
                              ref={(input) => (cus_cityRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_city
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer country</label>
                            <input
                              type="text"
                              ref={(input) => (cus_countryRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_country
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer fax</label>
                            <input
                              type="text"
                              ref={(input) => (cus_faxRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_fax
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer phone</label>
                            <input
                              type="text"
                              ref={(input) => (cus_phoneRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_phone
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer postcode</label>
                            <input
                              type="text"
                              ref={(input) => (cus_postcodeRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_postcode
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Customer state</label>
                            <input
                              type="text"
                              ref={(input) => (cus_stateRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.cus_state
                              }
                            />
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="wrapper">
                      <h3>Shipping details:</h3>
                      <div className="row">
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Shipping name</label>
                            <input
                              type="text"
                              ref={(input) => (ship_nameRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.ship_name
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Shipping address</label>
                            <input
                              type="text"
                              ref={(input) => (ship_addRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.ship_add
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Shipping city</label>
                            <input
                              type="text"
                              ref={(input) => (ship_cityRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.ship_city
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Shipping country</label>
                            <input
                              type="text"
                              ref={(input) => (ship_countryRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.ship_country
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Shipping phone</label>
                            <input
                              type="text"
                              ref={(input) => (ship_phoneRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.ship_phone
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Shipping postcode</label>
                            <input
                              type="text"
                              ref={(input) => (ship_postcodeRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.ship_postcode
                              }
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-4">
                          <fieldset>
                            <label className="label">Shipping state</label>
                            <input
                              type="text"
                              ref={(input) => (ship_stateRef = input)}
                              defaultValue={
                                ProfileDetails?.profile?.[0]?.ship_state
                              }
                            />
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <button className="btn-primary" onClick={submitProfile}>
                      Update Profile
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review given */}
      <div className={`review__inner  ${active && "active"}`}>
        <div className="wrap">
          <div className="product">
            <div className="pt-2">
              <img
                className="img-fluid"
                src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/furniture/2.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>Product title</p>
              <textarea
                name=""
                id=""
                className="input_text"
                ref={(input) => (reviewRef = input)}
              ></textarea>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={30}
                activeColor="#ffd700"
                classNames={"input_rate"}
                value={rating}
              />

              <button onClick={reviewSubmit}>Submit Review</button>
            </div>
            <div className="close__btn" onClick={() => setActive(false)}>
              <IoMdClose />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInner;
