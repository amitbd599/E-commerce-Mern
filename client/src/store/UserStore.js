import axios from "axios";
import create from "zustand";
import { setEmail, unAuthorize } from "../helper/helper";
import Cookies from "js-cookie";
const apiUrl = process.env.REACT_APP_API_URL;

const UserStore = create((set) => ({
  // is login
  isLogin: () => {
    return !!Cookies.get("token_user");
  },

  // logout
  logout: async () => {
    let res = await axios.get(apiUrl + "/logout-user", {
      withCredentials: true,
    });
    if (res.status === true) {
      return true;
    } else {
      return false;
    }
  },

  // login-user api
  loginUserRequest: async (reqBody) => {
    let res = await axios.post(apiUrl + "/login-user", reqBody, {
      withCredentials: true,
    });
    if (res.data.status === true) {
      setEmail(reqBody.email);
      return true;
    } else {
      return false;
    }
  },

  // profile details
  ProfileDetails: null,
  ProfileDetailsRequest: async () => {
    try {
      let res = await axios.get(apiUrl + "/profile-read-user", {
        withCredentials: true,
      });
      if (res.data.status === true) {
        set({ ProfileDetails: res.data.data[0] });
      }
    } catch (e) {
      unAuthorize(e.response.status);
    }
  },

  // update profile details
  ProfileUpdateRequest: async (reqBody) => {
    try {
      let res = await axios.post(apiUrl + "/profile-update-user", reqBody, {
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
}));

export default UserStore;
