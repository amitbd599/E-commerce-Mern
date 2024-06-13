import axios from "axios";
import create from "zustand";
import { unAuthorize } from "../helper/helper";
const apiUrl = process.env.REACT_APP_API_URL;

const CartStore = create((set) => ({
  isCartSubmit: false,
  CartList: null,

  //! create-cart-list
  CartListRequest: async (reqBody) => {
    try {
      set({ isCartSubmit: true });
      let res = await axios.post(apiUrl + "/create-cart-list", reqBody, {
        withCredentials: true,
      });

      return res?.data?.status === true;
    } catch (e) {
      unAuthorize(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  //! get cart list
  CartListGetRequest: async () => {
    try {
      let res = await axios.get(apiUrl + "/read-cart-list", {
        withCredentials: true,
      });
      if (res?.data?.status === true) {
        set({ CartList: res?.data?.data });
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },

  //! update cart list
  CartListUpdateRequest: async (id, productID, qty) => {
    try {
      set({ isCartSubmit: true });
      let res = await axios.post(
        apiUrl + "/update-cart-list/" + id,
        { qty: qty.toString() },
        {
          withCredentials: true,
        }
      );

      return res?.data?.status === true;
    } catch (e) {
      unAuthorize(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  //! delete cart list
  CartListDeleteRequest: async (id) => {
    try {
      set({ isCartSubmit: true });
      let res = await axios.post(apiUrl + "/delete-cart-list/" + id, {
        withCredentials: true,
      });

      return res?.data?.status === true;
    } catch (e) {
      unAuthorize(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },
}));

export default CartStore;
