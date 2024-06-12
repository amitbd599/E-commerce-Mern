import axios from "axios";
import create from "zustand";
import { setEmail } from "../helper/helper";
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
}));

export default UserStore;
