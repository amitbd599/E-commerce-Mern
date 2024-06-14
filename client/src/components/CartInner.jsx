import React, { useEffect } from "react";
import CartStore from "../store/CartStore";
import { Link } from "react-router-dom";
import { DeleteAlert, SuccessToast } from "../helper/helper";

const CartInner = () => {
  let {
    CartList,
    CartListGetRequest,
    CartListUpdateRequest,
    CartListDeleteRequest,
    CreateInvoiceRequest,
  } = CartStore();

  useEffect(() => {
    (async () => {
      await CartListGetRequest();
    })();
  }, []);

  let updateCartList = async (id, productID, qtyItem) => {
    await CartListUpdateRequest(id, productID, qtyItem).then(async (res) => {
      if (res) {
        await CartListGetRequest();
      }
    });
  };

  let subTotal = CartList?.reduce(
    (sum, item) =>
      sum +
      item?.qty *
        parseInt(
          item?.product?.discount === true
            ? item?.product?.discountPrice
            : item?.product?.price
        ),
    0
  );

  let deleteCartList = async (id) => {
    DeleteAlert(CartListDeleteRequest, id).then(async (res) => {
      if (res) {
        SuccessToast("Cart deleted successfully.");
        await CartListGetRequest();
      }
    });
  };

  let checkoutControl = async () => {
    await CreateInvoiceRequest();
  };

  return (
    <div className="cart-page mt-100">
      <div className="container">
        <div className="cart-page-wrapper">
          {CartList?.length > 0 ? (
            <div className="row">
              <div className="col-lg-7 col-md-12 col-12">
                <table className="cart-table w-100">
                  <thead>
                    <tr>
                      <th className="cart-caption heading_18">Product</th>
                      <th className="cart-caption heading_18" />
                      <th className="cart-caption text-center heading_18 d-none d-md-table-cell">
                        Quantity
                      </th>
                      <th className="cart-caption text-end heading_18">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartList?.reverse()?.map((item, index) => (
                      <tr className="cart-item" key={index}>
                        <td className="cart-item-media">
                          <div className="mini-img-wrapper">
                            <img
                              className="mini-img"
                              src={item?.product?.img1}
                              alt="img"
                            />
                          </div>
                        </td>
                        <td className="cart-item-details">
                          <h2 className="product-title">
                            <Link to={`/product-details/${item?.productID}`}>
                              {item?.product?.title}
                            </Link>
                          </h2>
                          <p className="product-vendor">Color: {item?.color}</p>
                          <p className="product-vendor">Size: {item?.size}</p>
                          <p className="product-vendor">Qty: {item?.qty}</p>
                        </td>
                        <td className="cart-item-quantity">
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
                              <img
                                src="/assets/img/icon/minus.svg"
                                alt="minus"
                              />
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
                          <Link
                            to="#"
                            className="product-remove mt-2"
                            onClick={() => deleteCartList(item?._id)}
                          >
                            Remove
                          </Link>
                        </td>
                        <td className="cart-item-price text-end">
                          <div className="product-price">
                            $
                            {item?.qty *
                              parseInt(
                                item?.product?.discount === true
                                  ? item?.product?.discountPrice
                                  : item?.product?.price
                              )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="cart-total-area">
                  <h3 className="cart-total-title d-none d-lg-block mb-0">
                    Cart Totals
                  </h3>
                  <div className="cart-total-box mt-4">
                    <div className="subtotal-item subtotal-box">
                      <h4 className="subtotal-title">Subtotals:</h4>
                      <p className="subtotal-value">${subTotal}</p>
                    </div>

                    <div className="subtotal-item shipping-box">
                      <h4 className="subtotal-title">Vat ({subTotal} x 5%):</h4>
                      <p className="subtotal-value">${(subTotal * 5) / 100}</p>
                    </div>
                    <div className="subtotal-item shipping-box">
                      <h4 className="subtotal-title">Shipping:</h4>
                      <p className="subtotal-value">$75</p>
                    </div>
                    <hr />
                    <div className="subtotal-item discount-box">
                      <h4 className="subtotal-title">Total:</h4>
                      <p className="subtotal-value">${subTotal + 75}</p>
                    </div>
                    <p className="shipping_text">
                      Shipping &amp; taxes calculated at checkout
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <Link
                        onClick={checkoutControl}
                        to="#"
                        className="position-relative btn-primary text-uppercase"
                      >
                        Procced to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p>No product added 🚫</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartInner;
