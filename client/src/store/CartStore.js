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
}));

export default CartStore;
