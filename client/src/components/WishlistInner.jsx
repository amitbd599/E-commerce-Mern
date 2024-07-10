import React from "react";
import WishListStore from "../store/WishListStore";
import { DeleteAlert, SuccessToast } from "../helper/helper";
import { Link } from "react-router-dom";
import Loading from "../helper/loading/Loading";

const WishlistInner = () => {
  let { loading, WishList, WishListDeleteRequest, WishListGetRequest } = WishListStore();

  let deleteWishList = (id) => {
    DeleteAlert(WishListDeleteRequest, id).then(async (res) => {
      if (res) {
        SuccessToast("WishList deleted successfully.");
        await WishListGetRequest();
      }
    });
  };

  return (
    <>

      {
        loading && <Loading />
      }

      <div className="wishlist-page wishlist__custom mt-100">
        {WishList?.length > 0 ? (
          <div className="container">
            <div className="product-table-heading">
              <h4 className="title">My Wish List on eTrade</h4>
            </div>
            <table className="table table-container">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {WishList?.map((item, index) => (
                  <tr key={index}>
                    <th scope="row" className="number">
                      {index + 1}
                    </th>
                    <td className="ProductName">
                      <Link to={`/product-details/${item?.productID}`}>
                        {item?.product?.title}
                      </Link>
                    </td>
                    <td className="price"><span className="card-price-regular">
                      $
                      {item?.product?.discount === true
                        ? item?.product?.discountPrice
                        : item?.product?.price}
                    </span>
                      <span className="card-price-compare text-decoration-line-through">
                        {item?.product?.discount === false
                          ? ""
                          : "$" + item?.product?.price}
                      </span></td>
                    <td className="img">
                      <span className="img__wrapper">
                        <img src={item?.product?.img1} alt="" />
                      </span>
                    </td>
                    <td className="stock">
                      <span
                        className={item?.product?.stock === true ? "in" : "out"}
                      >
                        {item?.product?.stock === true ? "In Stock" : "Stock Out"}
                      </span>
                    </td>
                    <td className="remove">
                      <button onClick={() => deleteWishList(item?._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="container">
            <div>
              <p>No product added 🚫</p>
            </div>
          </div>
        )}
      </div></>

  );
};

export default WishlistInner;
