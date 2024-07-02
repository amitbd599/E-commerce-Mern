import axios from "axios";
import create from "zustand";

import Cookies from "js-cookie";
import { setEmail, unAuthorize } from "../helper/Helper";
const UserStore = create((set) => ({
  isSubmit: false,



  // is login
  isLogin: () => {
    return !!Cookies.get("token_user");
  },

  // logout
  logout: async () => {
    let res = await axios.get("api/logout-user", {
      withCredentials: true,
    });
    if (res.status === true) {
      return true;
    } else {
      return false;
    }
  },

  // login-user api
  loginAdminRequest: async (reqBody) => {
    let res = await axios.post("/api/login-admin", reqBody, {
      withCredentials: true,
    });
    if (res.data.status === true) {
      setEmail(reqBody.email);
      return true;
    } else {
      return false;
    }
  },

  // admin details
  AdminDetails: [],
  AdminDetailsRequest: async () => {
    try {
      let res = await axios.get("/api/read-admin", {
        withCredentials: true,
      });
      if (res.data.status === true) {
        set({ AdminDetails: res?.data?.data[0] });
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },

  // update admin details
  AdminUpdateRequest: async (reqBody) => {
    try {
      let res = await axios.post("/api/admin-update-user", reqBody, {
        withCredentials: true,
      });
      if (res.data.status === true) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },

  // get all users
  AllUser: [],
  UserAllRequest: async () => {
    try {
      let res = await axios.get("/api/read-all-user", {
        withCredentials: true,
      });
      if (res.data.status === true) {
        set({ AllUser: res?.data?.data });
      } else {
        return false;
      }
    } catch (e) {
      // unAuthorize(e.response.status);
    }
  },
}));

export default UserStore;
