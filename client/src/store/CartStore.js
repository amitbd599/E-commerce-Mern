import axios from "axios";
import create from "zustand";
import { unAuthorize } from "../helper/helper";
const apiUrl = process.env.REACT_APP_API_URL;

const CartStore = create((set) => ({
  loading: false,
  isCartSubmit: false,
  CartList: null,
  InvoiceList: [],
  InvoiceSingle: [],
  allOrder: [],

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
      set({ loading: true });
      set({ isCartSubmit: true });
      let res = await axios.post(
        apiUrl + "/update-cart-list/" + id,
        { qty: qty },
        {
          withCredentials: true,
        }
      );

      if (res?.data?.status === true) {
        set({ loading: false });
        return res?.data?.status === true;
      }

    } catch (e) {
      unAuthorize(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  //! delete cart list
  CartListDeleteRequest: async (id) => {
    try {
      set({ loading: true });
      set({ isCartSubmit: true });
      let res = await axios.delete(apiUrl + "/delete-cart-list/" + id, {
        withCredentials: true,
      });

      if (res?.data?.status === true) {
        set({ loading: false });
        return res?.data?.status === true;
      }
    } catch (e) {
      unAuthorize(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  // create invoice

  CreateInvoiceRequest: async () => {
    try {
      set({ loading: true });
      set({ isCartSubmit: true });
      let res = await axios.post(
        apiUrl + "/create-invoice-list",
        {},
        {
          withCredentials: true,
        }
      );
      if (res?.data?.status === true) {
        window.location.href = res?.data?.data?.GatewayPageURL;
      }
    } catch (e) {
      unAuthorize(e.response.status);
    } finally {
      set({ isCartSubmit: false });
      set({ loading: false });
    }
  },

  // get invoice list
  InvoiceListGetRequest: async () => {
    try {
      let res = await axios.get(apiUrl + "/invoice-list", {
        withCredentials: true,
      });
      if (res?.data?.status === true) {
        set({ InvoiceList: res?.data?.data });
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },

  // get single invoice
  InvoiceSingleGetRequest: async (id) => {
    try {
      let res = await axios.get(apiUrl + "/invoice-product-list/" + id, {
        withCredentials: true,
      });
      if (res?.data?.status === true) {
        set({ InvoiceSingle: res?.data?.data });
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },

  // get all orders
  GetAllOrderRequest: async () => {
    try {
      let res = await axios.get(apiUrl + "/order-list", {
        withCredentials: true,
      });
      if (res?.data?.status === true) {
        set({ allOrder: res?.data?.data });
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },
}));

export default CartStore;
