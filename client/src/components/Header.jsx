import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CartStore from "../store/CartStore";
import UserStore from "../store/UserStore";
import WishListStore from "../store/WishListStore";

const Header = () => {
  let {
    CartList,
    CartListGetRequest,
    CartListUpdateRequest,
    CartListDeleteRequest,
  } = CartStore();
  let { WishList, WishListGetRequest } = WishListStore();
  let { isLogin } = UserStore();

  useEffect(() => {
    (async () => {
      if (isLogin()) {
        await CartListGetRequest();
        await WishListGetRequest();
      }
    })();
  }, []);

  let updateCartList = async (id, productID, qtyItem) => {
    await CartListUpdateRequest(id, productID, qtyItem).then(async (res) => {
      if (res) {
        await CartListGetRequest();
      }
    });
  };

  let deleteCartList = async (id) => {
    await CartListDeleteRequest(id).then(async (res) => {
      if (res) {
        await CartListGetRequest();
      }
    });
  };

  console.log(WishList);
  return (
    <>
      {/* header start */}
      <header className="sticky-header border-btm-black header-1">
        <div className="header-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-4">
                <div className="header-logo">
                  <NavLink to="/" className="logo-main">
                    <img src="assets/img/logo.png" loading="lazy" alt="bisum" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 d-lg-block d-none">
                <nav className="site-navigation">
                  <ul className="main-menu list-unstyled justify-content-center">
                    <li className="menu-list-item nav-item has-dropdown ">
                      <div className="mega-menu-header">
                        <NavLink
                          className={(navData) =>
                            navData.isActive ? "nav-link active" : "nav-link"
                          }
                          to="/"
                        >
                          Home
                        </NavLink>
                      </div>
                    </li>
                    <li className="menu-list-item nav-item has-dropdown ">
                      <div className="mega-menu-header">
                        <NavLink
                          className={(navData) =>
                            navData.isActive ? "nav-link active" : "nav-link"
                          }
                          to="/about"
                        >
                          About
                        </NavLink>
                      </div>
                    </li>
                    <li className="menu-list-item nav-item has-dropdown ">
                      <div className="mega-menu-header">
                        <NavLink
                          className={(navData) =>
                            navData.isActive ? "nav-link active" : "nav-link"
                          }
                          to="/blog"
                        >
                          Blog
                        </NavLink>
                      </div>
                    </li>
                    <li className="menu-list-item nav-item has-dropdown ">
                      <div className="mega-menu-header">
                        <NavLink
                          className={(navData) =>
                            navData.isActive ? "nav-link active" : "nav-link"
                          }
                          to="/faq"
                        >
                          FAQ
                        </NavLink>
                      </div>
                    </li>
                    <li className="menu-list-item nav-item has-dropdown ">
                      <div className="mega-menu-header">
                        <NavLink
                          className={(navData) =>
                            navData.isActive ? "nav-link active" : "nav-link"
                          }
                          to="/product-all/1"
                        >
                          Collection
                        </NavLink>
                      </div>
                    </li>
                    <li className="menu-list-item nav-item has-dropdown ">
                      <div className="mega-menu-header">
                        <NavLink
                          className={(navData) =>
                            navData.isActive ? "nav-link active" : "nav-link"
                          }
                          to="/contact"
                        >
                          Contact
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 col-md-8 col-8">
                <div className="header-action d-flex align-items-center justify-content-end">
                  <Link
                    className="header-action-item header-wishlist ms-4 d-none d-lg-block"
                    to="/wishlist"
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
                    <span className="header-wishlist-count">
                      {isLogin() ? WishList?.length : "0"}
                    </span>
                  </Link>
                  <Link
                    className="header-action-item header-cart ms-4"
                    to="#drawer-cart"
                    data-bs-toggle="offcanvas"
                  >
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
                        fill="black"
                      />
                    </svg>
                    <span className="header-wishlist-count">
                      {isLogin() ? CartList?.length : "0"}
                    </span>
                  </Link>
                  <Link
                    className="header-action-item header-hamburger ms-4 d-lg-none"
                    to="#drawer-menu"
                    data-bs-toggle="offcanvas"
                  >
                    <svg
                      className="icon icon-hamburger"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={3} y1={12} x2={21} y2={12} />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* drawer menu start */}
      <div
        className="offcanvas offcanvas-start d-flex d-lg-none"
        tabIndex={-1}
        id="drawer-menu"
      >
        <div className="offcanvas-wrapper">
          <div className="offcanvas-header border-btm-black">
            <h5 className="drawer-heading">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body p-0 d-flex flex-column justify-content-between">
            <nav className="site-navigation">
              <ul className="main-menu list-unstyled">
                <li className="menu-list-item nav-item has-dropdown ">
                  <div className="mega-menu-header">
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "nav-link active" : "nav-link"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </div>
                </li>
                <li className="menu-list-item nav-item has-dropdown ">
                  <div className="mega-menu-header">
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "nav-link active" : "nav-link"
                      }
                      to="/about"
                    >
                      About
                    </NavLink>
                  </div>
                </li>
                <li className="menu-list-item nav-item has-dropdown ">
                  <div className="mega-menu-header">
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "nav-link active" : "nav-link"
                      }
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                  </div>
                </li>
                <li className="menu-list-item nav-item has-dropdown ">
                  <div className="mega-menu-header">
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "nav-link active" : "nav-link"
                      }
                      to="/faq"
                    >
                      FAQ
                    </NavLink>
                  </div>
                </li>
                <li className="menu-list-item nav-item has-dropdown ">
                  <div className="mega-menu-header">
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "nav-link active" : "nav-link"
                      }
                      to="/product/all"
                    >
                      Collection
                    </NavLink>
                  </div>
                </li>
                <li className="menu-list-item nav-item has-dropdown ">
                  <div className="mega-menu-header">
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "nav-link active" : "nav-link"
                      }
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </div>
                </li>
              </ul>
            </nav>
            <ul className="utility-menu list-unstyled">
              <li className="utilty-menu-item">
                <a className="announcement-text" href="tel:+1-078-2376">
                  <span className="utilty-icon-wrapper">
                    <svg
                      className="icon icon-phone"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  Call: +1 078 2376
                </a>
              </li>
              <li className="utilty-menu-item">
                <Link
                  className="announcement-login announcement-text"
                  to="/login"
                >
                  <span className="utilty-icon-wrapper">
                    <svg
                      className="icon icon-user"
                      width={24}
                      height={24}
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 0C3.07227 0 1.5 1.57227 1.5 3.5C1.5 4.70508 2.11523 5.77539 3.04688 6.40625C1.26367 7.17188 0 8.94141 0 11H1C1 8.78516 2.78516 7 5 7C7.21484 7 9 8.78516 9 11H10C10 8.94141 8.73633 7.17188 6.95312 6.40625C7.88477 5.77539 8.5 4.70508 8.5 3.5C8.5 1.57227 6.92773 0 5 0ZM5 1C6.38672 1 7.5 2.11328 7.5 3.5C7.5 4.88672 6.38672 6 5 6C3.61328 6 2.5 4.88672 2.5 3.5C2.5 2.11328 3.61328 1 5 1Z"
                        fill="#000"
                      />
                    </svg>
                  </span>
                  <span>Login</span>
                </Link>
              </li>
              <li className="utilty-menu-item">
                <Link
                  className="header-action-item header-wishlist"
                  to="/wishlist"
                >
                  <span className="utilty-icon-wrapper">
                    <svg
                      className="icon icon-wishlist"
                      width={26}
                      height={22}
                      viewBox="0 0 26 22"
                      fill="#000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                        fill="#000"
                      />
                    </svg>
                  </span>
                  <span>My wishlist</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* drawer menu end */}

      {/* drawer cart start */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="drawer-cart">
        <div className="offcanvas-header border-btm-black">
          <h5 className="cart-drawer-heading text_16">
            Your Cart ({CartList?.length})
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body p-0">
          <div className="cart-content-area d-flex justify-content-between flex-column">
            {CartList?.length > 0 ? (
              <div className="minicart-loop custom-scrollbar">
                {CartList?.reverse()?.map((item, index) => (
                  <div className="minicart-item d-flex" key={index}>
                    <div className="mini-img-wrapper">
                      <img
                        className="mini-img"
                        src={item?.product?.img1}
                        alt="img"
                      />
                    </div>
                    <div className="product-info">
                      <h2 className="product-title">
                        <Link to={`/product-details/${item?.productID}`}>
                          {item?.product?.title}
                        </Link>
                      </h2>
                      <p className="product-vendor">Color: {item?.color}</p>
                      <p className="product-vendor">Size: {item?.size}</p>
                      <div className="misc d-flex mt-2 align-items-end justify-content-between">
                        <div className="quantity d-flex align-items-center justify-content-between">
                          <button
                            className="qty-btn dec-qty"
                            onClick={() => {
                              if (parseInt(item?.qty) > 1) {
                                updateCartList(
                                  item?._id,
                                  item?.productID,
                                  parseInt(item?.qty) - 1
                                );
                              }
                            }}
                          >
                            <img src="/assets/img/icon/minus.svg" alt="minus" />
                          </button>
                          <input
                            className="qty-input"
                            type="number"
                            name="qty"
                            value={parseInt(item?.qty)}
                          />
                          <button
                            className="qty-btn inc-qty"
                            onClick={() => {
                              updateCartList(
                                item?._id,
                                item?.productID,
                                parseInt(item?.qty) + 1
                              );
                            }}
                          >
                            <img src="/assets/img/icon/plus.svg" alt="plus" />
                          </button>
                        </div>
                        <div className="product-remove-area d-flex flex-column align-items-end">
                          <div className="product-price">
                            ${item?.qty * parseInt(item?.product?.price)}
                          </div>
                          <Link
                            to="#"
                            className="product-remove"
                            onClick={() => deleteCartList(item?._id)}
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="minicart-loop custom-scrollbar ps-4 mt-4">
                <p>No product added 🚫</p>
              </div>
            )}

            <div className="minicart-footer">
              <div className="minicart-calc-area">
                <div className="minicart-calc d-flex align-items-center justify-content-between">
                  <span className="cart-subtotal mb-0">Subtotal</span>
                  <span className="cart-subprice">
                    $
                    {CartList?.reduce(
                      (sum, item) =>
                        sum + item?.qty * parseInt(item?.product?.price),
                      0
                    )}
                  </span>
                </div>
                <p className="cart-taxes text-center my-4">
                  Taxes and shipping will be calculated at checkout.
                </p>
              </div>
              <div
                data-bs-dismiss="offcanvas"
                className="minicart-btn-area d-flex align-items-center justify-content-between"
              >
                <Link to="/cart" className="minicart-btn btn-secondary">
                  View Cart
                </Link>
                <a href="checkout.html" className="minicart-btn btn-primary">
                  Checkout
                </a>
              </div>
            </div>
          </div>
          <div className="cart-empty-area text-center py-5 d-none">
            <div className="cart-empty-icon pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={70}
                height={70}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                <line x1={9} y1={9} x2="9.01" y2={9} />
                <line x1={15} y1={9} x2="15.01" y2={9} />
              </svg>
            </div>
            <p className="cart-empty">You have no items in your cart</p>
          </div>
        </div>
      </div>
      {/* drawer cart end */}
    </>
  );
};

export default Header;
