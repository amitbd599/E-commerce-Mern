import axios from "axios";
import create from "zustand";
import { unAuthorize } from "../helper/helper";
const apiUrl = process.env.REACT_APP_API_URL;

const WishListStore = create((set) => ({
  isWishSubmit: false,
  WishList: null,

  //! create-Wish-list
  WishListRequest: async (reqBody) => {
    try {
      set({ isCartSubmit: true });
      let res = await axios.post(apiUrl + "/create-wish-list", reqBody, {
        withCredentials: true,
      });

      return res?.data?.status === true;
    } catch (e) {
      unAuthorize(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  //! get Wish list
  WishListGetRequest: async () => {
    try {
      let res = await axios.get(apiUrl + "/read-wish-list", {
        withCredentials: true,
      });
      if (res?.data?.status === true) {
        set({ WishList: res?.data?.data });
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },

  //! delete Wish list
  WishListDeleteRequest: async (id) => {
    try {
      set({ isCartSubmit: true });
      let res = await axios.delete(apiUrl + "/delete-wish-list/" + id, {
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

export default WishListStore;
