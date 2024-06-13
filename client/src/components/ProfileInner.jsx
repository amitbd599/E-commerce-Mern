import React, { useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import UserStore from "../store/UserStore";
import { ErrorToast, SuccessToast } from "../helper/helper";
const OrderInner = () => {
  let { ProfileDetailsRequest, ProfileDetails, ProfileUpdateRequest } =
    UserStore();

  useEffect(() => {
    (async () => {
      await ProfileDetailsRequest();
    })();
  }, []);

  console.log(ProfileDetails?.profile);

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
  } = useRef();

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
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
                  Dashboard
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
                  Order
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
                  Edit profile information
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
                  id="v-pills-Order"
                  role="tabpanel"
                  aria-labelledby="v-pills-Order-tab"
                >
                  <div className="view order">
                    <div className="wrapper">
                      <DataTable columns={columns} data={data} pagination />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-information"
                  role="tabpanel"
                  aria-labelledby="v-pills-information-tab"
                >
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
    </section>
  );
};

export default OrderInner;
