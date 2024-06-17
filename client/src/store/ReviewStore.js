import axios from "axios";
import create from "zustand";
const apiUrl = process.env.REACT_APP_API_URL;

const ReviewStore = create((set) => ({
  isSubmit: false,
  reviewList: [],

  //! create-Wish-list
  ReviewListCreateRequest: async (reqBody) => {
    let res = await axios.post(apiUrl + "/create-review-list", reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true;
  },

  // get all orders
  GetAllReviewByProductRequest: async (id) => {
    let res = await axios.get(apiUrl + "/read-single-review/" + id, {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      set({ reviewList: res?.data?.data });
    }
  },
}));

export default ReviewStore;
